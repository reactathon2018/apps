db.teams.find()

db.teams.insertMany(
    [
        {
            "teamId": 1,
            "teamName": "Team Uno",
            "teamDescription": "Team 1 Description",
            "teamParticipants": [
                1,2
            ],
            "teamEventId": 1,
            "isTeamActive": true,
            "teamScore": [
                {
                    "Architecture": 80,
                    "Design": 75,
                    "Build": 75,
                    "Dev": 90,
                    "Unit Testing": 30,
                    "System Testing": 50,
                    "Integration Testing": 80,
                    "Deployment": 90
                }
            ],
            "teamScoreMaxTotal": 570,
            "teamRecognition": "Event 1 Runner Up"        
        },
        {
            "teamId": 2,
            "teamName": "Team Lol",
            "teamDescription": "Team 2 Description",
            "teamParticipants": [
                3,4
            ],
            "teamEventId": 1,
            "isTeamActive": true,
            "teamScore": [
                {
                    "Architecture": 100,
                    "Design": 80,
                    "Build": 70,
                    "Dev": 85,
                    "Unit Testing": 100,
                    "System Testing": 80,
                    "Integration Testing": 90,
                    "Deployment": 85
                }
            ],
            "teamScoreMaxTotal": 690,
            "teamRecognition": "Event 1 Winner"        
        },
        {
            "teamId": 3,
            "teamName": "Team Saran",
            "teamDescription": "Team 3 Description",
            "teamParticipants": [
                1,3
            ],
            "teamEventId": 2,
            "isTeamActive": true,
            "teamScore": [
                {
                    "Architecture": 100,
                    "Design": 90,
                    "Build": 70,
                    "Dev": 85,
                    "Unit Testing": 100,
                    "System Testing": 80,
                    "Integration Testing": 80,
                    "Deployment": 85           
                }
            ],
            "teamScoreMaxTotal": 690,
            "teamRecognition": "Event 2 Runner Up"        
        },
        {
            "teamId": 4,
            "teamName": "Team Georgy",
            "teamDescription": "Team 4 Description",
            "teamParticipants": [
                2,4
            ],
            "teamEventId": 2,
            "isTeamActive": true,
            "teamScore": [
                {
                    "Architecture": 100,
                    "Design": 80,
                    "Build": 100,
                    "Dev": 85,
                    "Unit Testing": 70,
                    "System Testing": 80,
                    "Integration Testing": 90,
                    "Deployment": 85             
                }
            ],
            "teamScoreMaxTotal": 690,
            "teamRecognition": "Event 2 Winner"        
        },
        {
            "teamId": 5,
            "teamName": "Team Vecrm (Inactive)",
            "teamDescription": "Team 5 Description",
            "teamParticipants": [
                1,2,3,4
            ],
            "teamEventId": 3,
            "isTeamActive": false,
            "teamScore": [],
            "teamScoreMaxTotal": 0,
            "teamRecognition": ""        
        },
		{
            "teamId": 6,
            "teamName": "Team Duo",
            "teamDescription": "Team 6 Description",
            "teamParticipants": [
                1,2
            ],
            "teamEventId": 4,
            "isTeamActive": true,
            "teamScore": [
                {
                    "Architecture": 80,
                    "Design": 75,
                    "Build": 75,
                    "Dev": 90,
                    "Unit Testing": 30,
                    "System Testing": 50,
                    "Integration Testing": 80,
                    "Deployment": 90
                }
            ],
            "teamScoreMaxTotal": 570,
            "teamRecognition": "Event 4 Runner Up"        
        },
        {
            "teamId": 7,
            "teamName": "Team Smile",
            "teamDescription": "Team 7 Description",
            "teamParticipants": [
                3,4
            ],
            "teamEventId": 2,
            "isTeamActive": true,
            "teamScore": [
                {
                    "Architecture": 10,
                    "Design": 80,
                    "Build": 70,
                    "Dev": 85,
                    "Unit Testing": 0,
                    "System Testing": 80,
                    "Integration Testing": 90,
                    "Deployment": 85
                }
            ],
            "teamScoreMaxTotal": 580,
            "teamRecognition": "Event 2 Participation"        
        },
        {
            "teamId": 8,
            "teamName": "Team Happy",
            "teamDescription": "Team 8 Description",
            "teamParticipants": [
                1,3
            ],
            "teamEventId": 4,
            "isTeamActive": true,
            "teamScore": [
                {
                    "Architecture": 100,
                    "Design": 90,
                    "Build": 70,
                    "Dev": 85,
                    "Unit Testing": 100,
                    "System Testing": 80,
                    "Integration Testing": 80,
                    "Deployment": 85           
                }
            ],
            "teamScoreMaxTotal": 690,
            "teamRecognition": "Event 4 Winner"        
        },
        {
            "teamId": 9,
            "teamName": "Team Win it all",
            "teamDescription": "Team 9 Description",
            "teamParticipants": [
                2,4
            ],
            "teamEventId": 5,
            "isTeamActive": true,
            "teamScore": [
                {
                    "Architecture": 100,
                    "Design": 80,
                    "Build": 100,
                    "Dev": 85,
                    "Unit Testing": 70,
                    "System Testing": 80,
                    "Integration Testing": 90,
                    "Deployment": 85             
                }
            ],
            "teamScoreMaxTotal": 690,
            "teamRecognition": "Event 5 Winner"        
        },
        ,
        {
            "teamId": 10,
            "teamName": "Team Sath (Inactive)",
            "teamDescription": "Team 10 Description",
            "teamParticipants": [
                1,2,3,4
            ],
            "teamEventId": 3,
            "isTeamActive": false,
            "teamScore": [],
            "teamScoreMaxTotal": 0,
            "teamRecognition": ""        
        }
    ]
)

db.teams.find()

db.teams.find({"isTeamActive":false})