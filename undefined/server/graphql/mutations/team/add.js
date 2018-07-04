
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLList = require('graphql').GraphQLList;
var TeamType = require('../../types/team').teamType;
var TeamModel = require('../../../models/team');

exports.add = {
  type: TeamType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    users: {
        type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
      }
  },
  resolve(root, params) {
    const tModel = new TeamModel(params);
    const newTeam = tModel.save();
    if (!newTeam) {
      throw new Error('Error');
    }
    return newTeam
  }
}