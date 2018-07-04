const express = require('express');
const bodyParser = require('body-parser');
const app = express();



var oppmodel= require('./app/models/oppmodel.js');


const JobRouter = express.Router();
JobRouter.route('/getjobinfo1')
    .get((req, res) => {
      oppmodel.find({}, (err, Opp) => {
        var result={}
        result.obj=Opp
        res.json(result )
        })  
    })

    app.use(function(req, res, next){
      res.setHeader('Access-Control-Allow-Origin','*')
       next();
     });

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/getjobinfo', (req, res) => {
//     var awesome_instance = new oppmodel(
     
//       {
//         JobCode:6002,
//         JobType:"Back End Developers",
//         Summary:"Responsibilities- * Understand Architecture Requirements and ensure effective Design, Development, Validation and Support activities.,• Good understanding of the technology and domain.,• Ability to lead a team towards a desired goal.,• Ensure continual knowledge management.,• Adherence to the organizational guidelines and processes ",
//         PrimarySkills:"Angular Js, Node JS, React JS, J2EE, Struts, Spring, Hibernat ",
//         SecondarySkills:"Rest, Web Services, Node JS",
//         YearsOfExperience:"4-6 Years",
//         NumberofOpenings:"14",
//         JobLocation:"Chennai"
//         }
//     );
//      awesome_instance.save(function (err) {
//      if (err) return handleError(err);
//     // saved!
//   });





   oppmodel.find({}, (err, Opp) => 
  {
    var result={}
    result.obj=Opp
    res.json(result )
})  
});

app.get('/getOpp/:JobCode', (req, res) => 
{
  var code=req.params.JobCode
  code=code.replace('JobCode=','')
   // oppmodel.findById(req.params.JobCode, (err, Opp) => 
   oppmodel.find({'JobCode':code}, (err, Opp) => 
  {
    console.log('id:'+ code)
    var result={};
    result.obj=Opp
    res.json(result )
})  
});


app.get('/deleteAllJob', (req, res) => 
{
 
   // oppmodel.findById(req.params.JobCode, (err, Opp) => 
   oppmodel.remove({}, (err, Opp) => 
  {
    
    var result="Removed All jobs"
    console.log('delete status'+ Opp)
    res.json(result )
})  
});


app.get('/updateopenings/:JobCode', (req, res) => 
{
  var code=req.params.JobCode
  code=code.replace('JobCode=','')


  oppmodel.find({'JobCode':code}, (err, Opp) => 
  {
    console.log("no of op:" + (Opp[0].NumberofOpenings-1))
    
    oppmodel.findOneAndUpdate({'JobCode':code},{$set:{'NumberofOpenings':Opp[0].NumberofOpenings-1}},{new:true},function(err,opp){

   console.log("Updated:" +opp)
     res.json(opp )
})
  })  

  
 
});


app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");    



}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

