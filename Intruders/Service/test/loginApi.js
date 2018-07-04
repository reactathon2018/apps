var cors = require('cors');
var http = require('http');
var express = require('express');
var { buildSchema } = require('graphql');
var graphqlHTTP = require('express-graphql');
var mongoClient = require('mongodb').MongoClient;
var connectionString = "mongodb://localhost:27017/";
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var Promise = require('promise');
var Schema = require('../model/schema');

var app = express();
let UsersCollection;
let db;
async () => {
db = await mongoClient.connect(connectionString);
UsersCollection = await db.collection("Users");
}

class UserCredentials {
  constructor(result){
    if(result){
  this.userName = result.userName;
  this.isAdmin= result.isAdmin;
  this.loginStatus= true;
    }
    else{
      this.loginStatus= false;
    }
  }
}

var schema =  buildSchema(`
  type UserCredentials{
    userName: String,
    isAdmin: Boolean,
    loginStatus: Boolean
  }

  type Query {
    hello: String
    login(user: String, pwd: String): UserCredentials
  }
`);
var dbCall = function(args, callback){
  if (args && args.user && args.pwd) {
    mongoClient.connect(connectionString, (function (err, db) {
      if (err) throw err;
      var dbo = db.db("Users");
      var query = { name: args.user };//db query
      
      var arrObj = dbo.collection("Users").find(query).toArray(function (err, result) {
        var dbResult = {
          userName: '',
          isAdmin: false,
          loginStatus: false
        }
        if (err) {
          console.log(err);
          dbResult.loginStatus = false;
        }
        if (result) {
          dbResult.userName = result.name;
          dbResult.isAdmin = result.IsAdmin;
          dbResult.loginStatus = true;
        }
        else {
          dbResult.loginStatus = false;
        }
        db.close();
        console.log("adfa" + dbResult.userName);
        callback(dbResult);
      });
    }));
  }
}
 /* var initialize =  function (args){
  return new Promise(function(resolve, reject) {
    dbCall(args, (function(res){
      if(res){
        resolve(res);
      }
      else{
        reject("failure");
      }
    }));
});
} */
var validateUser = async (args) => {
  var obj = await db.db("Users").collection("Users").findOne({ name: args.user }, function(err, result){return result});
  console.log("userObj " + JSON.stringify(obj));
  return new UserCredentials(obj);
  // return new UserCredentials( Users[0]);
  // return new UserCredentials(await UsersCollection.findOne({ name: args.user }));
  /* var userObj = dbCall(args, (function(res){
    return new UserCredentials(res.userName, res.isAdmin, res.loginStatus);
  }));
  console.log("userObj " + JSON.stringify(userObj));
  return userObj; */
};
var root = {
  hello: () => {
    return 'Hello world!';
  },
  login: validateUser
};

app.use(cors());
mongoClient.connect(connectionString, (function (err, database) {
  if (err) throw err;
  db = database;
  app.use('/graphql', graphqlHTTP({
    schema: Schema(db),//    rootValue: root,
    graphiql: true,
  }));
  app.listen(4005);
}));
console.log('Running a GraphQL API server at localhost:4005/graphql');
// server.listen(4000, '10.74.16.155',function(err) {
//   console.log(err, server.address());
// });



var Users = [  
  {
    "userName": "Natarajan",
    "password": "Nat",
    "isAdmin": true
  },
  {
    "userName": "Arun",
    "password": "Arun",
    "isAdmin": true
  }
];