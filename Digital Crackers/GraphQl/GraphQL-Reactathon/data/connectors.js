
// at the top with imports:
import Mongoose from 'mongoose';
import { INT } from 'graphql/language/kinds';


// somewhere in the middle:
Mongoose.Promise = global.Promise;

const mongo = Mongoose.connect('mongodb://localhost:27017/jobsearch', {
  useMongoClient: true
});

const JobSchema = Mongoose.Schema({
    JobCode: Number,
    JobTitle: String,
    JobDescription: String,
    Positionopendate: String, 
    SkillSet: String, 
    Experience: String, 
    Location: String,
});

const Job = Mongoose.model('jobs', JobSchema);

const CandidateSchema = Mongoose.Schema({
    CandidateId: Number,
    CandidateName: String,
    CandidateEmail: String,
    CandidateMobile: String,     
});

const Candidate = Mongoose.model('candidates', CandidateSchema);

const JobApplicationSchema = Mongoose.Schema({
    ApplicationId: Number,
    JobCode: Number,
    JobTitle: String,
    JobDescription: String,
    Positionopendate: String, 
    SkillSet: String, 
    Experience: String, 
    Location: String,
    CandidateId: Number,
    CandidateName: String,
    CandidateEmail: String,
    CandidateMobile: String,     
    CurrentCompany: String,
    ProfileLink: String,
});

const JobApplication = Mongoose.model('jobapplications', JobApplicationSchema);


export { Job, Candidate, JobApplication };
