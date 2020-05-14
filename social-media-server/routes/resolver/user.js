const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../../models/user')




module.exports = {
    createUser: async (args) => {
        try {
            const usernameThere = await User.findOne({ username: args.username })
            const emailThere = await User.findOne({ email: args.email })
            if (usernameThere) {
                throw new Error('username already in use')
            }
            if (emailThere) {
                throw new Error('email already in use')
            }

            const hashpass = await bcrypt.hash(args.password, 12)

            const user = new User({
                username: args.username,
                email: args.email,
                password: hashpass
            })

            const result = await user.save()

            return {
                ...result._doc,
                password: null,
                _id: result.id
            }
        } catch (err) {
            throw err
        }
    },

    login: async ({ email, password }) => {
        const user = await User.findOne({ email: email })
        if (!user) {
            throw new Error('user does not exist')
        }

        const isEqual = await bcrypt.compare(password, user.password)

        if (!isEqual) {
            throw new Error('incorrect password')
        }

        const token = jwt.sign(
            {
                userId: user.id,
                email: user.email,
                username: user.username
            },
            process.env.SECRET,
            {
                expiresIn: '3h'
            }
        );

        return {
            userId: user.id,
            token: token,
            tokenExpiration: 3
        }
    },

    deleteUser: async (args, req) =>{
        if( !req.isAuth ){
            throw new Error('Unauthorized')
        }
        try{
            const user = await User.findOne({ _id: args.id })
            await User.deleteOne({_id: args.id})
            return user
        }catch(err){
            throw err
        }
    },
    user: async (args) => {
        try {
            const user = await User.findOne({_id: args.id})
            if(!user){
                throw new Error('User does not exist')
            }
            return user
        }catch(err){
            throw err
        }
    }
}