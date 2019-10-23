import {combineReducers} from 'redux';
import {createGameReducer} from "../createGame-actionReducer";
import {createTeamReducer} from "../createTeam-actionReducer";

//===========================================================================
//  THE REDUX APPLICATION STORE
//---------------------------------------------------------------------------
//  Combining the action-reducers and their state into a single reducer managing
//  a single state

const allReducers = combineReducers({
    createGame: createGameReducer,
    createTeam: createTeamReducer,
});

export default allReducers
