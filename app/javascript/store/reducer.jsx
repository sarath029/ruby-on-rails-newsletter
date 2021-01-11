const isAuthenticated = false;

const reducer = (state = isAuthenticated, action) => {
    if (action.type === 'SET'){
        return true;
    }
    
    if (action.type === 'UNSET'){
        return false;
    }
    
    return state;
}

export default reducer;