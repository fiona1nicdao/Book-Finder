const {gql} = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }
    type Auth {
        token: ID!
        user: User
    }

    type Book {
        authors: [String]
        description: String
        bookId: ID!
        image: String
        link: String
        title: String
    }
    input InputBook {
        authors:[String]
        description:String
        title:String
        image:String
        link:String
        bookId:String
    }

    type Query {
        me: User
    }
    type Mutation {
        addUser(username: String!, email: String!, password:String! ):Auth
        login(email: String!, password: String!): Auth
        saveBook(newBook: InputBook!):User
        removeBook(bookId: ID!):User
    }
`
module.exports = typeDefs;

