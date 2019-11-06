import React from "react";
import * as ReactRedux from "react-redux";
import TeamCategory from "./TeamCategory";
import TeamQuestions from "./TeamQuestions";
import {TeamAnswerQuestion} from "./TeamAnswerQuestion";
import {TeamAanmaken} from "./TeamAanmaken";
import TeamQuestionClosed from "./TeamQuestionClosed";
import TeamRoundEnded from "./TeamRoundEnded";
import TeamGameEnded from "./TeamGameEnded";
import TeamGameQuizmasterLeft from "./TeamGameQuizmasterLeft";

class TeamsAppUI extends React.Component {

    render() {
        if (this.props.currentGameStatus === 'choose_categories' && this.props.teamNameStatus === 'success') {
            return <TeamCategory/>
        }
        if (this.props.currentGameStatus === 'choose_question' && this.props.teamNameStatus === 'success') {
            return <TeamQuestions/>
        }
        if (this.props.currentGameStatus === 'asking_question' && this.props.teamNameStatus === 'success') {
            return <TeamAnswerQuestion/>
        }
        if (this.props.currentGameStatus === 'question_closed' && this.props.teamNameStatus === 'success') {
            return <TeamQuestionClosed/>
        }
        if (this.props.currentGameStatus === 'round_ended') {
            return <TeamRoundEnded/>
        }
        if (this.props.currentGameStatus === 'end_game') {
            return <TeamGameEnded/>
        }
        if (this.props.currentGameStatus === 'quizmaster_left') {
            return <TeamGameQuizmasterLeft/>
        }

        //If no match, return CreateGame Component
        return <TeamAanmaken/>
    }
}

function mapStateToProps(state) {
    return {
        currentGameStatus: state.createGame.currentGameStatus,
        teamNameStatus: state.createTeam.teamNameStatus,
    }
}

export const TeamsApp = ReactRedux.connect(mapStateToProps)(TeamsAppUI);
