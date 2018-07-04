var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var HackathonType = require('../../types/hackathon').hackathonType;
var HackathonModel = require('../../../models/hackathon');

exports.remove = {
  type: HackathonType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removedHack = HackathonModel.findByIdAndRemove(params.id).exec();
    if (!removedHack) {
      throw new Error('Error')
    }
    return removedHack;
  }
}
