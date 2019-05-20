const identifyReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_IDENTIFY':
            return action.payload;
        default:
            return state;
    }
}

export default identifyReducer;