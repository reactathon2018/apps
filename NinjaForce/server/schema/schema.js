const graphql = require('graphql');
const _ = require('lodash');

const User = require('../models/user');
const Event = require('../models/events');
const UserEventMapping = require('../models/userEventMap');
const {
    GraphQLObjectType, 
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;

const EventType = new GraphQLObjectType({
    name : 'Event',
    fields : ()=>({
        id : {type:GraphQLID},
        name : {type:GraphQLString},
        date : {type:GraphQLString},
        desc : {type:GraphQLString},
        location: {type:GraphQLString}
    })
})
const UserEventMappingType = new GraphQLObjectType({
    name : 'UserEventMapping',
    fields : ()=>({
        id : {type:GraphQLID},
        userid : {type:GraphQLString},
        eventid : {type:GraphQLString},
        eventList : {
            type : new GraphQLList(EventType),
            resolve(parent,args){
                return Event.find({eventid:parent.eventid});
            }
        }
    })
})
const UserType = new GraphQLObjectType({
    name : 'User',
    fields : ()=>({
        id : {type:GraphQLID},
        name : {type:GraphQLString},
        email : {type:GraphQLString},
        password : {type:GraphQLString},
        organization : {type:GraphQLString},
        events : {
            type : new GraphQLList(UserEventMappingType),
            resolve(parent,args){
                return UserEventMapping.find({userid:parent.id});
            }
        }
        
    })
})

const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields : {
        event: { 
            type:EventType,
            args:{id:{type:GraphQLID }},
            resolve(parent,args){
              //  args.id;
              return Event.findById(args.id)
            }
        },
        user : { 
            type:UserType,
            args:{id:{type:GraphQLID }},
            resolve(parent,args){
              //  args.id;
              return User.findById(args.id)
            }
        },
        events: { 
            type:new GraphQLList(EventType),
            resolve(parent,args){
              //  args.id;
              return Event.find({})
            }
        },
        users : { 
            type:new GraphQLList(UserType),
            resolve(parent,args){
              //  args.id;
              return User.find({})
            }
        },
        userevent : {
            type:UserEventMappingType,
            args:{id:{type:GraphQLID }},
            resolve(parent,args){
              //  args.id;
              return UserEventMapping.findById( args.id)
            }
        },
        usereventmappings : {
            type:UserEventMappingType,
            resolve(parent,args){
              //  args.id;
              return UserEventMapping.find({})
            }
        }
    }
})
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                email : { type: GraphQLString},
                password: { type: GraphQLString },
                organization: { type: GraphQLString }
            },
            resolve(parent, args){
                let user = new User({
                    name: args.name,
                    email : args.email,
                    organization: args.organization
                });
                return user.save();
            }
        },
        addEvent: {
            type: EventType,
            args: {
                name: { type: GraphQLString },
                date: { type: GraphQLString },
                desc: { type: GraphQLString },
                location: { type: GraphQLString }
            },
            resolve(parent, args){
                let event = new Event({
                    name: args.name,
                    date: args.date,
                    desc: args.desc,
                    location: args.location
                });
                return event.save();
            }
        },
        addUserEvent: {
            type: UserEventMappingType,
            args: {
                userid: { type: GraphQLString },
                eventid: { type: GraphQLString }
            },
            resolve(parent, args){
                let userevent = new UserEventMapping({
                    userid: args.userid,
                    eventid: args.eventid,
                    
                });
                return userevent.save();
            }
        }
    }
});
module.exports = new GraphQLSchema ({
    query : RootQuery,
    mutation: Mutation
})