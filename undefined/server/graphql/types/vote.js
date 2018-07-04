var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;

// Vote Type
exports.voteType = new GraphQLObjectType({
    name: 'vote',
    fields: function () {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            isUpvote: {
                type: GraphQLBoolean
            },
            solution_id:{
                type: new GraphQLNonNull(GraphQLID)
            },
            user_id:{
                type: new GraphQLNonNull(GraphQLID)
            }
        }
    }
});

