import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  name: { type: 'String', required: true },
  email: { type: 'String', required: true },
  title: { type: 'String', required: true },
  code: { type: 'String', required: true },
  description: { type: 'String', required: true },
  interviewDate: { type: 'String', required: true },
  appliedDate: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Job', jobSchema);
