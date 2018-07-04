var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var DiscussionType = require('../../types/discussion');
var DiscussionModel = require('../../../models/discussion');

exports.remove = {
  type: DiscussionType.discussionType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removedDiscussion = DiscussionModel.findByIdAndRemove(params.id).exec();
    if (!removedDiscussion) {
      throw new Error('Error')
    }
    return removedDiscussion;
  }
}
