const Post = require('../../models/post')

module.exports = {
    createPost: async (args, req) =>{
        
        try{
            if (!req.isAuth) {
                throw new Error('Unauthorized')
            }
            const { userId, text } = args
            const post = new Post({
                user: userId,
                text: text,
                date: Date.now()
            })
            const result = await post.save()
            
            return result
        }catch(err){
            throw err
        }
    },
    posts: async (args) =>{
        try {
            const posts = await Post.find().populate('user')
            return posts
        }catch(err){
            throw err
        }
    }
}

