const volunteerBioReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_VOLUNTEER_BIO':
            return action.payload;
        default:
            return state;
    }
}

export default volunteerBioReducer;