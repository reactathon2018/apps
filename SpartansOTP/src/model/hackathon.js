var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  startdate: {
    type: String,
    required: false
  },
  enddate: {
    type: String,
    required: false
  },
  portfolio: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  coorganizer: {
    type: String,
    required: false
  },
  organizer: {
    type: String,
    required: false
  },
  maxteamsize: {
    type: Number,
    required: false,
    default: 1
  }
});

module.exports = mongoose.model('Hackathon', teamSchema);