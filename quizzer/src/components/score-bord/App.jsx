import React from "react";
import * as ReactRedux from "react-redux";
import {createScorebordStatusAction} from "../../action-reducers/createScorebord-actionReducer";
import {ScorebordJoinTeam} from "./ScorebordJoinTeam";
import {ScorebordOverzichtScore} from "./ScorebordOverzichtScore";
import {ScorebordAntwoorden} from "./ScorebordAntwoorden";
import {ScorebordBeoordeling} from "./ScorebordBeoordeling";

class ScoreboardAppUI extends React.Component {

    render() {
        if (this.props.formValidationScoreboard === 'succes' && this.props.currentGameStatus !== 'asking_question') {
            console.log(this.props.currentGameStatus);
            return <ScorebordOverzichtScore/>
        }
        if (this.props.currentGameStatus === 'asking_question') {
            return <ScorebordAntwoorden/>
        }
        if (this.props.currentGameStatus === 'question_closed') {
            return <ScorebordBeoordeling/>
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
