const caseReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CASE':
            return action.payload;
         default:
            return state;
    }
}

export default caseReducer;