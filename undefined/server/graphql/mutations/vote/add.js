
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var VoteType = require('../../types/vote');
var VoteModel = require('../../../models/vote');

exports.add = {
  type: VoteType.voteType,
  args: {
    isUpvote: {
      type: new GraphQLNonNull(GraphQLString),
    },
    user_id: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    const dModel = new VoteModel(params);
    const newDiscussion = dModel.save();
    if (!newDiscussion) {
      throw new Error('Error');
    }
    return newDiscussion
  }
}