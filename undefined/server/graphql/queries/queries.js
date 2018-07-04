
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLBoolean = require('graphql').GraphQLBoolean;
var GraphQLID = require('graphql').GraphQLID;

// Models
var UserModel = require('../../models/user');
var SolutionModel = require('../../models/solution');
var DiscussionModel = require('../../models/discussion');
var VoteModel = require('../../models/vote');
var HackathonModel = require('../../models/hackathon');
var TeamModel = require('../../models/team');

// graphql types
var userType = require('../types/user').userType;
var solutionType = require('../types/solution').solutionType;
var discussionType = require('../types/discussion').discussionType;
var voteType = require('../types/discussion').discussionType;
var hackathonType = require('../types/hackathon').hackathonType;
var teamType = require('../types/team').teamType;

// Query
exports.query = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      users: {
        type: new GraphQLList(userType),
        resolve: function () {
          const users = UserModel.find().exec()
          if (!users) {
            throw new Error('Error')
          }
          return users
        }
      },
      user: {
        type: userType,
        args: {
          name: {
            type: GraphQLString
          }
        },
        resolve: function (_, args) {
          const user = UserModel.findOne({ name: args.name }).exec()
          if (!user) {
            throw new Error('Error')
          }
          return user
        }
      },
      authenticate: {
        type: userType,
        args: {
          email: {
            type: GraphQLString
          },
          password: {
            type: GraphQLString
          }
        },
        resolve: function (_, args) {
          const user = UserModel.findOne({ email: args.email }).exec()
          return user.then(function (data) {
            var userData = null;
            if (!data) {
              throw new Error('Error: data not found')
            }
            if (data.password == args.password) {
              userData = data;
            }
            return userData;
          })
        }
      },
      solutions: {
        type: new GraphQLList(solutionType),
        resolve: function () {
          const solutions = SolutionModel.find().exec()
          if (!solutions) {
            throw new Error('Error')
          }
          return solutions
        }
      },
      solution: {
        type: new GraphQLList(solutionType),
        args: {
          hackathon_id: {
            type: GraphQLString
          },
          team_id: {
            type: GraphQLString
          }
        },
        resolve: function (_, args) {
          var obj = {};
          if (args.hackathon_id != '') obj.hackathon_id = args.hackathon_id;
          if (args.user_id != '') obj.user_id = args.user_id;
          const solution = SolutionModel.find(obj).exec();
          return solution.then(function (data) {
            if (!data) {
              throw new Error('Error: Solution Not found for given hackathon id/team id')
            }
            return data;
          });
        }
      },
      discussions: {
        type: new GraphQLList(discussionType),
        resolve: function () {
          const discussions = DiscussionModel.find().exec()
          if (!discussions) {
            throw new Error('Error')
          }
          return discussions
        }
      },
      votes: {
        type: new GraphQLList(voteType),
        resolve: function () {
          const votes = VoteModel.find().exec()
          if (!votes) {
            throw new Error('Error')
          }
          return votes
        }
      },
      hackathons: {
        type: new GraphQLList(hackathonType),
        resolve: function () {
          const hackathons = HackathonModel.find().exec();
          if (!hackathons) {
            throw new Error('Error');
          }
          return hackathons;
        }
      },
      hackathon: {
        type: new GraphQLList(hackathonType),
        args: {
          id: {
            type: GraphQLString
          },
          team_ids: {
            type: new GraphQLList(GraphQLID)
          }
        },
        resolve: function (_, args) {
          if (args.id != null) {
            const hackathon = HackathonModel.findOne({ _id: args.id }).exec()
            if (!hackathon) {
              throw new Error('Error')
            }
            return [hackathon];
          } else if (args.team_ids != null && args.team_ids.length > 0) {
            const hackathons = HackathonModel.find({ teams: { "$in": args.team_ids } });
            if (!hackathons) {
              throw new Error('Error')
            }
            return hackathons;
          }
        }
      },
      teams: {
        type: new GraphQLList(teamType),
        resolve: function () {
          const teams = TeamModel.find().exec();
          if (!teams) {
            throw new Error('Error');
          }
          return teams;
        }
      },
      team: {
        type: new GraphQLList(teamType),
        args: {
          id: {
            type: GraphQLString
          },
          user_id: {
            type: GraphQLString
          }
        },
        resolve: function (_, args) {
          if (args.id != null) {
            const team = TeamModel.findOne({ _id: args.id }).exec()
            if (!team) {
              throw new Error('Error')
            }
            return team
          } else if (args.user_id != null) {
            const teams = TeamModel.find({ "users": args.user_id });
            return teams.then(function (teamsData) {
              console.log(teamsData)
              if (!teamsData) {
                throw new Error('Error')
              }
              return teams
            })
          }
        }
      }
    }
  }
});