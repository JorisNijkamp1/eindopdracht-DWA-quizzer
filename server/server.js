'use strict';
const mongoose = require('mongoose');
const session = require('express-session');
const express = require('express');
const cors = require('cors');               // needed for using webpack-devserver with express server
const bodyParser = require('body-parser')
const http = require('http');
const WebSocket = require('ws');

mongoose.set('useCreateIndex', true);
//Database model
require('./database/model/games');
const Games = mongoose.model("Games");

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

app.post('/api/game', async (req, res) => {
    //Game room name
    const gameRoomName = req.body.gameRoomName;

    //Check if gameRoomName is already in mongoDB
    const gameRoomExits = await Games.findOne({_id: gameRoomName});

    //If gameRoomName isn't in mongoDB
    if (!gameRoomExits) {

        //create gameRoomName
        var newGame = new Games({
            _id: gameRoomName
        });

        //save gameRoomName document to MongoDB
        newGame.save(function (err, game) {
            if (err) return console.error(err);
            console.log(game._id + " saved to Games collection.");
        });

        //set session gameRoomName
        req.session.gameRoomName = gameRoomName;

        //send result
        res.json({
            gameRoomNameAccepted: true,
            QuizMaster: true,
            gameRoomName: gameRoomName
        });
    } else {
        res.json({
            gameRoomNameAccepted: false,
        });
    }
});


app.post('/api/team', async (req, res) => {
    const gameRoomName = req.body.gameRoomName;
    const teamName = req.body.teamName;

    //Check if gameRoomName is already in mongoDB
    let currentGameRoom = await Games.findOne({_id: gameRoomName});

    //If gameRoomName is in mongoDB
    if (currentGameRoom) {

        //ToDo: Dit gaat nog niet goed, de teamanam staat in Mongoose op unique, maar je kan meerdere teams toevoegen
        //Add a new team to a current Game in mongoDB
        Games.updateOne(
            { "_id": gameRoomName},
            { "$push": { "teams": teamName } },
            function (err, raw) {
                if (err) return handleError(err);
                console.log('Team succesfully added to Gameroom');
            }
        );

        //set session gameRoomName
        req.session.gameRoomName = gameRoomName;

        //set session teamName
        req.session.teamName = teamName;

        res.json({
            gameRoomAccepted: true,
            gameRoomName: gameRoomName,
            teamName: teamName,
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
    // console.log('Current gamerooms: ' + games);
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
    });

});


// Start the server.
const port = process.env.PORT || 3001;
httpServer.listen(port, () => {
    mongoose.connect(`mongodb://localhost:27017/quizzer`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log(`game server started on port http://localhost:${port}`);
    });
});
