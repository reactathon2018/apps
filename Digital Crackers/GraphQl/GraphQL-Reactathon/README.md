# JobSearch GraphQL

```bash
git clone https://github.com/DigitalCrackers/GraphQL-Reactathon
cd GraphQL-Reactathon
npm install
npm start
```

Then open [http://localhost:3000/graphiql](http://localhost:3000/graphiql)

When you paste this on the left side of the page:

```graphql
{
  allJobs{
    JobTitle
    JobDescription
    SkillSet
    Experience
    Location
  }
}
```

and hit the play button (cmd-return), then you should get this on the right side:

```json
{
  "data": {
    "allJobs": [
      {
        "JobTitle": "Analyst",
        "JobDescription": "Just for testing",
        "SkillSet": ".net",
        "Experience": "5 -7",
        "Location": "Chennai"
      },
      {
        "JobTitle": "Sr. Analyst",
        "JobDescription": "Just for testing",
        "SkillSet": "React JS, MongoDB",
        "Experience": "5 -7",
        "Location": "Chennai"
      },
      {
        "JobTitle": "Analyst",
        "JobDescription": "Just for testing",
        "SkillSet": "Java",
        "Experience": "5 -7",
        "Location": "Chennai"
      },
      {
        "JobTitle": "Sr. Analyst",
        "JobDescription": "Just for testing in Hyd",
        "SkillSet": "Java",
        "Experience": "5 -7",
        "Location": "Hyderabad"
      }
    ]
  }
}
```
Note: Provided the MongoDb setup in local sytem. Otherwise change the mongodb URL in data/connectors.js file.