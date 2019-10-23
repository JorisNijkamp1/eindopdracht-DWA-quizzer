//=====================================================================
//    State management for the createTeam
//---------------------------------------------------------------------

// Action creators:
export function createTeamStatusAction(status) {
    return {
        type: "createTeamStatusAction",
        status: status
    };
}

// Reducer:
const initialCreateTeamState = {
    status: false,
};

export function createTeamReducer(state = initialCreateTeamState, action) {
    let changes = null;
    switch (action.type) {
        case 'createTeamStatusAction':
            changes = {
                status: action.status,
            };
            return {...state, ...changes};

        default:
            return state;
    }
}
