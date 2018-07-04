// itemRoutes.js

var express = require('express');
var app = express();
var HackRouter = express.Router();

// Require Item model in our routes module
var Item = require('../models/Item');
var Hackathon = require('../models/Hackathon');
var RegisterHackathon = require('../models/RegisterHackathon');




HackRouter.route('/').get(function (req, res) {
  RegisterHackathon.find(function (err, itms){
    if(err){
      console.log(err);
    }
    else {
      res.json(itms);
    }
  });
});


module.exports = HackRouter;