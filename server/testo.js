const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const allUsers = [
    {
        id: '1',
        username: 'Gunplank',
        age: '22',
        post: 'JBP'
    },
    {
        id: '2',
        username: 'Brand',
        age: '24',
        post: 'ANS'
    },
    {
        id: '3',
        username: 'Warwick',
        age: '21',
        post: 'KLP'
    }
]

const schema = buildSchema(`
  type User {
    id: ID
    username: String
    age: Int
    posts: [Post]
}

type Post {
    id: ID
    title: String
    content: String
}

input UserInput {
    id: ID
    username: String!
    age: Int!
    posts: [PostInput]
}

input PostInput {
    id: ID
    title: String!
    content: String!
}

type Query {
    getAllUsers: [User]
    getUser(id: ID): User
}
`);

const root = {
    getAllUsers: () => {
        return allUsers;
    },

    getUser: params => {
        return allUsers.find(
            ({id}) => params.id === id
        )
    },

    addUser: params => {
        allUsers.push({
            id: allUsers.length + 1,
            username: params.username,
            age: params.age,
            post: params.post
        })
        return true;
    }
};

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));