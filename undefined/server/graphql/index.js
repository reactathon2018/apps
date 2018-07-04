var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var queries = require('./queries/queries').query;
var mutations = require('./mutations/index');


exports.rootSchema = new GraphQLSchema({
  query: queries,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutations
  })
})


