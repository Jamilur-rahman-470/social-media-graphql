import Axios from 'axios'

export const updateUser = (id, user) => dispatch => {
    Axios.post(
        'http://localhost:3500/api',
        {
            query: `
              mutation updateUser($id: ID!, $name: String!, $bio: String!, $city: String!, $country: String!, $youtube: String!, $facebook: String!, $linkedin: String!, $twitter: String!){
                  updateUser(id: $id, name: $name, bio: $bio, city: $city, country: $country, youtube: $youtube, facebook: $facebook, linkedin: $linkedin, twitter: $twitter){
                      username  
                      email
                      name
                      bio
                      address{
                          city
                          country
                      }
                      social{
                          youtube
                          facebook
                          linkedin
                          twitter
                      }
                  }
              } 
            `,
            variables: {
                id: id, 
                name: user.name,
                bio: user.bio,
                city: user.address.city,
                country: user.address.country,
                youtube: user.social.youtube,
                linkedin: user.social.linkedin,
                facebook: user.social.facebook,
                twitter: user.social.twitter
            }
        }
    ).then(res => {
        const user = res.data.data.updateUser
        dispatch({
            type: 'GET_AUTH_USER',
            data: {
                username:  user.username,
                name: user.name,
                bio: user.bio,
                email: user.email,
                address: user.address,
                social: user.social
            }
        })
    })
}