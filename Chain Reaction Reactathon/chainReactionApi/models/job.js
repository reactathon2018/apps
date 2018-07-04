const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  name: {
      type: String,
      required: [true, 'Job Name field is required']
  },
  description: {
      type: String,
      required: [true, 'Job Description is required']
  },
  skillset: {
      type: [String]
  },
  postedby: {
    type: String
  },
  postdate: {
    type: Date,
    default: Date.now
  }
});

const Job = mongoose.model('jobs', JobSchema);
module.exports = Job;
