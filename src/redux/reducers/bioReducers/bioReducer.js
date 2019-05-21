const bioReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_BIO':
            return action.payload;
        default:
            return state;
    }
}

export default bioReducer;