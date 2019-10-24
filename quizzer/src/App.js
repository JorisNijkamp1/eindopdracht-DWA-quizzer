import React from 'react';
import './App.css';
import GameMenu from "./components/GameMenu";
import {TeamsBeheren} from "./components/quiz-master/TeamsBeheren";
import Categorieen from "./components/quiz-master/Categorieen";
import {TeamAanmaken} from "./components/team-app/TeamAanmaken";
import ScorebordAntwoorden from "./components/score-bord/ScorebordAntwoorden";
import ScorebordOverzichtScore from "./components/score-bord/ScorebordOverzichtScore";
import Vragen from "./components/quiz-master/Vragen";
import VragenBeheren from "./components/quiz-master/VragenBeheren";
import EindRonde from "./components/quiz-master/EindRonde";
import {Switch, Route} from "react-router-dom";
import {CreateGame} from "./components/quiz-master/CreateGame";
import { openWebSocket, getWebSocket, startLogin, startLogout } from './serverCommunication';
import ScorebordBeoordeling from "./components/score-bord/ScorebordBeoordeling";


//============================================================================
//  The React component that renders the UI for the entire App.
//----------------------------------------------------------------------------

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            messages: ["test message 1", "test message 2"]
        }
    }

    componentDidMount() {
        console.log("Verbonden met websocket verbinding");
        let ws = openWebSocket();
        ws.onerror = () => this.addMessage('WebSocket error');
        ws.onopen = () => this.addMessage('WebSocket connection established');
        ws.onclose = () => this.addMessage('WebSocket connection closed');
        ws.onmessage = (msg) => this.addMessage(msg.data);
    }

    addMessage(msg) {
        if(typeof msg !== "string") {
            msg = JSON.stringify(msg);
        }
        this.setState( (prevState) => ( {messages: [msg].concat(prevState.messages)}));
    };

    onSend() {
        const msg = "Here's a brand new number: " + (Math.round(Math.random()*1000000));
        const ws = getWebSocket();
        ws.send(msg);
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
                <Route path="/vragen">
                    <Vragen/>
                </Route>
                <Route path="/vragen-beheren">
                    <VragenBeheren/>
                </Route>
                <Route path="/eind-ronde">
                    <EindRonde/>
                </Route>
                /* TEAM APP PATHS DIT MOET DENK IK NOG ANDERS SAMEN EMT AARON NAAR KIJKEN */
                <Route path="/new-team">
                    <TeamAanmaken/>
                </Route>
                /* SCORE BORD PATHS DIT MOET DENK IK NOG ANDERS SAMEN EMT AARON NAAR KIJKEN */
                <Route path="/scorebord-overzicht">
                    <ScorebordOverzichtScore/>
                </Route>
                <Route path="/scorebord-antwoorden">
                    <ScorebordAntwoorden/>
                </Route>
                <Route path="/scorebord-beoordeling">
                    <ScorebordBeoordeling/>
                </Route>
            </Switch>
        );
    }
}

export default App
