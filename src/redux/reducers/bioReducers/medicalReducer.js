const medicalReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MEDICAL':
            return action.payload;
        default:
            return state;
    }
}

export default medicalReducer;