import React from "react";
import * as ReactRedux from "react-redux";
import {createScorebordStatusAction} from "../../action-reducers/createScorebord-actionReducer";
import {ScorebordJoinTeam} from "./ScorebordJoinTeam";
import {ScorebordOverzichtScore} from "./ScorebordOverzichtScore";
import {ScorebordAntwoorden} from "./ScorebordAntwoorden";
import {ScorebordBeoordeling} from "./ScorebordBeoordeling";
import {ScorebordEndgame} from "./ScorebordEndgame";

class ScoreboardAppUI extends React.Component {

    render() {
        const showScoreboard = this.props.currentGameStatus === 'show_scoreboard';
        const chooseCategories = this.props.currentGameStatus === 'choose_categories';
        const chooseQuestion = this.props.currentGameStatus === 'choose_question';
        const askingQuestion = this.props.currentGameStatus === 'asking_question';
        const questionClosed = this.props.currentGameStatus === 'question_closed';
        const gameClosed = this.props.currentGameStatus === 'end_game';

        if (showScoreboard || chooseCategories || chooseQuestion) {
            return <ScorebordOverzichtScore/>
        }
        if (askingQuestion) {
            return <ScorebordAntwoorden/>
        }
        if (questionClosed) {
            return <ScorebordBeoordeling/>
        }
        if (gameClosed) {
            return <ScorebordEndgame/>
        }
        //If no match, return ScorebordJoinTeam Component
        return <ScorebordJoinTeam/>
    }
}

function mapStateToProps(state) {
    return {
        formValidationScoreboard: state.createScoreboard.formValidationScoreboard,
        currentGameStatus: state.createGame.currentGameStatus
    }
}

function mapDispatchToProps(dispatch) {
    return {
        doChangeStatus: (formValidationScoreboard) => dispatch(createScorebordStatusAction(formValidationScoreboard)),
    }
}

export const ScoreboardApp = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(ScoreboardAppUI);
