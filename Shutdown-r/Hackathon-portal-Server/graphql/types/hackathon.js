

var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;

// User Type
exports.hackathonType = new GraphQLObjectType({
  name: 'hackathon',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      name: {
        type: GraphQLString
      },
      Summary: {
        type: GraphQLString
      },
      Desc: {
        type: GraphQLString
      },
      Org: {
        type: GraphQLString
      },
      TeamSize: {
        type: new GraphQLNonNull(GraphQLID)
      },
      Status: {
        type: GraphQLString
      },
      Id: {
        type: new GraphQLNonNull(GraphQLID)
      }
    }
  }
});

