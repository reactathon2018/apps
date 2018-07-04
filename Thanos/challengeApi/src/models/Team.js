// Team.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Hackathon = require('./Hackathon').schema;
const User = require('./User').schema;

// Define collection and schema for Team
var Team = new Schema({
    team: {
    teamname: String,
    teammemers : [ User.Types.ObjectId ],
    hackathonid:  Hackathon.Types.ObjectId,
    teamscore: { type: Number, default: 0 },    
    updated: { type: Date, default: Date.now },
  },
},{
    collection: 'team'
});

module.exports = mongoose.model('Team', Team);