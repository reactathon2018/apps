import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql/type';

import UserDetailsMongo from '../../mongoose/users';
/**
 * generate projection object for mongoose
 * @param  {Object} fieldASTs
 * @return {Project}
 */
export function getProjection1 (fieldASTs) {
  return fieldASTs.fieldNodes[0].selectionSet.selections.reduce((projections, selection) => {
    projections[selection.name.value] = true;
    return projections;
  }, {});
}

var userType = new GraphQLObjectType({
  name: 'user',
  description: 'user item',
  fields: () => ({
    empId: {
      type: (GraphQLInt),
      description: 'The empId of the user.',
    },
    vzid: {
      type: GraphQLString,
      description: 'The vzid of the user.',
    },
    firstname: {
      type: GraphQLString,
      description: 'The firstname of the user '
    },
    lastname: {
      type: GraphQLString,
      description: 'The firstname of the user '
    },
    reportsTo: {
      type: GraphQLString,
      description: 'The firstname of the user '
    },
    events: {
      type: GraphQLList, 
      description: 'The event of the user ',
      interfaces: eventType
    },
    history: {
      type: GraphQLList,
      description: 'The event of the user ',
      interfaces: eventType
    }
  })
});

var eventType = new GraphQLObjectType({
  name: 'event',
  description: 'event item',
  fields: () => ({
    eventId: {
      type: (GraphQLInt),
      description: 'The eventId.',
    },
    eventName: {
      type: GraphQLString,
      description: 'The eventName.',
    },
    status: {
      type: GraphQLString,
      description: 'The status of the event '
    },
    completed: {
      type: GraphQLBoolean,
      description: 'The status of the event '
    },
    create_dt: {
      type: GraphQLString,
      description: 'The date of the event '
    },
  })
});
/*
var userschema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      user: {
        type: new GraphQLList(userType),
        args: {
          vzid: {
            name: 'vzid',
            type: GraphQLString
          }
        },
        resolve: (root, {vzid}, source, fieldASTs) => {
          var projections = getProjection1(fieldASTs);
          var foundItems = new Promise((resolve, reject) => {
            UserDetailsMongo.find({vzid}, projections,(err, todos) => {
                  err ? reject(err) : resolve(todos)
              })
          })

          return foundItems
        }
      }
    }
  })
  
});

export default userschema;*/