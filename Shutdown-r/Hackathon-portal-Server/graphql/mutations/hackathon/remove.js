var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var HackathonType = require('../../types/hackathon');
var HackathonModel = require('../../../models/hackathon');

exports.remove = {
  type: HackathonType.hackathonType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removedhackathon = HackathonModel.findByIdAndRemove(params.id).exec();
    if (!removedhackathon) {
      throw new Error('Error')
    }
    return removedhackathon;
  }
}
