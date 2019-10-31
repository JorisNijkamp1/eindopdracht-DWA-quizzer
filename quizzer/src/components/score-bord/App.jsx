import React from "react";
import * as ReactRedux from "react-redux";
import {createScorebordStatusAction} from "../../action-reducers/createScorebord-actionReducer";
import {ScorebordJoinTeam} from "./ScorebordJoinTeam";
import {ScorebordOverzichtScore} from "./ScorebordOverzichtScore";

class ScoreboardAppUI extends React.Component {

    render() {
        if (this.props.formValidationScoreboard === 'succes') {
            return <ScorebordOverzichtScore/>
        }

        //If no match, return ScorebordJoinTeam Component
        return <ScorebordJoinTeam/>
    }
}

function mapStateToProps(state) {
    return {
        formValidationScoreboard: state.createScoreboard.formValidationScoreboard,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        doChangeStatus: (formValidationScoreboard) => dispatch(createScorebordStatusAction(formValidationScoreboard)),
    }
}

export const ScoreboardApp = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(ScoreboardAppUI);
