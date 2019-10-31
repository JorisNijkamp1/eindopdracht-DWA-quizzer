import React from "react";
import * as ReactRedux from "react-redux";
import TeamCategory from "./TeamCategory";
import TeamQuestions from "./TeamQuestions";
import {TeamAnswerQuestion} from "./TeamAnswerQuestion";
import {TeamAanmaken} from "./TeamAanmaken";
import TeamQuestionClosed from "./TeamQuestionClosed";

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

        //If no match, return CreateGame Component
        return <TeamAanmaken/>
    }
}

function mapStateToProps(state) {
    return {
        gameRoomAccepted: state.createTeam.gameRoomAccepted,
        teamNameStatus: state.createTeam.teamNameStatus,
        teamRoomName: state.createTeam.teamRoomName,
        gameRoomName: state.createTeam.gameRoomName,
        currentGameStatus: state.createGame.currentGameStatus
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //
    }
}

export const TeamsApp = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TeamsAppUI);
