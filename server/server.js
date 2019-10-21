var express = require('express');
var ws = require('ws');
var http = require('http');
var path = require('path');

var theExpressApp = express();
var theHttpServer = http.createServer();
var theWebSocketServer = new ws.Server({
    server: theHttpServer
});

// Global var that holds amount of players
let playerCount = 0;

// Code to setup the Express app (middleware, routes) can go here.
theExpressApp.use(express.static(path.join(__dirname, 'client-side')));
theWebSocketServer.on('connection', function connection(websocket) {
    console.log('CONNECTION CREATED');
    playerCount++; // Add 1 to total amount of players

    websocket.on('message', function incoming(message) {
        console.log(JSON.parse(message));
        const data = JSON.parse(message);

        if (data.messageType === 'NEW CONNECTION') {
            theWebSocketServer.clients.forEach(function (client) {
                client.send(JSON.stringify({
                    messageType: "NEW PLAYER",
                    totalPlayers: theWebSocketServer.clients.size
                }));
            });
        }
    });
});

theHttpServer.on('request', theExpressApp);
theHttpServer.listen(3001,
    function () {
        console.log("The Server is lisening on port 3001.")
    });

