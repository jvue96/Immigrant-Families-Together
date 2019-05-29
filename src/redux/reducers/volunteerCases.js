const volunteerCases = (state = [], action) => {
    switch (action.type) {
        case 'SET_VOLUNTEER_CASES':
            return action.payload;
        default:
            return state;
    }
}

export default volunteerCases;