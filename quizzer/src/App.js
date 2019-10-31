import React from 'react';
import './App.css';
import GameMenu from "./components/GameMenu";
import {QuizMasterApp} from "./components/quiz-master/App"
import EindRonde from "./components/quiz-master/EindRonde";
import {Switch, Route} from "react-router-dom";
import ReactNotification from "react-notifications-component";
import {TeamAnswerQuestion} from "./components/team-app/TeamAnswerQuestion";
import {TeamsApp} from "./components/team-app/App";
import {ScoreboardApp} from "./components/score-bord/App";
import {VragenBeheren} from "./components/quiz-master/VragenBeheren";
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
                    <Route path="/quiz-master">
                        <QuizMasterApp/>
                    </Route>
                    <Route path="/new-team">
                        <TeamsApp/>
                    </Route>
                    <Route path="/eind-ronde">
                        <EindRonde/>
                    </Route>
                    <Route path={"/answer-question"}>
                        <TeamAnswerQuestion/>
                    </Route>

                    <Route path={"/vragen-beheren"}>
                        <VragenBeheren/>
                    </Route>

                    /* SCORE BORD PATHS DIT MOET DENK IK NOG ANDERS SAMEN EMT AARON NAAR KIJKEN */
                    <Route path="/scoreboard">
                        <ScoreboardApp/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default App
