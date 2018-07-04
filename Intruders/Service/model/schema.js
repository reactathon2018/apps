var graphql = require ('graphql')

let Schema = (db) => {

  let UserCredentialsType = new graphql.GraphQLObjectType({
    name: 'UserCredentials',
    fields: ()=>({
      _id: {type: graphql.GraphQLID},
      userName: {type: graphql.GraphQLString},
      isAdmin: {type: graphql.GraphQLBoolean}
    })
  })

  let EventDetails = new graphql.GraphQLObjectType({
    name: 'EventDetails',
    fields: ()=>({
      id: { type: graphql.GraphQLInt },
      eventName: {type: graphql.GraphQLString},
      eventShortDescription: {type: graphql.GraphQLString},
      eventLongDescription: {type: graphql.GraphQLString},
      eventStatus: {type: graphql.GraphQLString},
      venue: {type: graphql.GraphQLString},
      startDate: {type: graphql.GraphQLString},
      endDate: {type: graphql.GraphQLString},
      eventType: {type: graphql.GraphQLString},
      techStack: {type: graphql.GraphQLString}
    })
  })

  let CandidateDetails = new graphql.GraphQLObjectType({
    name: 'CandidateDetails',
    fields: ()=>({
      name: {type: graphql.GraphQLString},
      teamName: {type: graphql.GraphQLString},
      emailId: {type: graphql.GraphQLString},
      teamSize: { type: graphql.GraphQLInt },
      teamDetails: {type: graphql.GraphQLString},
      contactNo: {type: graphql.GraphQLString}
    })
  })

  let schema= new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
      name: 'Query',
      fields: ()=>({
        getAllUsers:{
          type: new graphql.GraphQLList(UserCredentialsType),
          resolve:() => db.db("Reactathon").collection("Users").find({}).toArray()
        },
        login: {
           args: ({
            user: {type: graphql.GraphQLString},
            pwd: {type: graphql.GraphQLString}
          }),
          type: UserCredentialsType,
          resolve:function (_, {user, pwd}){return db.db("Reactathon").collection("Users").findOne({$and:[{userName:user, passWord: pwd}]})}//function (err, result){console.log(result)}
        },
        getEventDetails:{
          type: new graphql.GraphQLList(EventDetails),
          resolve:() => db.db("Reactathon").collection("Events").find({}).toArray()
        },
        getSignedUpUsers:{
          type: new graphql.GraphQLList(CandidateDetails),
          resolve:()=>db.db("Reactathon").collection("SignUpUsers").find({}).toArray()
        }
      })
    }),
    mutation: new graphql.GraphQLObjectType({
      name:'CreateEvent',
      fields: () =>({
        createEvent: {
          type: graphql.GraphQLString,
          args: {
            id: { type: graphql.GraphQLInt },
            eventName: {type: graphql.GraphQLString},
            eventShortDescription: {type: graphql.GraphQLString},
            eventLongDescription: {type: graphql.GraphQLString},
            eventStatus: {type: graphql.GraphQLString},
            venue: {type: graphql.GraphQLString},
            startDate: {type: graphql.GraphQLString},
            endDate: {type: graphql.GraphQLString},
            eventType: {type: graphql.GraphQLString},
            techStack: {type: graphql.GraphQLString}
          },
          resolve: (_, { id ,eventName,eventShortDescription,eventLongDescription,eventStatus,venue,startDate,endDate,eventType,techStack} ) => {
            var myobj = {
               id: id, 
               eventName: eventName, 
               eventShortDescription: eventShortDescription, 
               eventLongDescription: eventLongDescription,
               eventStatus: eventStatus,
               venue: venue,
               startDate: startDate,
               endDate: endDate,
               eventType: eventType,
               techStack: techStack
              };
           db.db("Reactathon").collection("Events").insertOne(myobj);
           return "Event Created";
          }
        },
        deleteEvent:{
          type: graphql.GraphQLString,
          args: {
            id: { type: graphql.GraphQLInt }
          },
          resolve:(_, {id}) =>{
            db.db("Reactathon").collection("Events").deleteOne({id: id});
            return "Deleted Event";
          }
        },
        signUpUser:{
          type: graphql.GraphQLString,
          args: {
            name: {type: graphql.GraphQLString},
            teamName: {type: graphql.GraphQLString},
            emailId: {type: graphql.GraphQLString},
            teamSize: { type: graphql.GraphQLInt },
            teamDetails: {type: graphql.GraphQLString},
            contactNo: {type: graphql.GraphQLString}
          },
          resolve: (_, { name ,teamName,emailId,teamSize,teamDetails,contactNo} ) => {
            var myobj = {
              name: name,
              teamName: teamName,
              emailId: emailId,
              teamSize: teamSize,
              teamDetails: teamDetails,
              contactNo: contactNo
              };
           db.db("Reactathon").collection("SignUpUsers").insertOne(myobj);
           return "Registered Successfully";
          }
        }
      })
    })
  })
  return schema;
};

module.exports = Schema;