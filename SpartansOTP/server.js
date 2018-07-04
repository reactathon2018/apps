//server.js
'use strict'

//first we import our dependencies...
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Comment = require('./src/model/comments');
var Team = require('./src/model/team');
var Hackathon = require('./src/model/hackathon');
//var secrets = require('./secrets');

//and create our instances
var app = express();
var router = express.Router();

//set our port to either a predetermined port number if you have set it up, or 3001
var port = process.env.API_PORT || 3001;

//db config -- set your URI from mLab in secrets.js
//var mongoDB = secrets.requestSecret('db_uri');

const mongoDB = 'mongodb://localhost:27017/mongotest';

mongoose.connect(mongoDB, { useMongoClient: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//now we should configure the APi to use bodyParser and look for JSON data in the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//now  we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

//adding the /comments route to our /api router
router.route('/comments')
  //retrieve all comments from the database
  .get(function(req, res) {
    //looks at our Comment Schema
    Comment.find(function(err, comments) {
      if (err)
        res.send(err);
      //responds with a json object of our database comments.
      res.json(comments)
    });
  })
  //post new comment to the database
  .post(function(req, res) {
    var comment = new Comment();
    (req.body.author) ? comment.author = req.body.author : null;
    (req.body.text) ? comment.text = req.body.text : null;

    comment.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Comment successfully added!' });
    });
  });

//Adding a route to a specific comment based on the database ID
router.route('/comments/:comment_id')
//The put method gives us the chance to update our comment based on the ID passed to the route
  .put(function(req, res) {
    Comment.findById(req.params.comment_id, function(err, comment) {
      if (err)
        res.send(err);
      //setting the new author and text to whatever was changed. If nothing was changed
      // we will not alter the field.
      (req.body.author) ? comment.author = req.body.author : null;
      (req.body.text) ? comment.text = req.body.text : null;
      //save comment
      comment.save(function(err) {
        if (err)
          res.send(err);
        res.json({ message: 'Comment has been updated' });
      });
    });
  })
  //delete method for removing a comment from our database
  .delete(function(req, res) {
    //selects the comment by its ID, then removes it.
    Comment.remove({ _id: req.params.comment_id }, function(err, comment) {
      if (err)
        res.send(err);
      res.json({ message: 'Comment has been deleted' })
    })
  });
  
 
 
   
  //adding the /comments route to our /api router
router.route('/team')
  //retrieve all comments from the database
  .get(function(req, res) {
    //looks at our Comment Schema
    Team.find(function(err, team) {
      if (err)
        res.send(err);
      //responds with a json object of our database comments.
      res.json(team)
    });
  })
  //post new comment to the database
  .post(function(req, res) {
	 
	 console.log(req.body);
	 console.log(req.body.teamname);
     var team = new Team();
    (req.body.teamname) ? team.name = req.body.teamname : null;
  

    team.save(function(err) {
		console.log(err);
      if (err)
        res.send(err);
      //res.json({ message: 'Team successfully added!' });
	  
    });
  });

  router.route('/hackathon')
  //retrieve all comments from the database
  .get(function(req, res) {
    //looks at our Comment Schema
    Hackathon.find(function(err, hackathon) {
      if (err)
        res.send(err);
      //responds with a json object of our database comments.
      res.json(hackathon)
    });
  })
  //post new comment to the database
  .post(function(req, res) {
	 
	 
	 console.log(req.body.name);
     var hackathon = new Hackathon();
    (req.body.name) ? hackathon.name = req.body.name : null;
    hackathon.location = req.body.location;
    hackathon.maxteamsize = req.body.maxteamsize;
    hackathon.id = new Date();
    console.log(new Date());

    hackathon.save(function(err) {
		console.log(err);
      if (err)
        res.send(err);
      //res.json({ message: 'Team successfully added!' });
	  
    });
  });


//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});