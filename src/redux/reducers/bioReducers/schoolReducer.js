const schoolReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SCHOOL':
            return action.payload;
        default:
            return state;
    }
}

export default schoolReducer;