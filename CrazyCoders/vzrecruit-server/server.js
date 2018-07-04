var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var cors = require ('cors');



//var { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
class Applicant {
    //super(props);
    
    constructor( name,jobid,status,isResumeUploaded) {
      console.log("calling cont");
      this.name = name;
      this.jobid = jobid;
      this.status = status;
      this.isResumeUploaded = isResumeUploaded;
    }
    
}
  


var schema = buildSchema(`  
  type Query {
    hello: String
    Job(id: Int!): Job
    Jobs(title: String): [Job]    
    Applicants(name:String): [Applicant]
  }, 
  type Mutation {
    SaveApplicant(name:String,jobid:Int!,status:String,isResumeUploaded:String):Applicant
  }
  type Job {
    id: Int
    title: String
    role: String
    description: String
    status: String   
    positons: Int 
  },
  type Applicant{
      name :String
      jobid :Int
      status :String 
      isResumeUploaded :String
  }
`);

var getJob = function(args) { 
    var id = args.id;
    return JobsData.filter(Job => {
        return Job.id == id;
    })[0];
}
var getJobs = function(args) {
    if (args.title) {
        var title = args.title;
        if(title){
        return JobsData.filter(Job => Job.title === title);
        }
        else
        return JobsData;
        
    } else {
        return JobsData;
    }
}
var getApplicants = function(args){
    if(args.name){
        var name = args.name;
        if(name){
        return ApplicantData.filter(Applicant =>Applicant.name === name) ;
        }
        else
        {
            return ApplicantData;
        }
    }
    else
    return ApplicantData;
}
var setApplicants = function({name,jobid,status,isResumeUploaded}){
    console.log(name,jobid,status,isResumeUploaded);    
    var user = new Applicant(name,jobid,status,isResumeUploaded); 
    
    console.log(user);
    
    ApplicantData.push("user",user);
    
}

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  Job: getJob,
  Jobs: getJobs,
  Applicants:getApplicants,
  SaveApplicant:setApplicants
};

var ApplicantData =[
    {
    user:
{
name: 'test',
jobid:1,
status : 'applied',
isResumeUploaded: 'yes'
}
}
]



var JobsData = [
    {
        id: 1,
        title: 'Node.js Developer',
        role: 'Analyst',
        description: 'Node js developer with 2 years of experiance',
        status: 'Pending',
        positons: 4,
    },
    {
        id: 3,
        title: 'React.js Developer',
        role: 'Senior Analyst',
        description: 'React js developer with 2 years of experiance',
        status: 'In Progress',
        positons: 4,
    },
    {
        id: 3,
        title: 'Vue.js Developer',
        role: 'Analyst',
        description: 'Vue js developer with 2 years of experiance',
        status: 'Completed',
        positons: 4,
    }
]

// Run the GraphQL query '{ hello }' and print out the response


var app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,  
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
