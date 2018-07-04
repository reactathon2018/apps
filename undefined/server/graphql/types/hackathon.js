var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLList = require('graphql').GraphQLList;

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
      startDate: {
        type: GraphQLString
      },
      endDate: {
        type: GraphQLString
      },
      problem: {
        type: GraphQLString
      },
      teams: {
        type: new GraphQLList(GraphQLString)
      }
    }
  }
});

