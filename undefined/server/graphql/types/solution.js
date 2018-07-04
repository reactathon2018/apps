var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;

// User Type
exports.solutionType = new GraphQLObjectType({
    name: 'solution',
    fields: function () {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            solution: {
                type: GraphQLString
            },
            team_id:{
                type: new GraphQLNonNull(GraphQLID)
            },
            hackathon_id:{
                type: new GraphQLNonNull(GraphQLID)
            }
        }
    }
});

