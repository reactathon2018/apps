var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;
var UserType = require('../../types/user');
var UserModel = require('../../../models/user');

exports.update = {
  type: UserType.userType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: GraphQLString,
    },
    badges: {
      type: GraphQLInt,
    },
    score: {
      type: GraphQLInt,
    }
  },
  resolve(root, params) {
    var obj = {}
    if (params.name) obj.name = params.name;
    if (params.badges) obj.badges = params.badges;
    if (params.score) obj.score = params.score;
    return UserModel.findByIdAndUpdate(
      params.id,
      { $set: obj },
      { new: true }
    )
      .catch(err => new Error(err));
  }
}

