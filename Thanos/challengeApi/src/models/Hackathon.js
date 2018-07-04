// Hackathon.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Hackathon
var Hackathon = new Schema({
  hackathon: {
    name: String,
    desc: String,
    sdate: Date,
    edate: Date,
    updated: { type: Date, default: Date.now },
  },

},{
    collection: 'hackathon'
});

module.exports = mongoose.model('Hackathon', Hackathon);