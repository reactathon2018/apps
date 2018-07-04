var { graphql, buildSchema } = require('graphql');
var MongoClient = require('mongodb').MongoClient;

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    getjobdetails: items
   }
   
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  getjobdetails: () => {
    return result();
  },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});
function result(){
    var result;
MongoClient.connect('mongodb://10.74.17.0:27017', { useNewUrlParser: true },function (err, client) {
  if (err) throw err;

  var db = client.db('vzjob');

  db.collection('userinfo').find({}).toArray(function(err, items) {
    if(err) throw err; 
    result=items;   
    console.log(items);
   
    client.close();
  });
}); 
return result;
}

function sqlresult(){
    var result;
MongoClient.connect('mongodb://10.74.17.0:27017', { useNewUrlParser: true },function (err, client) {
  if (err) throw err;

  var db = client.db('vzjob');

  db.collection('userinfo').find({}).toArray(function(err, items) {
    if(err) throw err; 
    result=items;   
    console.log(items);
   
    client.close();
  });
}); 
return result;
}