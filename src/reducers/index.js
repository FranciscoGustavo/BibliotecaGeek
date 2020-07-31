const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                user: action.payload,
            }
        case 'SAVE_POSTS':
            return {
                ...state,
                posts: action.payload,
            }
            case 'CURRENT_POST':
                return {
                    ...state,
                    currentPost: action.payload,
                }
        default:
            return state;
    }
}

export default reducer;