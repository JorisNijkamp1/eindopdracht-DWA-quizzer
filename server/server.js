'use strict';

const session = require('express-session');
const express = require('express');
const cors = require('cors');               // needed for using webpack-devserver with express server
const bodyParser = require('body-parser')
const http = require('http');
const WebSocket = require('ws');

const app = express();

// needed to make all requests from client work with this server.
app.use(cors({origin: true, credentials: true}));
app.options("*", cors({origin: true, credentials: true}));

app.use(bodyParser.json());

// We need the same instance of the session parser in express and
// WebSocket server, to give socket-handlers access to the session.
const sessionParser = session({
    saveUninitialized: true,
    secret: 'DFJadslkfjgkf$%dfgjlsdg',
    resave: true
});
app.use(sessionParser);

// Create HTTP server by ourselves, in order to attach websocket server.
const httpServer = http.createServer(app);

// Create the Web socket server.
const websocketServer = new WebSocket.Server({noServer: true});

let games = [];
app.post('/api/game', (req, res, next) => {
    req.session.gameRoomName = req.body.gameRoomName;
    console.log(req.session);

    if (!games.includes(req.body.gameRoomName)) {
        games.push(req.body.gameRoomName);
        res.json({
            gameRoomNameAccepted: true,
            QuizMaster: true,
            gameRoomName: req.body.gameRoomName
        });
    } else {
        res.json({
            gameRoomNameAccepted: false,
        });
    }
});


httpServer.on('upgrade', (req, networkSocket, head) => {
    sessionParser(req, {}, () => {
        // Everything is fine. We tell the websocket server to
        // initiate a new websocket connection for this request
        // and emit a new connection event passing in the
        // newly created websocket when the setup is complete
        websocketServer.handleUpgrade(req, networkSocket, head, newWebSocket => {
            websocketServer.emit('connection', newWebSocket, req);
        });
    });
});

let playerCount = 0;
websocketServer.on('connection', (socket, req) => {
    playerCount++; // Add 1 to total amount of players

    console.log('A new player is connected');
    console.log('Current gamerooms: ' + games);

    socket.on('message', (message) => {
        req.session.reload((err) => {   // if we don't call reload(), we'll get a old copy
            // of the session, and won't see changes made by
            // Express routes (like '/logout', above)
            if (err) {
                throw err
            }

            // Here we can now use session parameters, because we called the sessionParser
            // in the verifyClient function

            if (req.session.userName == undefined) {
                // The session does not contain the name of a user, so this this client
                // has probably logged out.
                // We'll simply ignore any messages from this client.
                console.log(`Ignoring message from logged out user: "${message}"`);
                return;
            }

            req.session.messageCounter++;
            console.log(`${req.session.messageCounter}th WS message from ${req.session.userName}: "${message}"`);

            // broadcast this message to all connected browsers
            const outMessage = `[${req.session.userName} / ${req.session.messageCounter}]: ${message}`
            websocketServer.clients.forEach(function (client) {
                client.send(outMessage);
            });

            req.session.save()  // If we don't call save(), Express routes like '/logout' (above)
                                // will not see the changes we make to the session in this socket code.
        })
    });

    socket.on('close', function close() {
        console.log('disconnected');
        console.log(games);
    });

});


// Start the server.
const port = process.env.PORT || 3001;
httpServer.listen(port, () => console.log(`Listening on http://localhost:${port}`));
