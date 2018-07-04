const express = require('express');
const cors=require('cors')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());



var bodyParser = require('body-parser')
 
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(bodyParser.json())
// POST /login gets urlencoded bodies
app.post('/api/login', urlencodedParser, function (req, res) {
  var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/";
 
 MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("JobPortal");
   console.log(req.body.pwd);
      var query = { UserName: req.body.user,Password:req.body.pwd  };
   console.log("API invoked successfully...." +query);
   dbo.collection("Users").find(query).toArray(function(err, result) {
    if (!result) return result.sendStatus(400)
     if (err) throw err;
     if(result.length>0){
     MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("JobPortal");
      console.log(req.body.pwd);
         var query = { UserName: req.body.user,Password:req.body.pwd  };
      console.log("API invoked successfully...." +query);
      //dbo.collection("JobDetails").find({}, function(err, jobresult) {
        var sort = { JobId: 1 };
  dbo.collection("JobDetails").find().sort(sort).toArray(function(err, jobresult) {

        res.send({ jobresult,result });
        console.log(jobresult);
        db.close();
      });
    });
  }
     
   });
 });
});

app.post('/api/applyJob', urlencodedParser, function (req, res) {
  var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/";
 
 MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("JobPortal");
   var query = { UserId: req.body.userId,JobId:req.body.jobId };
   console.log("API invoked successfully...." +query);
    //dbo.collection("JobProgress").insertOne(query, function(err, result) {
      //dbo.collection("JobProgress").find({}, query).toArray(function(err, result) {
        dbo.collection("JobProgress").find(query).toArray(function(err, result) {
      if (err) throw err
      if(result.length<=0){
      console.log("0 document Found");
      console.log(req.body.userId);
   console.log("API invoked successfully...." +query);
   var query1 = { UserId: req.body.userId,JobId:req.body.jobId ,ApplyDate:req.body.date };
    dbo.collection("JobProgress").insertOne(query1, function(err, result) {
      if (err) throw err
      res.send( "Sucess" );
      console.log("1 document inserted");
     db.close();
   });
  }
  else{
  console.log(result.length);
  res.send( "Failed Already applied" );
  }
     db.close();
   });
 });
});

app.post('/api/ManagerDelete', urlencodedParser, function (req, res) {
  var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/";
 
 MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("JobPortal");
   console.log(req.body.JobId);
      //var query = {ManagerID:req.body.ManagerID, JobId: req.body.JobId, JobDetails:req.body.JobDetails};
   //console.log("API invoked successfully...." +query);
   dbo.collection("JobDetails").deleteOne({JobId: req.body.JobId}, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
 });
});

app.post('/api/JobDetails', urlencodedParser, function (req, res) {
  var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/";
 
 MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("JobPortal");
  dbo.collection('JobProgress').aggregate([
    { $lookup:
       {
         from: 'Users',
         localField: 'UserId',
         foreignField: 'UserId',
         as: 'orderdetails'
       }
     }
    ]).toArray(function(err, result) {
    if (err) throw err;
    //console.log(JSON.stringify(res));
    res.send({result});
    db.close();
  });
});
});




 

app.listen(port, () => console.log(`Listening on port ${port}`));