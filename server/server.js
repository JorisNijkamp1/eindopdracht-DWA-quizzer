'use strict';
const mongoose = require('mongoose');
const session = require('express-session');
const express = require('express');
const cors = require('cors');               // needed for using webpack-devserver with express server
const bodyParser = require('body-parser')
const http = require('http');
const WebSocket = require('ws');
const dbConfig = require('./config');

mongoose.set('useCreateIndex', true);
require('./database/model/games');
require('./database/model/questions');
const Games = mongoose.model("Games");
const Questions = mongoose.model("Questions");

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
| JOIN GAME WITH SCOREBOARD
*/
app.get('/api/games/:gameRoom/scoreboard', async (req, res) => {
    const gameRoomName = req.params.gameRoom;

    //Get current game
    let currentGame = await Games.findOne({_id: gameRoomName});

    //set session gameRoomName
    req.session.gameRoomName = gameRoomName;

    //set session quizMaster = true
    req.session.scoreBoard = true;

    //Check if game exits
    if (currentGame) {
        await res.json({
            success: true,
            gameRoomName: gameRoomName,
            currentTeams: currentGame.teams
        });
    } else {
        await res.json({
            success: false,
        });
    }
});

/*====================================
| GET ALL TEAMS FROM A GAMEROOM
*/
app.get('/api/games/:gameRoom/teams', async (req, res) => {
    const gameRoom = req.params.gameRoom;

    let currentGame = await Games.findOne({_id: gameRoom});

    console.log(currentGame.teams)

    return res.json({
        success: true,
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
    const gameRoom = req.params.gameRoom;
    const teamName = req.params.teamName;

    //Check of isset session gameRoomName & is quizMaster
    if (req.session.gameRoomName === gameRoom && req.session.quizMaster) {

        //get current game
        let currentGame = await Games.findOne({_id: gameRoom});

        //find the team in the array and update the team
        currentGame.teams.forEach(function (arrayItem, key) {
            if (arrayItem['_id'] === teamName) {
                currentGame.teams[key].approved = true;
            }
        });

        //save gameRoomName document to MongoDB
        currentGame.save(function (err, game) {
            if (err) return console.error(err);
            console.log(teamName + " geaccepteerd in gameRoom: " + game._id);
        });

        return res.json({
            success: true,
        })
    }
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
            game_status: 'lobby'
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
        await res.json({
            gameRoomNameAccepted: true,
            QuizMaster: true,
            gameRoomName: gameRoomName
        });
    } else {
        await res.json({
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

    //Check if game exits
    if (currentGame) {

        //check of teamName available is
        let isTeamNameAvailable = true;
        currentGame.teams.forEach(function (arrayItem) {
            if (arrayItem['_id'] === teamName) {
                isTeamNameAvailable = false;
            }
        });

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
            await res.json({
                gameRoomAccepted: true,
                teamNameStatus: 'error'
            });
        }
    } else {
        await res.json({
            gameRoomAccepted: false,
            teamNameStatus: false
        });
    }
});

/*====================================
| START A NEW GAME (FROM LOBBY TOO CHOOSE_CATEGORY)
*/
app.put('/api/games/:gameRoom', async (req, res) => {
    const gameRoomName = req.params.gameRoom;

    //Check of isset session gameRoomName & is quizMaster
    if (req.session.gameRoomName === gameRoomName && req.session.quizMaster) {

        //Get current game
        let currentGame = await Games.findOne({_id: gameRoomName});

        //Check if game exits
        if (currentGame) {

            //Change current game status to choose_category
            currentGame.game_status = 'choose_category';

            //Save to mongoDB
            currentGame.save(function (err) {
                if (err) return console.error(err);
                res.json({
                    success: true,
                });
            });

        } else {
            await res.json({
                success: false,
            });
        }
    }
});

/*====================================
| CREATE A NEW ROUND WITH QUESTIONS CATEGORIES
*/
app.post('/api/games/:gameRoom/ronde', async (req, res) => {
    const gameRoomName = req.params.gameRoom;

    //Check of isset session gameRoomName & is quizMaster
    if (req.session.gameRoomName === gameRoomName && req.session.quizMaster) {
        const roundCategories = req.body.roundCategories;

        //Get current game
        let currentGame = await Games.findOne({_id: gameRoomName});

        //Check if game exits
        if (currentGame) {
            currentGame.rondes.push({
                categories: roundCategories,
                ronde_status: 'open',
                vragen: []
            });

            //Change current game status to choose_question
            currentGame.game_status = 'choose_question';

            //Save to mongoDB
            currentGame.save(function (err) {
                if (err) return console.error(err);
                res.json({
                    success: true,
                });
            });

        } else {
            await res.json({
                success: false,
            });
        }
    }
});

/*====================================
| GET ALL QUESTION CATEGORIES
*/
app.get('/api/questions/categories', async (req, res) => {

    //Check of isset session gameRoomName & is quizMaster
    if (req.session.quizMaster) {
        let questions = await Questions.find({});

        //get a array with unique categories
        const categories = [];
        questions.forEach(function (arrayItem, key) {
            if (!categories.includes(arrayItem.category)) {
                categories.push(arrayItem.category)
            }
        });

        await res.json({
            success: true,
            categories: categories
        });
    }
});

/*====================================
| GET ALL QUESTION FROM THE SELECTED CATEGORIES
*/
app.get('/api/game/:gameRoom/ronde/:rondeID/questions', async (req, res) => {
    const gameRoomName = req.params.gameRoom;
    const rondeID = (req.params.rondeID - 1);

    //Check of isset session gameRoomName & is quizMaster
    if (req.session.gameRoomName === gameRoomName && req.session.quizMaster) {

        //Get current game
        let currentGame = await Games.findOne({_id: gameRoomName});

        //Get all questions
        let allQuestions = await Questions.find(
            {category: {$in: currentGame.rondes[rondeID].categories}});

        //push 10 random questions in a array
        const questions = [];
        for (let i = 0; i < 10; i++) {
            questions.push(allQuestions[Math.floor(Math.random() * allQuestions.length)])
        }

        await res.json({
            success: true,
            questions: questions
        });
    }
});

/*====================================
| POST A NEW QUESTION
*/
app.post('/api/game/:gameRoom/ronde/:rondeID/question', async (req, res) => {
    const gameRoomName = req.params.gameRoom;
    const rondeID = (req.params.rondeID - 1);

    //Check of isset session gameRoomName & is quizMaster
    if (req.session.gameRoomName === gameRoomName && req.session.quizMaster) {

        //Get current game
        let currentGame = await Games.findOne({_id: gameRoomName});

        const question = req.body.question;

        if (question) {
            currentGame.rondes[rondeID].vragen.push({
                vraag: question.question,
                antwoord: question.answer,
                categorie_naam: question.category,
                team_antwoorden: []
            });

            //Change current game status to choose_question
            currentGame.game_status = 'asking_question';

            //Change current round status
            currentGame.rondes[rondeID].ronde_status = 'asking_question';

            //Save to mongoDB
            currentGame.save(function (err) {
                if (err) return console.error(err);
                res.json({
                    success: true,
                    round_ended: false,
                    show_questions: false,
                    question: question.question,
                    category: question.category,
                    answer: question.answer
                });
            });
        } else {
            //Change current game status to choose_question
            currentGame.game_status = 'choosing_question';

            //Change current round status
            currentGame.rondes[rondeID].ronde_status = 'choosing_question';

            //Check if round is ended
            const maxRounds = 2;
            let currentRounds = currentGame.rondes[rondeID].vragen.length;

            let round_ended = (currentRounds >= maxRounds);

            //Save to mongoDB
            currentGame.save(function (err) {
                if (err) return console.error(err);
                res.json({
                    success: true,
                    round_ended: round_ended,
                    show_questions: true,
                });
            });
        }
    }
});


/*====================================
| POST A ANSWER AS TEAM ON A QUESTION
*/
app.post('/api/game/:gameRoom/ronde/:rondeID/question/:questionID/team/:teamName/answer', async (req, res) => {
    const gameRoomName = req.params.gameRoom;
    const roundID = (req.params.rondeID - 1);
    const questionID = (req.params.questionID - 1);
    const teamName = req.params.teamName;

    //Check of isset session gameRoomName & is quizMaster
    if (req.session.gameRoomName === gameRoomName) {

        const teamAnswer = req.body.teamAnswer

        //Get current game
        let currentGame = await Games.findOne({_id: gameRoomName});

        let isAlreadyAnswered = false;
        let teamKey = null;

        //Check if team has already answered
        currentGame.rondes[roundID].vragen[questionID].team_antwoorden.forEach(function (arrayItem, key) {
            if (arrayItem.team_naam.includes(teamName) && arrayItem.team_naam === teamName) {
                isAlreadyAnswered = true;
                teamKey = key;
            }
        });

        if (isAlreadyAnswered) {
            currentGame.rondes[roundID].vragen[questionID].team_antwoorden[teamKey].gegeven_antwoord = teamAnswer;
        } else {
            currentGame.rondes[roundID].vragen[questionID].team_antwoorden.push({
                team_naam: teamName,
                gegeven_antwoord: teamAnswer,
                correct: null,
            });
        }

        //Save to mongoDB
        currentGame.save(function (err) {
            if (err) return console.error(err);
            res.json({
                success: true,
                teamName: teamName,
                teamAnswer: teamAnswer
            });
        });
    }
});

/*====================================
| GET ALL ANSWERS FROM A QUESTION
*/
app.get('/api/game/:gameRoom/ronde/:rondeID/question/:questionID/answers', async (req, res) => {
    const gameRoom = req.params.gameRoom;
    const roundID = (req.params.rondeID - 1);
    const questionID = (req.params.questionID - 1);

    //Check of isset session gameRoomName & is quizMaster
    if (req.session.gameRoomName === gameRoom && req.session.quizMaster) {
        let currentGame = await Games.findOne({_id: gameRoom});

        return res.json({
            success: true,
            answers: currentGame.rondes[roundID].vragen[questionID].team_antwoorden,
        })
    }
});

/*====================================
| CHANGE THE STATUS OF THE GAME TO CURRENT QUESTION CLOSED (AS QUIZMASTER)
*/
app.put('/api/game/:gameRoom/ronde/:rondeID/question', async (req, res) => {
    const gameRoomName = req.params.gameRoom;
    const roundID = (req.params.rondeID - 1);

    //Check of isset session gameRoomName & is quizMaster
    if (req.session.gameRoomName === gameRoomName && req.session.quizMaster) {

        //Get current game
        let currentGame = await Games.findOne({_id: gameRoomName});

        //Change current round status
        currentGame.rondes[roundID].ronde_status = 'question_closed';

        currentGame.game_status = 'question_closed';

        //Save to mongoDB
        currentGame.save(function (err) {
            if (err) return console.error(err);
            res.json({
                success: true,
                gameStatus: 'question_closed'
            });
        });
    }
});

/*====================================
| CHANGE A TEAM ANSWER TO CORRECT OR INCORRECT (AS QUIZMASTER)
*/
app.put('/api/game/:gameRoom/ronde/:rondeID/question/:questionID/team/:teamName/answer', async (req, res) => {
    const gameRoomName = req.params.gameRoom;
    const roundID = (req.params.rondeID - 1);
    const questionID = (req.params.questionID - 1);
    const teamName = req.params.teamName;

    //Check of isset session gameRoomName & is quizMaster
    if (req.session.gameRoomName === gameRoomName && req.session.quizMaster) {

        const isCorrect = req.body.isCorrect;

        //Get current game
        let currentGame = await Games.findOne({_id: gameRoomName});

        let isAnswered = false;
        let teamKey = null;

        //Check if team has already answered
        currentGame.rondes[roundID].vragen[questionID].team_antwoorden.forEach(function (arrayItem, key) {
            if (arrayItem.team_naam.includes(teamName) && arrayItem.team_naam === teamName) {
                isAnswered = true;
                teamKey = key;
            }
        });

        if (isAnswered) {
            currentGame.rondes[roundID].vragen[questionID].team_antwoorden[teamKey].correct = isCorrect;
        }

        //Save to mongoDB
        currentGame.save(function (err) {
            if (err) return console.error(err);
            res.json({
                success: true,
                answers: currentGame.rondes[roundID].vragen[questionID].team_antwoorden,
            });
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
    req.session.save();

    const gameRoom = req.session.gameRoomName;
    const quizMaster = req.session.quizMaster;
    const scoreBoard = req.session.scoreBoard;
    const teamName = req.session.teamName;

    totalPlayers = totalPlayers + 1;
    socket.id = totalPlayers;

    //Als er een session is met een gameRoomName zet je de gameRoomName in de socket
    if (gameRoom) {
        players[socket.id] = socket;
        players[socket.id].gameRoomName = gameRoom;
        players[socket.id].teamName = teamName;

        //als diegene de quizmaster is, krijgt hij dat ook in zijn socket
        if (quizMaster) {
            players[socket.id].quizMaster = true;
        }

        //als diegene de scoreboard is, krijgt hij dat ook in zijn socket
        if (scoreBoard) {
            players[socket.id].scoreBoard = true;
        }
    }

    socket.on('message', (message) => {
        req.session.reload((err) => {

            //convert json message to a javascript object
            const data = JSON.parse(message);

            if (err) throw err;

            /*====================================
            | TO: QuizMaster & ScoreBoard
            | Send NEW TEAM msg
            */
            if (data.messageType === 'NEW TEAM') {
                for (var key in players) {
                    if (players.hasOwnProperty(key)) {
                        if (players[key].quizMaster && players[key].gameRoomName === gameRoom || players[key].scoreBoard && players[key].gameRoomName === gameRoom) {
                            players[key].send(JSON.stringify({
                                messageType: "NEW TEAM",
                            }));
                        }
                    }
                }
            }

            /*====================================
            | TO: Specific Team
            | Send TEAM ACCEPTED msg
            */
            if (data.messageType === 'TEAM ACCEPTED') {
                let data = JSON.parse(message);
                for (var key in players) {
                    if (players.hasOwnProperty(key)) {
                        if (!players[key].quizMaster && players[key].gameRoomName === gameRoom && players[key].teamName === data.teamName) {
                            players[key].send(JSON.stringify({
                                messageType: "TEAM ACCEPTED",
                            }));
                        }
                    }
                }
            }

            /*====================================
            | TO: Specific Team & ScoreBoard
            | Send TEAM DELETED msg
            */
            if (data.messageType === 'TEAM DELETED') {
                let data = JSON.parse(message);
                for (var key in players) {
                    if (players.hasOwnProperty(key)) {
                        if (!players[key].quizMaster && players[key].gameRoomName === gameRoom && players[key].teamName === data.teamName || players[key].scoreBoard && players[key].gameRoomName === gameRoom) {
                            players[key].send(JSON.stringify({
                                messageType: "TEAM DELETED",
                            }));
                        }
                    }
                }
            }

            /*====================================
            | TO: All teams in a gameRoom AND QuizMaster
            | Send message that the QuizMaster is choosing categories
            */
            if (data.messageType === 'CHOOSE CATEGORIES') {
                for (var key in players) {
                    if (players.hasOwnProperty(key)) {
                        if (players[key].gameRoomName === gameRoom) {
                            players[key].send(JSON.stringify({
                                messageType: "CHOOSE CATEGORIES",
                            }));
                        }
                    }
                }
            }

            /*====================================
            | TO: All teams in a gameRoom, QuizMaster AND scoreboard
            | Send message that the QuizMaster is choosing a question
            */
            if (data.messageType === 'CHOOSE QUESTION') {
                for (var key in players) {
                    if (players.hasOwnProperty(key)) {
                        if (players[key].gameRoomName === gameRoom) {
                            players[key].send(JSON.stringify({
                                messageType: "CHOOSE QUESTION",
                            }));
                        }
                    }
                }
            }

            /*====================================
            | TO: All teams in a gameRoom, QuizMaster AND ScoreBoard
            | Send message that the QuizMaster is asking a question
            */
            if (data.messageType === 'ASKING QUESTION') {
                let data = JSON.parse(message);
                for (var key in players) {
                    if (players.hasOwnProperty(key)) {
                        if (players[key].gameRoomName === gameRoom || players[key].scoreBoard && players[key].gameRoomName === gameRoom) {
                            players[key].send(JSON.stringify({
                                messageType: "ASKING QUESTION",
                                question: data.question,
                                category: data.category
                            }));
                        }
                    }
                }

                //For QuizMaster ONLY (Sends the correct answer to the QuizMaster)
                for (var key in players) {
                    if (players.hasOwnProperty(key)) {
                        if (players[key].quizMaster && players[key].gameRoomName === gameRoom) {
                            players[key].send(JSON.stringify({
                                messageType: "CORRECT QUESTION ANSWER",
                                answer: data.answer
                            }));
                        }
                    }
                }
            }

            /*====================================
            | TO: QuizMaster
            | Send GET QUESTION ANSWERS msg
            */
            if (data.messageType === 'GET QUESTION ANSWERS') {
                let data = JSON.parse(message);
                for (var key in players) {
                    if (players.hasOwnProperty(key)) {
                        if (players[key].quizMaster && players[key].gameRoomName === gameRoom) {
                            players[key].send(JSON.stringify({
                                messageType: "GET QUESTION ANSWERS",
                                gameRoomName: data.gameRoomName,
                                roundNumber: data.roundNumber,
                                questionNumber: data.questionNumber
                            }));
                        }
                    }
                }
            }

            /*====================================
            | TO: ScoreBoard
            | Send SCOREBOARD TEAM ANSWERED msg
            */
            if (data.messageType === 'SCOREBOARD TEAM ANSWERED') {
                for (var key in players) {
                    let data = JSON.parse(message);

                    if (players.hasOwnProperty(key)) {
                        if (players[key].scoreBoard && players[key].gameRoomName === gameRoom) {
                            players[key].send(JSON.stringify({
                                messageType: "SCOREBOARD TEAM ANSWERED",
                                teamName: data.teamName,
                                scoreBoardData: [{
                                    teamName: data.teamName,
                                }]
                            }));
                        }
                    }
                }
            }

            /*====================================
            | TO: ScoreBoard
            | Send SCOREBOARD TEAM ANSWERED msg
            */
            if (data.messageType === 'SEND ANSWERS TO SCOREBOARD') {
                for (var key in players) {
                    if (players.hasOwnProperty(key)) {
                        if (players[key].scoreBoard && players[key].gameRoomName === gameRoom) {
                            players[key].send(JSON.stringify({
                                messageType: "SEND ANSWERS TO SCOREBOARD",
                            }));
                        }
                    }
                }
            }

            /*====================================
            | TO: All teams in a gameRoom, QuizMaster AND ScoreBoard
            | Send message that the QuizMaster has closed the current question
            */
            if (data.messageType === 'QUESTION CLOSED') {
                for (var key in players) {
                    if (players.hasOwnProperty(key)) {
                        if (players[key].gameRoomName === gameRoom || players[key].scoreBoard && players[key].gameRoomName === gameRoom) {
                            players[key].send(JSON.stringify({
                                messageType: "QUESTION CLOSED",
                            }));
                        }
                    }
                }
            }

            /*====================================
            | TO: All teams in a gameRoom, QuizMaster AND ScoreBoard
            | Send message that the QuizMaster has closed the current question
            */
            if (data.messageType === 'END ROUND') {
                for (var key in players) {
                    if (players.hasOwnProperty(key)) {
                        if (players[key].gameRoomName === gameRoom || players[key].scoreBoard && players[key].gameRoomName === gameRoom) {
                            players[key].send(JSON.stringify({
                                messageType: "END ROUND",
                            }));
                        }
                    }
                }
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
    mongoose.connect(`mongodb://${dbConfig.USERNAME}:${dbConfig.PASSWORD}@${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log(`game server started on port http://localhost:${port}`);
    });
});
