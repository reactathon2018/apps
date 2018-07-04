var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLList = require('graphql').GraphQLList;
var TeamType = require('../../types/team').teamType;
var TeamModel = require('../../../models/team');

exports.update = {
  type: TeamType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: GraphQLString,
    },
    users: {
        type: new GraphQLList(GraphQLString),
      }
  },
  resolve(root, params) {
    return TeamModel.findByIdAndUpdate(
      params.id,
      { $set: { name: params.name, users: params.users } },
      { new: true }
    )
      .catch(err => new Error(err));
  }
}

