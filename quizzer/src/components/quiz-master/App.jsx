import React from "react";
import * as ReactRedux from "react-redux";
import {Categorieen} from "./Categorieen";
import {Vragen} from "./Vragen";
import {VragenBeheren} from "./VragenBeheren";
import {CreateGame} from "./CreateGame";
import {TeamsBeheren} from "./TeamsBeheren";
import {EindRonde} from "./EindRonde";

class QuizMasterAppUI extends React.Component {

    render() {
        if (this.props.currentGameStatus === 'in_lobby') {
            return <TeamsBeheren/>
        }
        if (this.props.currentGameStatus === 'choose_categories') {
            return <Categorieen/>
        }
        if (this.props.currentGameStatus === 'choose_question') {
            return <Vragen/>
        }
        if (this.props.currentGameStatus === 'asking_question' || this.props.currentGameStatus === 'question_closed') {
            return <VragenBeheren/>
        }
        if (this.props.currentGameStatus === 'round_ended') {
            return <EindRonde/>
        }
        if (this.props.currentGameStatus === 'end_game') {
            return <CreateGame/>
        }

        //If no match, return CreateGame Component
        return <CreateGame/>
    }
}

function mapStateToProps(state) {
    return {
        currentGameStatus: state.createGame.currentGameStatus
    }
}

export const QuizMasterApp = ReactRedux.connect(mapStateToProps)(QuizMasterAppUI);
