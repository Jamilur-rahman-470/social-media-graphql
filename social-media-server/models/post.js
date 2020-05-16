const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    text: { type: String, required: true },
    date: { type: String, default: Date.now },
    likes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
            },
        }
    ],
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            },
            text: { type: String, required: true },

            date: { type: String, default: Date.now },
        }
    ]
})


module.exports = Post = mongoose.model('post', PostSchema);