const candidate = require('../models/candidate');
// const candidate = require('../models/candidate');
// const status = require('../models/status');
const env = process.env.NODE_ENV || "development";
var mongoose = require('mongoose');
//conts config = require(`${__dirname}/../config/config.json`)[env];

const CandidateService = require("../services").CandidateService;
//mongoose.connect('mongodb://localhost:27017/recruitportal');
module.exports = app = {
    async saveCandidate(req, res) {

        
console.log("service--");
      await new candidate({
        id: 254174, 
        jobCode:"JC114",
        skills:"MEAN",
        title: "Angular/Node Developer",
        band:"3V",
        designation:"System-Analyst-Dev",
        skills:"MERN,Spring Boot,JAVA 8",
        responsibilities:"fshgvbdfhgvsfhvbf",
        location:"Chennai",
        applicationStatus: "applied",
        employeeType:"Permanent",
        jobTitle:"Angular/Node Developer",
        HR: "xyz",
        HRContact:9897756568,
        HiringManager: "abc",
        email:"vijay@gmail.com",
        mobile:9600696818,
        interviewDate : new Date(),
        appliedDate : new Date(),
        venue : "Olympia Tech Park, Chennai",
        interviewerName : "Ram Kumar",
        status:"Applied",
        createdAt: new Date()
        }).save(function (err) {
            if (err) throw err;

            console.log('User saved successfully!');
            //mongoose.disconnect();
        });
    },
    async getCandidate(req, res) {
        var jobpostList = [];
        var email =req.query.email;
        console.log(email);
      await  candidate.find({email:email},function(err,docs){
           
            for(var i=0;i<docs.length;i++){
                jobpostList.push(docs[i]);
            }
        });
        console.log(jobpostList);
        return jobpostList;
       
    },
};