use hacktrixDb

db

db.createCollection("events")
db.createCollection("teams")
db.createCollection("users")
db.createCollection("solutions")

// db.createCollection("scoring")
// db.createCollection("recognition")

// db.scoring.drop()
// db.recognition.drop()

db.getCollectionNames()