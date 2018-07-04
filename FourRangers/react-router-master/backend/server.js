var express = require("express")
var app = express();
var bordyParser = require("body-parser");
app.use(bordyParser.json());
app.use(bordyParser.urlencoded({extended: true}));

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';
// app.route("/insertJob").post(function(req,res){
//   MongoClient.connect(url, function(err, client) {
//
//     const db = client.db(dbName);
//
//     insertDocuments(db,req function() {
//       res.send('inserted');
//     //  client.close();
//     });
//   });
// });
//
//

app.route("/addJob").post(function(req,res){
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    const db = client.db(dbName);
      var jobid =  req.Body;

      var job = req.body;
    //  res.send(req.body);
    addJob(db,req,res,job, function(data) {
      res.send(data);
     client.close();
    });
  });
});
const addJob = function(db,req,res,job, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
    collection.insertOne(
      job
    , function(err, result) {

      console.log("Inserted 3 documents into the collection");
      callback(result);
    });

}

app.route("/getAllJobs").get(function(req,res){
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    const db = client.db(dbName);
    const collection = db.collection('documents');
    // Insert some documents
      var cursor = collection.find();
      var record = [];


    cursor.forEach(function(item) {
           if (item != null) {
                  record.push(item);
           }
       }, function(err) {
             record.push();
             res.send(record);
           client.close();
          }
       );
  //res.send(record);
//  client.close();
    // getAllJobs(db,req,res, function(data) {
    //   res.send(data);
    //   client.close();
    //   res.send(data);
    //   client.close();
    // });
  });
});
//
//
const getAllJobs = function(db,req,res, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
    var cursor = collection.find();
    var record = [];
    cursor.each(function(err, doc) {

          record.push(doc);
  console.log("doc--->"+doc);
  console.log("record++++++"+record);

      });
console.log("record--------"+record);
    callback(record);
}

//
// const insertDocuments = function(db,req, callback) {
//   // Get the documents collection
//   const collection = db.collection('documents');
//   // Insert some documents
//   collection.insertMany([
//     req
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }

app.listen(4001,function(){});
