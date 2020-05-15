const { buildSchema } = require('graphql');

module.exports = buildSchema(
    `
        type User {
            _id: ID!
            username: String!
            email: String!
            password: String
            name: String
            address: Address
            bio: String
            date: String!
            social: Social 
            post: [Post!]
        }


        type Address {
            city: String
            country: String
        }

        type Social {
            youtube: String
            twitter: String
            facebook: String
            linkedin: String
        }

        type Post {
            _id: ID!
            user: User!
            text: String!
            date: String!
            likes: [Like!]
            comments: [Comments!]
        }

        type Comments {
            user: String!
            text: String!
            date: String!
        }

        type Like { 
            user: String!
        }
        
        
        type AuthData {
            userId: ID!
            token: String!
            tokenExpiration: Int!
        }

        
        type RootQuery {
            users: [User!]!
            posts: [Post!]!
            post(id: ID!): Post!
            user(id: ID!): User!
            login(email: String!, password: String!): AuthData!
        }
        

        type RootMutation {
            createUser(username: String!, email: String!, password: String!): User
            createPost(userId: ID!, text: String!): Post
            likePost(userId: ID!, postId: ID!): Post!
            addComment(userId: ID!, postId: ID!): Post!
            deleteUser(id: ID!): User!
            deletePost(id: ID!): Post!
            updatePost(id: ID!): Post!
            updateUser(id: ID!, name: String!, bio: String!, city: String!, country: String!, youtube: String!, facebook: String!, linkedin: String!, twitter: String!): User!
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `
) 