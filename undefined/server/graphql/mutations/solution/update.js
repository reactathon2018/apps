var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var SolutionType = require('../../types/solution');
var SolutionModel = require('../../../models/solution');

exports.update = {
  type: SolutionType.solutionType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    solution: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    return SolutionModel.findByIdAndUpdate(
      params.id,
      { $set: { solution: params.solution } },
      { new: true }
    )
      .catch(err => new Error(err));
  }
}

