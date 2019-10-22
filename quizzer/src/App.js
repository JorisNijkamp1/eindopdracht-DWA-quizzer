import React from 'react';

import './App.css';
import GameMenu from "./components/GameMenu";
import TeamsBeheren from "./components/quiz-master/TeamsBeheren";
import Categorieen from "./components/quiz-master/Categorieen";
import {Switch, Route} from "react-router-dom";
import {CreateGame} from "./components/quiz-master/CreateGame";

//============================================================================
//  The React component that renders the UI for the entire App.
//----------------------------------------------------------------------------

class App extends React.Component {

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

export default App
