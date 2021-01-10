const isAuthenticated = false;

const reducer = (state = isAuthenticated, action) => {
    if (action.type === 'SET'){
        return true;
    }
    
    return state;
}

export default reducer;