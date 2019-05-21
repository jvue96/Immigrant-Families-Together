const legalReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_LEGAL':
            return action.payload;
        default:
            return state;
    }
}

export default legalReducer;