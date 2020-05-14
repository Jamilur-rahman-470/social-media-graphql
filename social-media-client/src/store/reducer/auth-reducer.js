const initState = {
    token: '',
    isAuth: false,
    uid: ''
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_AUTH':
            return {
                ...state,
                token: action.data.token,
                isAuth: action.data.isAuth,
                uid: action.data.uid,
            }
        case 'LOGOUT':
            return {
                ...state,
                token: '',
                isAuth: false,
                uid: ''
            }
        default:
            return state
    }
}