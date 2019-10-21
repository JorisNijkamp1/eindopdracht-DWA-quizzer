import React from 'react';
import './App.css';
import GameMenu from "./components/GameMenu";
import TeamsBeheren from "./components/quiz-master/TeamsBeheren";
import Categorieen from "./components/quiz-master/Categorieen";
import {
    Switch,
    Route
} from "react-router-dom";
import CreateGame from "./components/quiz-master/CreateGame";

class App extends React.Component {

    componentDidMount() {
        // the WebSocket itself.
        var wsConnection = new WebSocket("ws://localhost:3001");

        // this method is not in the official API, but it's very useful.
        wsConnection.sendJSON = function (data) {
            this.send(JSON.stringify(data));
        };

        wsConnection.onopen = function (eventInfo) {
            console.log("Socket connection is open!");
            let message = {
                messageType: "NEW CONNECTION",
            };

            wsConnection.sendJSON(message);
        };

        wsConnection.onclose = function (eventInfo) {
            console.log("Socket connection is closed!", eventInfo.code, eventInfo.reason, eventInfo.wasClean);
        };

        wsConnection.onmessage = function (eventInfo) {
            console.log("Socket message arrived!", eventInfo.data);
            var message = JSON.parse(eventInfo.data);
            switch (message.messageType) {
                case "NEW PLAYER":
                    console.log(message);
                    console.log(+message.totalPlayers + " players online");
                    break;
                default:
                    console.log("Unknown messageType:", message);
            }
        };

        wsConnection.onerror = function (eventInfo) {
            alert("There was a connection error!");
            console.log("Socket error!", eventInfo);
        };
    }

    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <GameMenu/>
                </Route>
                /* QUIZ MASTER PATHS DIT MOET DENK IK NOG ANDERS SAMEN EMT AARON NAAR KIJKEN */
                <Route path="/quiz-master">
                    <CreateGame/>
                </Route>
                <Route path="/teamsBeheren">
                    <TeamsBeheren/>
                </Route>
                <Route path="/categorieen">
                    <Categorieen/>
                </Route>

                <Route path="/new-team">
                    <GameMenu/>
                </Route>
                <Route path="/scoreboard">
                    <GameMenu/>
                </Route>
            </Switch>
        );
    }
}

export default App;
