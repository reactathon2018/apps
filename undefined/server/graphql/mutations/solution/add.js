
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var SolutionType = require('../../types/solution');
var SolutionModel = require('../../../models/solution');

exports.add = {
  type: SolutionType.solutionType,
  args: {
    solution: {
      type: new GraphQLNonNull(GraphQLString),
    },
    team_id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    hackathon_id: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    const sModel = new SolutionModel(params);
    const newSolution = sModel.save();
    if (!newSolution) {
      throw new Error('Error');
    }
    return newSolution
  }
}