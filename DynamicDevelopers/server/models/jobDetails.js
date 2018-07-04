import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const jobDetailsSchema = new Schema({
  desc: { type: 'String', required: true },
  name: { type: 'String', required: true },
  managerfeedback: { type: 'String', required: true },
  HrMessage: { type: 'String', required: true },
  interviewDate: { type: 'Date', required: true },
  interviewDetails: { type: 'String', required: true },
  code: { type: 'String', required: true },
  progressCode: { type: 'String', required: true },
});

export default mongoose.model('JobDetails', jobDetailsSchema);
