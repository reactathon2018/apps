var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var SolutionType = require('../../types/solution');
var SolutionModel = require('../../../models/solution');

exports.remove = {
  type: SolutionType.solutionType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removedSolution = SolutionModel.findByIdAndRemove(params.id).exec();
    if (!removedSolution) {
      throw new Error('Error')
    }
    return removedSolution;
  }
}
