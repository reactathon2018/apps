var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
  id: {
    type: Number,
    unique: false,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  size: {
    type: Number,
    required: false,
    default: 1
  }
});

module.exports = mongoose.model('Team', teamSchema);