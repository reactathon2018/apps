var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;

// Discussion Type
exports.discussionType = new GraphQLObjectType({
    name: 'discussion',
    fields: function () {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            user_id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            question: {
                type: new GraphQLNonNull(GraphQLString)
            }
        }
    }
});

