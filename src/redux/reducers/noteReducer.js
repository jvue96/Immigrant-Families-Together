const noteReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_NOTE':
            return action.payload;
        default:
            return state;
    }
}

export default noteReducer;