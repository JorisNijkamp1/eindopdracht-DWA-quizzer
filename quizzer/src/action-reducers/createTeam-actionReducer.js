//=====================================================================
//    State management for the createTeam
//---------------------------------------------------------------------

// Action creators:
export function createGameRoomStatusAction(status) {
    return {
        type: "createGameRoomStatusAction",
        status: status
    };
}

export function createTeamNameStatusAction(status) {
    return {
        type: "createTeamNameStatusAction",
        status: status
    };
}


// Reducer:
const initialCreateTeamState = {
    gameRoomAccepted: null,
    teamNameAccepted: false,
};

export function createTeamReducer(state = initialCreateTeamState, action) {
    let changes = null;
    switch (action.type) {
        case 'createGameRoomStatusAction':
            changes = {
                gameRoomAccepted: action.status,
            };
            return {...state, ...changes};

        case 'createTeamNameStatusAction':
            changes = {
                teamNameAccepted: action.status,
            };
            return {...state, ...changes};

        default:
            return state;
    }
}
