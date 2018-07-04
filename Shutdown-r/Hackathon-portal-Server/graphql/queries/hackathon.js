
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var HackathonModel = require('../../models/hackathon');
var hackathonType = require('../types/hackathon').hackathonType;

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      users: {
        type: new GraphQLList(hackathonType),
        resolve: function () {
          const hackathons = HackathonModel.find().exec()
          if (!hackathons) {
            throw new Error('Error')
          }
          return hackathons
        }
      }
    }
  }
});

