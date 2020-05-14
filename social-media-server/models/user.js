const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true,},
    name: {type: String},
    address: {
        city: { type: String },
        country: { type: String },
    },
    bio: { type: String },
    date: {type: Date, default: Date.now},
    social: {
        youtube: { type: String },
        twitter: { type: String },
        facebook: { type: String },
        linkedin: { type: String },
    },
}) 


module.exports = User = mongoose.model('user', UserSchema)