var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hackathonSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  Summary: {
    type: String,
    required: true
  },
  Desc: {
    type: String,
    required: true
  },
  Org: {
    type: String,
    required: true
  },
  TeamSize: {
    type: String,
    required: true
  },
  Status: {
    type: String,
    required: true
  },
  Id: {
    type: String,
    required: true
  }
});
var Model = mongoose.model('Hackathon', hackathonSchema);
module.exports = Model;
