const {ApolloServer} = require('apollo-server')
const {typeDefs} = require('./typeDefs')
const {resolvers} = require('./resolvers')
let server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(7000).then(({url})=>{
    console.log(`my server is ready at ${url}`)
})