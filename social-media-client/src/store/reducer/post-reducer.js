const initState = {
    post: {},
    posts: []
}

export const postReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_POST':
            return {
                ...state,
                post: action.data,
                posts: [
                    ...state.posts,
                    action.data
                ]
            }
        case 'GET_POSTS':
            return{
                ...state,
                posts: action.data
            }
        default:
            return state;
    }
}