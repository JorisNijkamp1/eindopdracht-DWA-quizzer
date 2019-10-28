import React from 'react';
import './App.css';
import GameMenu from "./components/GameMenu";
import {TeamsBeheren} from "./components/quiz-master/TeamsBeheren";
import Categorieen from "./components/quiz-master/Categorieen";
import {TeamAanmaken} from "./components/team-app/TeamAanmaken";
import ScorebordAntwoorden from "./components/score-bord/ScorebordAntwoorden";
import {ScorebordJoinTeam} from "./components/score-bord/ScorebordJoinTeam";
import ScorebordOverzichtScore from "./components/score-bord/ScorebordOverzichtScore";
import Vragen from "./components/quiz-master/Vragen";
import VragenBeheren from "./components/quiz-master/VragenBeheren";
import EindRonde from "./components/quiz-master/EindRonde";
import {Switch, Route} from "react-router-dom";
import {CreateGame} from "./components/quiz-master/CreateGame";
import ScorebordBeoordeling from "./components/score-bord/ScorebordBeoordeling";
import ReactNotification from "react-notifications-component";

//============================================================================
//  The React component that renders the UI for the entire App.
//----------------------------------------------------------------------------

class App extends React.Component {
    render() {
        return (
            <div>
                <ReactNotification/>
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
                    <Route path="/scorebord-join-team">
                        <ScorebordJoinTeam/>
                    </Route>
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
            </div>
        );
    }
}

export default App
