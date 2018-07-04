var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  badges: {
    type: Number,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    required: true
  }
});
var Model = mongoose.model('User', userSchema);
module.exports = Model;
