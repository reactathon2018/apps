const model = require('../models');
const env = process.env.NODE_ENV || "development";
//conts config = require(`${__dirname}/../config/config.json`)[env];

const CandidateController = require("../controller").CandidateController;

module.exports = (app) =>{
    app.get("/saveCandidate",function(req,res,next){
      console.log("inside");
      CandidateController.saveCandidate(req,res);
    });

    app.get("/getCandidate",function(req,res,next){
      console.log("inside");
      CandidateController.getCandidate(req,res);
    });
}