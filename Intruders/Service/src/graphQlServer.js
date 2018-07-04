var cors = require('cors');
var express = require('express');
var graphqlHTTP = require('express-graphql');
var mongoClient = require('mongodb').MongoClient;
var connectionString = "mongodb://localhost:27017/";
var Schema = require('../model/schema');

var app = express();
let db;
app.use(cors());
mongoClient.connect(connectionString, (function (err, database) {
  if (err) throw err;
  db = database;
  app.use('/reactathon', graphqlHTTP({
    schema: Schema(db),
    graphiql: true,
  }));
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/reactathon');