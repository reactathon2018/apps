import casual from 'casual';

const mocks = {
  String: () => 'It works!',
  Query: () => ({
    job: (root, args) => {
      return { JobTitle: args.JobTitle, JobDescription: args.JobDescription };
    },
  }),
  Job: () => ({ JobTitle: () => casual.random, JobDescription: () => casual.short_description }),
  Candidate: () => ({ CandidateName: casual.name, CandidateEmail: casual.email }),
};

export default mocks;
