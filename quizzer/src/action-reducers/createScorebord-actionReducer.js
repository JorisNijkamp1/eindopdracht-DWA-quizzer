//=====================================================================
//    State management for the scorebord
//---------------------------------------------------------------------

// Action Creators:
export function createScorebordStatusAction(formValidation) {
    return {
        type: "createScorebordStatusAction",
        formValidation: formValidation
    };
}


// Reducer:
const initialCreateScorebordState = {
    formValidation: false,
};

export function createScorebordReducer(state = initialCreateScorebordState, action) {
    let changes = null;
    switch (action.type) {
        case 'createScorebordStatusAction':
            changes = {
                formValidation: action.formValidation,
            };
            return {...state, ...changes};

        default:
            return state;
    }
}
