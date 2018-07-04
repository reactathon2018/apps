var url = require('url');
var cors = require('cors');
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var connectionString = "mongodb://localhost:27017/";
var router = express.Router();

var dbCall = function(args, calback){
    if (args && args.user && args.pwd) {
        MongoClient.connect(connectionString, (function (err, db) {
        if (err) throw err;
        var dbo = db.db("users");
        var query = {};//db query
        
        dbo.collection("users").find(query).toArray(function (err, result) {
          if (err) {
            console.log(err);
            calback(err);
          }
          if (result) {
            console.log("No om DBafga");
            //compute events
            calback(result);
          res.send(result);//send manipulated data
          }
          else {
            calback("No Data retrieved from DB");
          }
          db.close();
        });
      }));
    }
  }

var app = express();

app.use(cors());
app.get('/getEvents',function(req, res){
    console.log("No Data retrieved from DBafga");
    dbCall("getEvents", function(res){
        //error handling
    });
});
app.listen(4003);
console.log('Running a GraphQL API server at localhost:4003/getEvents');