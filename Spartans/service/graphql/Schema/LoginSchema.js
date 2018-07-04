import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLBoolean
  } from 'graphql/type';
  
  import LoginMongo from '../../mongoose/login';
  
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
  
  var loginType = new GraphQLObjectType({
    name: 'login',
    description: 'login details',
    fields: () => ({
      userId: {
        type: (GraphQLInt),
        description: 'The empid or userid.'
      },
      vzid: {
        type: GraphQLString,
        description: 'The vzid for login.'
      },
      pass: {
        type: GraphQLString,
        description: 'The password for login.'
      },
      token: {
        type: GraphQLString,
        description: 'The token for login.'
      }
    })
  });
  
  
  
  var loginschema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
       login: {
          type: new GraphQLList(loginType),
          args: {
            userId: {
              name: 'userId',
              type: new GraphQLNonNull(GraphQLInt)
            }
          },
          resolve: (root, {userId}, source, fieldASTs) => {
              console.log("--loginschema resolve");
            var projections = getProjection1(fieldASTs);
            var foundItems = new Promise((resolve, reject) => {
                LoginMongo.find({userId}, projections,(err, logins) => {
                    err ? reject(err) : resolve(logins)
                })
            })
  
            return foundItems
          }
        }
      }
    })
    
  });
  
  export default loginschema
  
  