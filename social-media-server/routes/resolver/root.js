const user = require('./user')
const post = require('./post')

const rootResolver = {
    ...user,
    ...post
}

module.exports = rootResolver