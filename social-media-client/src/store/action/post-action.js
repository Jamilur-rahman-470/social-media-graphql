import Axios from 'axios';


export const createPost = (uid, text, token, name) => dispatch => {
    Axios.post(
        'http://localhost:3500/api',
        {
            query: `
                mutation createPost($userId: ID!, $text: String!){
                    createPost(userId: $userId, text: $text){
                        _id
                        text
                        likes{
                            user
                        }
                        comments{
                            user
                            text
                        }
                    }
                }
            `,
            variables: {
                userId: uid,
                text: text
            },
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    ).then(res => {
        const post = res.data.data.createPost
        dispatch({
            type: 'CREATE_POST',
            data: {
                ...post,
                user: {
                    name 
                }
            }
        })
    })
}

export const getPosts = () => dispatch => {
    Axios.post(
        'http://localhost:3500/api',
        {
            query: `
                query posts{
                    posts{
                        user{
                            name
                        }
                        text
                    _id
                    likes{
                        user
                    }
                    comments{
                        user 
                        text
                    }
                    }
                }
            `
        }
    ).then(res => {
        const posts = res.data.data.posts
        dispatch({
            type: 'GET_POSTS',
            data: posts
        })
    }).catch(err => console.log(err))
}