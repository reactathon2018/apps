var { buildSchema } = require('graphql');

var schema = buildSchema(`
type UserCredentials{
  userName: String,
  isAdmin: Boolean!,
  loginStatus: Boolean!
}

type Query {
  hello: String
  login(user: String, pwd: String): UserCredentials
}
`);

module.exports = schema;