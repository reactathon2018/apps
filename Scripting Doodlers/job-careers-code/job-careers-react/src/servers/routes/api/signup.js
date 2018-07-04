const express = require('express');
const app = express();
const router = express.Router();
const mongojs = require('mongojs');

// Get All todos
/*router.get('/login', function(req, res, next){
    db.login.find(function(err, login){
        if(err){
            res.send(err);
        }
        res.json(login);
    });
});

//Save todo
router.post('/new', function(req, res, next){
    const log = req.body;
    if(!log.email || !(log.password + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.login.save(login, function(err, login){
            if(err){
                res.send(err);
            }
            res.json(login);
        });
    }
});
module.exports = router;*/

const User = require('../../model/Users');

module.exports = (app) => {
  /*
   * Sign up
   */
  app.post('/routes/api/signup', (req, res, next) => {
    const { body } = req;
    const {
      password
    } = body;
    let {
      email
    } = body;
    
    if (!email) {
      return res.send({
        success: false,
        message: 'Error: Email cannot be blank.'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank.'
      });
    }
    email = email.toLowerCase();
    email = email.trim();
    // Steps:
    // 1. Verify email doesn't exist
    // 2. Save
    User.find({
      email: email
    }, (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: 'Error: Account already exist.'
        });
      }
      // Save the new user
      const newUser = new User();
      newUser.email = email;
      newUser.password = newUser.generateHash(password);
      newUser.save((err, User) => {
        if (err) {
          return res.send({
            success: false,
            message: 'Error: Server error'
          });
        }
        return res.send({
          success: true,
          message: 'Signed up'
        });
      });
    });
  }); // end of sign up endpoint
};