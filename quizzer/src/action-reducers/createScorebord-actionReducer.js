//=====================================================================
//    State management for the scorebord
//---------------------------------------------------------------------

// Action Creators:
export function createScorebordStatusAction(formValidationScoreboard) {
    return {
        type: "createScorebordStatusAction",
        formValidationScoreboard: formValidationScoreboard
    };
}

export function createAddCurrentTeamsScoreboardAction(currentTeamsScoreboard) {
    return {
        type: "createAddCurrentTeamsScoreboardAction",
        currentTeamsScoreboard: currentTeamsScoreboard
    };
}

export function getGameRoomTeamsScoreboardAction(gameRoomScoreboard) {
    return {
        type: "getGameRoomTeamsScoreboardAction",
        gameRoomScoreboard: gameRoomScoreboard
    };
}

export function createIsAnsweredScoreboardAction(isAnswered) {
    return {
        type: "createIsAnsweredScoreboardAction",
        isAnswered: isAnswered
    };
}

// Reducer:
const initialCreateScorebordState = {
    formValidationScoreboard: false,
    currentTeamsScoreboard: [],
    gameRoomScoreboard: null,
    isAnswered: []
};

export function createScorebordReducer(state = initialCreateScorebordState, action) {
    let changes = null;
    switch (action.type) {
        case 'createScorebordStatusAction':
            changes = {
                formValidationScoreboard: action.formValidationScoreboard,
            };
            return {...state, ...changes};

        case 'createAddCurrentTeamsScoreboardAction':
            changes = {
                currentTeamsScoreboard: action.currentTeamsScoreboard,
            };
            return {...state, ...changes};

        case 'getGameRoomTeamsScoreboardAction':
            changes = {
                gameRoomScoreboard: action.gameRoomScoreboard,
            };
            return {...state, ...changes};

        case 'createIsAnsweredScoreboardAction':
            changes = {
                isAnswered: action.isAnswered,
            };
            return {...state, ...changes};

        default:
            return state;
    }
}
