// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var schema = new Schema({
  email: { type: String, required: true, unique: true },
  jobCode: { type: String, required: true},
  mobile: { type: String, required: true},
  Documents : {type: String, required: true},
  created_at: Date

});

// the schema is useless so far
// we need to create a model using it
var Candidate = mongoose.model('Candidate', schema);

// make this available to our users in our Node applications
module.exports = Candidate;