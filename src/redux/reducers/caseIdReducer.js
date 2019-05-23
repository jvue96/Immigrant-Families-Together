const caseIdReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CURRENT_ID':
            return action.payload;
        default:
            return state;
    }
}

export default caseIdReducer;