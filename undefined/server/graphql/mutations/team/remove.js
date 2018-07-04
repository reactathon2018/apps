var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var TeamType = require('../../types/team').teamType;
var TeamModel = require('../../../models/team');

exports.remove = {
  type: TeamType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removedTeam = TeamModel.findByIdAndRemove(params.id).exec();
    if (!removedTeam) {
      throw new Error('Error')
    }
    return removedTeam;
  }
}
