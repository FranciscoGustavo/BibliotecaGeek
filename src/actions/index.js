export const loginUser = (payload) => ({
    type: 'LOGIN_USER',
    payload,
});

export const savePosts = (payload) => ({
    type: 'SAVE_POSTS',
    payload,
});

export const currentPost = (payload) => ({
    type: 'CURRENT_POST',
    payload,
});