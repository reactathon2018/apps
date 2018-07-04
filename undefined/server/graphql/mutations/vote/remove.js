var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var VoteType = require('../../types/vote');
var VoteModel = require('../../../models/vote');

exports.remove = {
  type: VoteType.voteType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removedVote = VoteModel.findByIdAndRemove(params.id).exec();
    if (!removedVote) {
      throw new Error('Error')
    }
    return removedVote;
  }
}
