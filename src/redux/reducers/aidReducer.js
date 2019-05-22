const aidReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_AID':
            return action.payload;
        default:
            return state;
    }
}

export default aidReducer;