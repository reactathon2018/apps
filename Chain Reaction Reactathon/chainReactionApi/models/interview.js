const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const InterviewSchema = new Schema({
    username: {
        type: String,
    },
    jobId: {
        type: String,
        required: [true, 'JobID field is required']
    },
    interviewdate: {
        type: Date,
        required: [true, 'InterviewDate is required'],
        default: Date.now
    },
    interviewresult: {
        type: String,
        default: 'InProgress'
    },
    interviewfeedback: {
        type: String
    },
    candidatefeedback: {
      type: String
    }
});

const Interview = mongoose.model('Interview', InterviewSchema);
module.exports = Interview;
