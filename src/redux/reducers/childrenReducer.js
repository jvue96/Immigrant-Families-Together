const childrenReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CHILDREN':
            return action.payload;
        default:
            return state;
    }
}

export default childrenReducer;