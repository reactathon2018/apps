
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLList = require('graphql').GraphQLList;
var HackathonType = require('../../types/hackathon').hackathonType;
var HackathonModel = require('../../../models/hackathon');

exports.add = {
  type: HackathonType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    startDate: {
      type: new GraphQLNonNull(GraphQLString)
    },
    endDate: {
      type: new GraphQLNonNull(GraphQLString)
    },
    problem: {
      type: new GraphQLNonNull(GraphQLString)
    },
    teams: {
        type: new GraphQLList(GraphQLString)
      }
  },
  resolve(root, params) {
    const hModel = new HackathonModel(params);
    const newHack = hModel.save();
    if (!newHack) {
      throw new Error('Error');
    }
    return newHack
  }
}