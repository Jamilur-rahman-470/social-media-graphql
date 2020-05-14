// External packages
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const ExpressGraph = require('express-graphql')


// Local packages
const schema = require('./routes/schema/schema')
const resolver = require('./routes/resolver/root')
const isAuth = require('./middleware/is-auth')

// Main Express App
const app = express()


// Middleware implementation
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))
app.use(isAuth)

// Database Connection
mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
).then(()=> console.log('DB CONNECTED'))
.catch(err => {throw err})


// Init GrapQL

app.use(
    '/api',
    ExpressGraph({
        schema,
        rootValue: resolver,
        graphiql: true,
        pretty: true
    })
)
// Init express app
app.listen(3500, console.log('APP STARTED'))
