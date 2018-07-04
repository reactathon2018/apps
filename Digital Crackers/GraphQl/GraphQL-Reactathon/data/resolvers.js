
import { Job, Candidate, JobApplication } from './connectors';

/*
import {MongoClient, ObjectId} from 'mongodb'
const MONGO_URL = 'mongodb://digitalcrackers:LWRY3xoIDa7rxsl-s5zy0DV2HPjoVZi4@ds125041.mlab.com:25041/jobsearch'


const prepare = (o) => {
    o._id = o._id.toString()
    return o
  }

const db = MongoClient.connect(MONGO_URL)
const Job = db.collection('jobsearch')
const Candidate = db.collection('candidate')
*/

const resolvers = {
  Query: {
    job(root, args) {       
      return Job.find(args);
    },
    allJobs() {
      return Job.find();
    },
    candidate(root, args) {
      return Candidate.find(args);
    },
    allCandidates() {
      return Candidate.find();
    },
    application(root, args) {
      return JobApplication.find(args);
    },
    allApplications() {
      return JobApplication.find();
    }
  }

};

/*
const resolvers = {
    Query: {
      job(root, args) {
        return { id: 1, JobTitle: 'Analyst', JobDescription: 'Just for testing',Positionopendate: '3/3/18', SkillSet: '.net', Experience: '5 -7', Location: 'Chennai' };
      },
      allJobs() {
        return [{ id: 1, JobTitle: 'Analyst', JobDescription: 'Just for testing',Positionopendate: '3/3/18', SkillSet: '.net', Experience: '5 -7', Location: 'Chennai'}];
      },
      candidate(root, args) {
        return { id: 1, CandidateName: 'Sheik', CandidateEmail: 'xyz@gmail.com', CandidateMobile: '9938383838' };
      },
      allCandidates() {
        return [{  id: 1, CandidateName: 'Sheik', CandidateEmail: 'xyz@gmail.com', CandidateMobile: '9938383838' }];
      }
    }
  };
  */
  export default resolvers;