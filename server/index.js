const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const schema = require('../server/schema')
const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
    graphql: true,
    schema
}))

app.listen(5000, () => {console.log('Server started on port 6000')})