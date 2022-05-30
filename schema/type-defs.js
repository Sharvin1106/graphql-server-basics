const { gql } = require("apollo-server");

//Every graphql schema should start with one specific type which
//is called schema
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User!]
  }

  type Query {
    users: [User!]!
    user(id: ID!): User! 
  }

  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
    MALAYSIA
  }
`;

module.exports = { typeDefs };
