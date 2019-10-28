//=====================================================================
//    State management for the scorebord
//---------------------------------------------------------------------

// Action Creators:
export function createScorebordStatusAction(status) {
    return {
        type: "createScorebordStatusAction",
        status: status
    };
}


// Reducer:
const initialCreateScorebordState = {
    status: false,
};

export function createScorebordReducer(state = initialCreateScorebordState, action) {
    let changes = null;
    switch (action.type) {
        case 'createScorebordStatusAction':
            changes = {
                status: action.status,
            };
            return {...state, ...changes};

        default:
            return state;
    }
}
