var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLBoolean = require('graphql').GraphQLBoolean;
var VoteType = require('../../types/vote');
var VoteModel = require('../../../models/vote');

exports.update = {
  type: VoteType.voteType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    isUpvote: {
      type: new GraphQLNonNull(GraphQLBoolean),
    }
  },
  resolve(root, params) {
    return VoteModel.findByIdAndUpdate(
      params.id,
      { $set: { isUpvote: params.isUpvote } },
      { new: true }
    )
      .catch(err => new Error(err));
  }
}

