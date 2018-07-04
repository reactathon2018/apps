var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hackathonSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  problem: {
    type: String,
    required: true
  },
  teams: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  }]
});
var Model = mongoose.model('Hackathon', hackathonSchema);
module.exports = Model;
