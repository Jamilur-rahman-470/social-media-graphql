const initState = {
    profile: {
        username: '',
        email: '',
        name: '',
        address: {},
        bio: '',
        date: '',
        social: {}
    },
    users: [],
    view: {
        username: '',
        email: '',
        name: '',
        address: {},
        bio: '',
        date: '',
        social: {}
    }
}


export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_AUTH_USER':
            return{
                ...state,
                profile: {
                    ...state.profile,
                    username: action.data.username,
                    name: action.data.name,
                    bio: action.data.bio,
                    date: action.data.date,
                    email: action.data.email,
                    address: action.data.address,
                    social: action.data.social,
                }
            }
        default:
            return state
    }
}