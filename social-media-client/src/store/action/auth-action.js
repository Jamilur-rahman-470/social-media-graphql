import Axios from 'axios'

export const getUserById = (id) => dispatch =>{
    Axios.post(
        'http://localhost:3500/api',
        {
            query: `
                query user($id: ID!){
                    user(id: $id){
                        username
                        email
                        name
                        address{
                            city
                            country
                        }
                        bio
                        date
                        social{
                            youtube
                            linkedin
                            facebook
                            twitter
                        }
                    }
                }
            `,
            variables: {
                id
            }
        }
    ).then(res => {
        const user = res.data.data.user

        console.log(user)
        return dispatch({
            type: 'GET_AUTH_USER',
            data: {
                username: user.username,
                name: user.name,
                bio: user.bio,
                date: user.date,
                email: user.email,
                address: user.address,
                social: user.social,
            }
        })
    })
}
export const login = (email, password) => dispatch => {

    Axios.post(
        'http://localhost:3500/api?',
        {
            query: `
                query login($email: String!, $password: String!){
                    login(email: $email, password: $password){
                        token
                        userId
                    }
                }
            `,
            variables: {
                email, password
            }
        }
    )
        .then((res) => {
            console.log(res.data.data.login)
            dispatch({
                type: 'GET_AUTH',
                data: {
                    token: res.data.data.login.token,
                    uid: res.data.data.login.userId,
                    isAuth: true,
                }
            })
        }
    )
        .catch(err => console.log(err))
}


export const logout = () => dispatch =>{
    return dispatch({
        type: 'LOGOUT'
    })
}