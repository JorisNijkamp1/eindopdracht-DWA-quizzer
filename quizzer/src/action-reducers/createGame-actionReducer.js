//=====================================================================
//    State management for the createGame
//---------------------------------------------------------------------

// Action Creators:
export function createGameFormValidationAction(formValidation) {
    return {
        type: "createGameFormValidationAction",
        formValidation: formValidation
    };
}

export function createGameRoomAction(gameRoom) {
    return {
        type: "createGameRoomAction",
        gameRoom: gameRoom
    };
}

export function getGameRoomTeamsAction(gameRoomTeams) {
    return {
        type: "getGameRoomTeamsAction",
        gameRoomTeams: gameRoomTeams
    };
}

export function createCurrentGameStatusAction(currentGameStatus) {
    return {
        type: 'createCurrentGameStatusAction',
        currentGameStatus: currentGameStatus
    }
}

export function createGameQuestionCategoriesAction(questionCategories) {
    return {
        type: "createGameQuestionCategoriesAction",
        questionCategories: questionCategories
    };
}

// Reducer:
const initialCreateGameState = {
    formValidation: false,
    gameRoom: null,
    gameRoomTeams: [],
    currentGameStatus: null,
    questionCategories: [],
};

export function createGameReducer(state = initialCreateGameState, action) {
    let changes = null;
    switch (action.type) {
        case 'createGameFormValidationAction':
            changes = {
                formValidation: action.formValidation,
            };
            return {...state, ...changes};

        case 'createGameRoomAction':
            changes = {
                gameRoom: action.gameRoom,
            };
            return {...state, ...changes};

        case 'getGameRoomTeamsAction':
            changes = {
                gameRoomTeams: action.gameRoomTeams,
            };
            return {...state, ...changes};

        case 'createCurrentGameStatusAction':
            changes = {
                currentGameStatus: action.currentGameStatus,
            };
            return {...state, ...changes};

        case 'createGameQuestionCategoriesAction':
            changes = {
                questionCategories: action.questionCategories,
            };
            return {...state, ...changes};

        default:
            return state;
    }
}
