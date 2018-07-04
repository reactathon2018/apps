import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
//import mocks from './mocks';
import resolvers from './resolvers';

const typeDefs = `
type Query {
  job(JobTitle: String, Location: String, Skillset: String): [Job]
  allJobs: [Job]
  candidate(CandidateName: String): [Candidate]
  allCandidates: [Candidate]  
  application(ApplicationId: Int, CandidateId: Int, JobCode: Int): [JobApplication]
  allApplications: [JobApplication]
}

type Job {
  JobCode: Int
  JobTitle: String
  JobDescription: String
  Positionopendate: String
  SkillSet: String
  Experience: String
  Location: String  
}

type Candidate {
  CandidateId: Int
  CandidateName: String
  CandidateEmail: String
  CandidateMobile: String    
}

type JobApplication {
  ApplicationId: Int
  JobCode: Int
  JobTitle: String
  JobDescription: String
  Positionopendate: String
  SkillSet: String
  Experience: String
  Location: String
  CandidateId: Int
  CandidateName: String
  CandidateEmail: String
  CandidateMobile: String
  CurrentCompany: String
  ProfileLink: String
}


`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

//addMockFunctionsToSchema({ schema, mocks });

export default schema;
