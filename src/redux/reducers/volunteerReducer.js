const volunteerReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_VOLUNTEER':
            return action.payload;
        default:
            return state;
    }
}

export default volunteerReducer;