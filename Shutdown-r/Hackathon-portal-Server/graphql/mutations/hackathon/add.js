
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var HackathonType = require('../../types/hackathon');
var HackathonModel = require('../../../models/hackathon');

exports.add = {
  type: HackathonType.hackathonType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    const uModel = new HackathonModel(params);
    const newhackathon = uModel.save();
    if (!newhackathon) {
      throw new Error('Error');
    }
    return newhackathon
  }
}