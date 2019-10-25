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

/*====================================
| GET ALL TEAMS FROM A GAMEROOM
*/
app.get('/api/games/:gameRoom/teams', async (req, res) => {
    const gameRoom = req.params.gameRoom;

    let currentGame = await Games.findOne({_id: gameRoom});

    return res.json({
        teams: currentGame.teams,
    })
});

/*====================================
| DELETING A TEAM
*/
app.delete('/api/games/:gameRoom/team/:teamName', async (req, res) => {
    const gameRoom = req.params.gameRoom;
    const teamName = req.params.teamName;

    //Check of isset session gameRoomName & is quizMaster
    if (req.session.gameRoomName === gameRoom && req.session.quizMaster) {

        //get current game
        let currentGame = await Games.findOne({_id: gameRoom});

        //find the team in the array
        currentGame.teams.forEach(function (arrayItem, key) {
            if (arrayItem['_id'] === teamName) {
                currentGame.teams.splice(key, 1)
            }
        });

        //save gameRoomName document to MongoDB
        currentGame.save(function (err, game) {
            if (err) return console.error(err);
            console.log(teamName + " verwijderd uit gameRoom: " + game._id);
        });

        return res.json({
            success: true,
        })
    }
});

/*====================================
| ACCEPTING A TEAM
*/
app.put('/api/games/:gameRoom/team/:teamName', async (req, res) => {
    console.log('TEAM ACCEPTEREN');
});

/*====================================
| CREATE A NEW GAMEROOM
*/
app.post('/api/game', async (req, res) => {
    //Game room name
    const gameRoomName = req.body.gameRoomName;

    //Check if gameRoomName is already in mongoDB
    const gameRoomExits = await Games.findOne({_id: gameRoomName});

    //If gameRoomName isn't in mongoDB
    if (!gameRoomExits) {

        //create gameRoomName
        var newGame = new Games({
            _id: gameRoomName,
        });

        //save gameRoomName document to MongoDB
        newGame.save(function (err, game) {
            if (err) return console.error(err);
            console.log(game._id + " saved to Games collection.");
        });

        //set session gameRoomName
        req.session.gameRoomName = gameRoomName;

        //set session quizMaster = true
        req.session.quizMaster = true;

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

/*====================================
| CREATE A NEW TEAM
*/
app.post('/api/team', async (req, res) => {
    const gameRoomName = req.body.gameRoomName;
    const teamName = req.body.teamName;

    //Get current game
    let currentGame = await Games.findOne({_id: gameRoomName});

    //check of teamName available is
    //ToDo: misschien moet dit in een aparte functie?
    let isTeamNameAvailable = true;
    currentGame.teams.forEach(function (arrayItem) {
        console.log(arrayItem['_id']);
        if (arrayItem['_id'] === teamName) {
            isTeamNameAvailable = false;
        }
    });

    if (currentGame) {
        //Checks if team isn't already in current game
        if (isTeamNameAvailable) {

            currentGame.teams.push({
                _id: teamName,
                approved: false,
                team_score: 0
            });

            //Save to mongoDB
            currentGame.save(function (err) {
                if (err) return console.error(err);
                console.log('Team toegevoegd');
                res.json({
                    gameRoomAccepted: true,
                    teamNameStatus: 'pending',
                    gameRoomName: gameRoomName,
                    teamName: teamName,
                });
            });

            //set session gameRoomName
            req.session.gameRoomName = gameRoomName;

            //set session teamName
            req.session.teamName = teamName;
        } else {
            console.log('team bestaat al')
            res.json({
                gameRoomAccepted: true,
                teamNameStatus: 'error'
            });
        }
    } else {
        console.log('Gameroom bestaat niet')
        res.json({
            gameRoomAccepted: false,
            teamNameStatus: false
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

var totalPlayers = 0;
var players = {};
websocketServer.on('connection', (socket, req) => {

    console.log('A new player is connected');
    console.log(req.session);
    req.session.save();

    const gameRoom = req.session.gameRoomName;
    const quizMaster = req.session.quizMaster;

    totalPlayers = totalPlayers + 1;
    socket.id = totalPlayers;

    //Als er een session is met een gameRoomName zet je de gameRoomName in de socket
    if (gameRoom) {
        players[socket.id] = socket;
        players[socket.id].gameRoomName = gameRoom;

        //console.log(players[socket.id].gameRoomName);

        //als diegene de quizmaster is, krijgt hij dat ook in zijn socket
        if (quizMaster) {
            players[socket.id].quizMaster = true;
            //console.log(players[socket.id].quizMaster);
        }
    }

    socket.on('message', (message) => {
        req.session.reload((err) => {

            //convert json message to a javascript object
            const data = JSON.parse(message);

            if (err) {
                throw err
            }

            if (data.messageType === 'NEW TEAM') {
                for (var key in players) {
                    if (players.hasOwnProperty(key)) {
                        if (players[key].quizMaster && players[key].gameRoomName === gameRoom) {
                            console.log('You are a quizmaster')

                            players[key].send(JSON.stringify({
                                messageType: "NEW TEAM",
                            }));
                        }
                    }
                }
            }

            if (data.messageType === 'TEAM DELETED') {
                console.log('TEAM DELETED SERVER MSG')
            }

            req.session.save()
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
