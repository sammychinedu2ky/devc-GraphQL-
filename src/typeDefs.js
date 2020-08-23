const {gql} = require('apollo-server')
 exports.typeDefs = gql`
 type Query{
     authors:[Author]
     books: [Book]
 }

 type Book{
     # this is the id of the book
     id: ID
     # this is the title of the book
     title: String
     author: String
 }
 
 type Author{
     id: ID
     name: String
     books: [Book]
 }
 
 type Mutation {
     createAuthor(name:String!):Author
     createBook(title:String!, author:String!): Book
     deleteAuthor(name:String!):String
     deleteBook(title:String!):String
 }
 
 
 
 
 `