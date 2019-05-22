const bondReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_BOND':
            return action.payload;
        default:
            return state;
    }
}

export default bondReducer;