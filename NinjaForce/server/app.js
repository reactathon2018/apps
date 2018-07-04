var express = require('express');
var graphqlHTTP = require('express-graphql');
var schema = require('./schema/schema');
var mongoose = require('mongoose');
const cors = require('cors');
var mongoClient = require('mongodb').MongoClient;

const app = express();

app.use(cors());
mongoClient.connect('mongodb://localhost:27017/hackathon_dev',function(err,dbase){
  const db=dbase.db('hackathon_dev')
  db.collection('Events',function(err,collection){
    collection.insert({ id:2, name:'Reactathon 2018',desc:'A week reactathon event for all portfolio',location:'India',date:'5-7-2018'});
  });
});

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))
app.listen(4000,()=> {
    console.log('now listening for requests from 4000')
});
