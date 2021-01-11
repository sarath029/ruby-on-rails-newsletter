const initialState = {
    isAuthenticated: false,
    currentUser:null
};

const reducer = (state = initialState, action) => {
    if (action.type === 'SETAUTH') {
        return {
            ...state,
            isAuthenticated:action.val
        };
    }

    if (action.type == 'SAVEUSER'){
        return {
            ...state,
            currentUser: action.user
        };
    }

    return state;
}

export default reducer;