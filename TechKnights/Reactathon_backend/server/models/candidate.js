// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var schema = new Schema({
  id: { type: Number, required: true, unique: true },
  jobCode: { type: String, required: true, unique: true },
  skills: { type: String, required: true },
  title: { type: String, required: true},
  band: { type: String, required: true},
  designation: { type: String, required: true},
  skills: { type: String, required: true},
  responsibilities: { type: String, required: true},
  location: { type: String, required: true},
  applicationStatus: { type: String, required: true},
  jobTitle: { type: String, required: true},
  employeeType: { type: String, required: true},
  HR : { type: String, required: true},
  HRContact: { type: Number, required: true},
  HiringManager: { type: String, required: true},
  email: { type: String, required: true},
  mobile: { type: Number, required: true},
  interviewDate: { type: Date, required: true},
  appliedDate: { type: Date, required: true},
  venue: { type: String, required: true},
  interviewerName: { type: String, required: true},
  status: { type: String, required: true},
  createdAt: Date


});

// the schema is useless so far
// we need to create a model using it
var candidate = mongoose.model('Candidate', schema);

// make this available to our users in our Node applications
module.exports = candidate;