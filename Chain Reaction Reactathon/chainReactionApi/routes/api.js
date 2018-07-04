const express = require ('express');
const router = express.Router();
const User = require('../models/user');
const Job = require('../models/job');
const Candidate = require('../models/candidate');
const Interview = require('../models/interview');


// User router function
router.get('/users/:id', function(req, res, next){
  console.log('user id: ' + req.params.id);
  User.findbyId(req.params.id, function(err,user){
      res.send(user);
  }).catch(next);
});

  router.get('/userbyname/:name', function(req, res, next){
    console.log('user id: ' + req.params.name);
    User.findOne({username: req.params.name}, function(err,user){
        res.send(user);
    }).catch(next);
  });

router.post('/users', function(req, res, next){
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});

router.put('/users/:id', function(req, res, next){
    res.send({type: 'PUT'});
});


// jobs router function
router.post('/jobs', function(req, res, next){
    Job.create(req.body).then(function(job){
        res.send(job);
    }).catch(next);
});

router.get('/jobs', function(req, res, next){
    Job.find({}, function(err, jobs){
        res.send(jobs);
    }).catch(next);
});

//Candidate Router
router.post('/candidate', function(req, res, next){
    Candidate.create(req.body).then(function(candidate){
        res.send(candidate);
    }).catch(next);
});

router.get('/candidate/:name', function(req, res, next){
  console.log('candidate id: ' + req.params.name);
      Candidate.findOne({username: req.params.name}, function(err,candidate){
        res.send(candidate);
  }).catch(next);
});

router.put('/candidate/:name', function(req, res, next){
    Candidate.findOneAndUpdate({username: req.params.name}, req.body).then(function(){
      Candidate.findOne({username: req.params.name}).then(function(candidate){
        res.send(candidate);
      });
    }).catch(next);
});

//Interview Router methods
router.post('/interview', function(req, res, next){
    Interview.create(req.body).then(function(interview){
        res.send(interview);
    }).catch(next);
});

router.put('/interview/:id', function(req, res, next){
    Interview.findByIdAndUpdate({_id: req.params.id} ,req.body).then(function(interview){
        res.send(interview);
    }).catch(next);
});

router.get('/interview/:name', function(req, res, next){
    Interview.findOne({username: req.params.name}).then(function(interview){
        res.send(interview);
    }).catch(next);
});

module.exports = router;
