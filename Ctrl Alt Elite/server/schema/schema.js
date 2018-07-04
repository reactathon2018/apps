const graphql = require('graphql');
const HackData = require('../models/forestfire');
const _=require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const HackType = new GraphQLObjectType({
    name: 'Hackathon',
    fields: ( ) => ({
        name: { type: GraphQLString },
        src: { type: GraphQLString },
        adminname: { type: GraphQLString },
        location: { type: GraphQLString },
        org: { type: GraphQLString },
        lang: { type: GraphQLString },
        starttime: { type: GraphQLString },
        endtime: { type: GraphQLString }
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        hackathon: {
            type: new GraphQLList(HackType),
            resolve(parent, args){
                return HackData.find({});
            }
        },
        /*forestbymonth:{
            type: new GraphQLList(ForestType),
            args:{month :{ type: GraphQLString }},
            resolve(parent,args){
                return ForestFire.find({month:args.month});
            }
        }*/
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
