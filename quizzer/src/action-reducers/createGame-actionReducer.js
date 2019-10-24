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

export function createGameRoomAction(gameRoom) {
    return {
        type: "createGameRoomAction",
        gameRoom: gameRoom
    };
}

// Reducer:
const initialCreateGameState = {
    status: false,
    gameRoom: null,
};

export function createGameReducer(state = initialCreateGameState, action) {
    let changes = null;
    switch (action.type) {
        case 'createGameStatusAction':
            changes = {
                status: action.status,
            };
            return {...state, ...changes};
        case 'createGameRoomAction':
            changes = {
                gameRoom: action.gameRoom,
            };
            return {...state, ...changes};
        default:
            return state;
    }
}
