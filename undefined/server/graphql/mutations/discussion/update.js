var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var DiscussionType = require('../../types/discussion');
var DiscussionModel = require('../../../models/discussion');

exports.update = {
  type: DiscussionType.discussionType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    question: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    return DiscussionModel.findByIdAndUpdate(
      params.id,
      { $set: { solution: params.question } },
      { new: true }
    )
      .catch(err => new Error(err));
  }
}

