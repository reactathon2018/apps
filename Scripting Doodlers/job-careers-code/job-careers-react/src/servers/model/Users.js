/*var express = require('express');
var router = express.Router();*/

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;*/

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    }
});
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('User', UserSchema);