// Hackathon.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Hackathon
var RegisterHackathon = new Schema({
  RegisterHackathon: {
    tname: String,
    noofpersons: Number,
    teamlist: String,
    technology: String,
    date: { type: Date, default: Date.now },
  },

},{
    collection: 'RegisterHackathon'
});

module.exports = mongoose.model('RegisterHackathon', RegisterHackathon);