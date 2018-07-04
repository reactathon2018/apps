var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLList = require('graphql').GraphQLList;
var HackathonType = require('../../types/hackathon').hackathonType;
var HackathonModel = require('../../../models/hackathon');

exports.update = {
  type: HackathonType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: GraphQLString
    },
    startDate: {
        type: GraphQLString
    },
    endDate: {
        type: GraphQLString
    },
    problem: {
        type: GraphQLString
    },
    teams: {
        type: new GraphQLList(GraphQLString)
    }
  },
  resolve(root, params) {
      let updateObj = {};
      if(params.name) updateObj.name = params.name;
      if(params.startDate) updateObj.startDate = params.startDate;
      if(params.endDate) updateObj.endDate = params.endDate;
      if(params.problem) updateObj.problem =params.problem;
      if(params.teams) updateObj.teams = params.teams;
    return HackathonModel.findByIdAndUpdate(
      params.id,
      { $set: updateObj },
      { new: true }
    )
      .catch(err => new Error(err));
  }
}

