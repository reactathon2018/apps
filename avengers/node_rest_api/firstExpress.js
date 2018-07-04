var express = require("express");
var app = express();
//var bodyParser=require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

//Creating Router() object

var router = express.Router();
app.body

// Router middleware, mentioned it before defining routes.

router.use(function(req,res,next) {
  console.log("/" + req.method);
  next();
});

// Provide all routes here, this is for Home page.

router.get("/getJobCodeForCandidate/:id",function(req,res){
    //res.setHeader('Content-Type', 'application/json');
    MongoClient.connect(url, function(err, db) {
        //app.use(bodyParser.json);
       // app.use(bodyParser.urlencoded({extended:false}));
        if (err) throw err;
        var dbo=db.db("Reactathon");
        dbo.collection('JobApplications_Avengers').find({"candidateid": parseInt(req.params.id) },{projection:{"_id":false,"jobid":true,"postingtitle":true,"jobfamily":true,"location":true,"loadedon":true}}).toArray(function(err,result){
            res.json(result);
        });
    });
    //res.end();
});

router.get("/getInterviewDetailsCandidateAndJobId/:id/:jobid",function(req,res){
    //res.setHeader('Content-Type', 'application/json');
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo=db.db("Reactathon");
        dbo.collection('JobApplications_Avengers').find({"candidateid": parseInt(req.params.id),"jobid": req.params.jobid },{projection:{"_id":false,"jobid":true,"desciption":true,"jobfamily":true,"location":true,"scheduledate":true}}).toArray(function(err,result){
            res.json(result);
        });
    });
    //res.end();
});

router.get("/getInterviewFeedbackCandidateAndJobId/:id/:jobid",function(req,res){
    //res.setHeader('Content-Type', 'application/json');
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo=db.db("Reactathon");
        dbo.collection('JobApplications_Avengers').find({"candidateid": parseInt(req.params.id),"jobid": req.params.jobid },{projection:{"_id":false,"jobid":true,"desciption":true,"jobfamily":true,"location":true,"scheduledate":true,"interviewerfeedback":true}}).toArray(function(err,result){
            res.json(result);
        });
    });
    //res.end();
});

router.get("/updateCandidateFeedback/:id/:jobid/:feedback",function(req,res){
    //res.setHeader('Content-Type', 'application/json');
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo=db.db("Reactathon");
        dbo.collection('JobApplications_Avengers').updateOne({"candidateid": parseInt(req.params.id),"jobid": req.params.jobid},{$set:{"candidatefeedback":req.params.feedback}},function(err,result){
            if(err) throw err;
            console.log("Updated");
        });
    });
    res.end();
});

// Tell express to use this router with /api before.
// You can put just '/' if you don't want any sub path before routes.

app.use("/api",router);

// Listen to this Port

app.listen(8000,function(){
  console.log("Live at Port 8000");
});