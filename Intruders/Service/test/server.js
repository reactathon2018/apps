var cors = require('cors');
var express = require('express');
var graphqlHTTP = require('express-graphql');

var schema = require('../model/loginSchema');
var stub = require('../stub');

var app = express();

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

var validateUser =  (args) => {
    console.log(stub);
    if(args && args.user && args.pwd && stub.Users && stub.Users.length > 0){
        for(i = 0; i <  stub.Users.length; i++){
            if( stub.Users[i].userName == args.user && stub.Users[i].password == args.pwd){
                return new UserCredentials( stub.Users[i]);
            }
        }
    }
};

var root = {
    hello: () => {
      return 'Hello world!';
    },
    login: validateUser
};

app.use(cors());
app.use('/reactathon', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/reactathon');