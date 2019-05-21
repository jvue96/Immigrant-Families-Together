const housingReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HOUSING':
            return action.payload;
        default:
            return state;
    }
}

export default housingReducer;