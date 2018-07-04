import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
  } from 'graphql';
  
  
  var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        hello: {
          type: GraphQLString,
          args: {
            greet: { type: GraphQLString }
          },
          //Using Destructuring feature of ES2015 to assign value to greet
          resolve: (root, {greet}) => {
            greet = greet ? greet + '!' : 'world!';
            return greet;
          }
        }
      }
    })
  });
  
  var query = `
    query Welcome {
      hello (greet: "mehdi")
    }
  `;
  
  graphql(schema, query).then((result) => {
  
    // Prints
    // {
    //   data: { hello: "mehdi!" }
    // }
    console.log(result);
  })