db.solutions.find()

db.solutions.insertMany(
    [
        {
            "solutionId": 1,
            "solutionName": "Solution 1",
            "solutionDescription": "Solution 1 Description",
            "solutionLongDescription": "Solution 1 Long Description",            
            "solutionSubmissionDate": ISODate("2014-02-10T10:50:42.389Z"),
            "solutionSubmittedByUserEmpId": 1,
            "solutionLikesCount": 12,
            "solutionKeywords": [                
                "Cloud", "AWS", "Deployment"
            ],
            "solutionUploadPath": "",
            "solutionEventId": 1,
            "solutionOrgId": 1
        },
        {
            "solutionId": 2,
            "solutionName": "Solution 2",
            "solutionDescription": "Solution 2 Description",
            "solutionLongDescription": "Solution 2 Long Description",            
            "solutionSubmissionDate": ISODate("2014-02-10T10:50:42.389Z"),
            "solutionSubmittedByUserEmpId": 1,
            "solutionLikesCount": 19,
            "solutionKeywords": [                
                "CI/CD", "DB", "Deployment", "DevOps"
            ],
            "solutionUploadPath": "",
            "solutionEventId": 1,
            "solutionOrgId": 2
        },
        {
            "solutionId": 3,
            "solutionName": "Solution 3",
            "solutionDescription": "Solution 3 Description",
            "solutionLongDescription": "Solution 3 Long Description",            
            "solutionSubmissionDate": ISODate("2014-02-10T10:50:42.389Z"),
            "solutionSubmittedByUserEmpId": 1,
            "solutionLikesCount": 5,
            "solutionKeywords": [                
                "Nodejs", "Cloud", "Ionic"
            ],
            "solutionUploadPath": "",
            "solutionEventId": 2,
            "solutionOrgId": 1
        }
    ]
)

db.solutions.find()