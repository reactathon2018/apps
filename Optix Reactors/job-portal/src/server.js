const express = require('express');
bodyParser = require('body-parser');
const cors = require('cors');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

var urlencoded = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());

app.get('/api/get', (req, res) => {
  console.log("Hello API invoked");
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("Reactathon");
//     var name = 'Name';//req.params.name;
//     var value = 'Paras';// req.params.value;
//     var query = {};
//     query[name] = value;
//     dbo.collection("CandidateDetails").findOne(query, function(err, result) {
//       if (err) throw err;
//       console.log(result.Name);
//       res.send({ express: result.Name });
//       db.close();
//     });
//   });
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Reactathon");
    // var name = 'Name';//req.params.name;
    // var value = 'Paras';// req.params.value;
    // var query = {};
    // query[name] = value;
    dbo.collection("SkillsetPosition").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
    });
  });
 
});


app.get('/api/CandidateData', (req, res) => {
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Reactathon");
    dbo.collection("CandidateData").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
    });
  });
 
});

app.post('/api/login',urlencoded, (req, res) => {
  console.log(req.body);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Reactathon");
    var query = {UserName : req.body.email,Password: req.body.password};
    console.log(query);
    dbo.collection("UserDetails").find(query).toArray(function(err, result) {
      if (err) throw err;
      if(!result) return result.sendStatusCode (400);
      console.log(result);
      res.send({result});
      db.close();
    });
  });
  });

app.listen(port, () => console.log(`Listening on port ${port}`));