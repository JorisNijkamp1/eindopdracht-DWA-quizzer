//=====================================================================
//    State management for the createGame
//---------------------------------------------------------------------

// Action Creators:
export function createGameStatusAction(status) {
    return {
        type: "createGameStatusAction",
        status: status
    };
}

// Reducer:
const initialCreateGameState = {
    status: false,
};

export function createGameReducer(state = initialCreateGameState, action) {
    let changes = null;
    switch (action.type) {
        case 'createGameStatusAction':
            changes = {
                status: action.status,
            };
            return {...state, ...changes};
        default:
            return state;
    }
}
