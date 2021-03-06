const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case '':
            return {
                ...state,
                currentUser: action.payload
            };

        default:
            return state;
    }
};

export default userReducer;