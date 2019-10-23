'use strict';
const mongoose = require('mongoose');
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
app.post('/api/game', (req, res) => {
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

app.post('/api/team', (req, res) => {
    req.session.gameRoomName = req.body.gameRoomName;
    console.log(req.session);

    if (games.includes(req.body.gameRoomName)) {
        res.json({
            gameRoomAccepted: true,
            gameRoomName: req.body.gameRoomName,
            teamName: req.body.teamName,
        });
    } else {
        res.json({
            gameRoomAccepted: false,
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

    console.log('A new player is connected');
    console.log('Current gamerooms: ' + games);
    console.log(req.session);

    req.session.save();
    socket.on('message', (message) => {
        req.session.reload((err) => {
            // if we don't call reload(), we'll get a old copy
            // of the session, and won't see changes made by
            // Express routes (like '/logout', above)

            console.log('aanpassen session');

            if (err) {
                throw err
            }
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
httpServer.listen(port, () => {
    mongoose.connect(`mongodb://localhost:27017/quizzer`,  {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log(`game server started on port http://localhost:${port}`);
    });
    console.log(`Listening on http://localhost:${port}`)
});
