//user
var addUser = require('./user/add').add;
var removeUser = require('./user/remove').remove;
var updateUser = require('./user/update').update;

//solution
var addSolution = require('./solution/add').add;
var removeSolution = require('./solution/remove').remove;
var updateSolution = require('./solution/update').update;

//discussion
var addDiscussion = require('./discussion/add').add;
var removeDiscussion = require('./discussion/remove').remove;
var updateDiscussion = require('./discussion/update').update;

//team
var addTeam = require('./team/add').add;
var updateTeam = require('./team/update').update;
var removeTeam = require('./team/remove').remove;

//hackathon
var addHackathon = require('./hackathon/add').add;
var updateHackathon = require('./hackathon/update').update;
var removeHackathon = require('./hackathon/remove').remove;

module.exports = {
  addUser,
  removeUser,
  updateUser,
  addSolution,
  removeSolution,
  updateSolution,
  addDiscussion,
  removeDiscussion,
  updateDiscussion,
  addHackathon,
  updateHackathon,
  removeHackathon,
  addTeam,
  updateTeam,
  removeTeam
}