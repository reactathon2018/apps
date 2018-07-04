const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CandidateSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'first name field is required']
    },
    lastName: {
      type: String,
      required: [true, 'last name field is required']
    },
    age: {
        type: Number,
        required: [true, 'Age field is required']
    },
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    sex: {
      type: String,
      required: [true, 'Gender field is required']
    },
    skillset: {
        type: [String]
    },
    experience: {
      type: Number
    },
    username: {
      type: String,
      required: [true, 'User name is required']
    },
    employed: {
      type: Boolean,
      default: false
    },
    notes: {
      type: String
    }
});

const Candidate = mongoose.model('candidate', CandidateSchema);
module.exports = Candidate;
