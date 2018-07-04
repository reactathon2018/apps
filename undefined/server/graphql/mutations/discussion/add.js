
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var DiscussionType = require('../../types/discussion');
var DiscussionModel = require('../../../models/discussion');

exports.add = {
  type: DiscussionType.discussionType,
  args: {
    question: {
      type: new GraphQLNonNull(GraphQLString),
    },
    user_id: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    const dModel = new DiscussionModel(params);
    const newDiscussion = dModel.save();
    if (!newDiscussion) {
      throw new Error('Error');
    }
    return newDiscussion
  }
}