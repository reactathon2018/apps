
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var UserType = require('../../types/user');
var UserModel = require('../../../models/user');

exports.add = {
  type: UserType.userType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    role: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    const user = UserModel.findOne({ email: params.email });
    return user.then(function (data) {
      if (data) {
        throw new Error('User with email id already exists.')
      } else {
        const uModel = new UserModel(params);
        const newUser = uModel.save();
        if (!newUser) {
          throw new Error('User cannot be created. Please try again.');
        }
        data = newUser;
      }
      return data;
    })

  }
}