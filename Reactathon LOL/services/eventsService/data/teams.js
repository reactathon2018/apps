var MongoClient = require('mongodb').MongoClient,
    config = require('../config');

var db_url = config.get('db.protocol') + '://' + config.get('db.host') + ':'+ config.get('db.port')
var db_database = config.get('db.database')
var default_db_collection = "teams"

exports.postTeams = function(req, res) {  
    var commonQuery = { teamId : req.params.teamId, teamName : req.params.teamName, teamDescription : req.params.teamDescription, teamParticipants : req.params.teamParticipants, teamEventId : req.params.teamEventId, isTeamActive : req.params.isTeamActive, teamScore : req.params.teamScore, teamScoreMaxTotal : req.params.teamScoreMaxTotal, teamRecognition : req.params.teamRecognition }

    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);
        db.collection(default_db_collection).insertOne(commonQuery, function (err, response) {
            console.log("Inserted");                
            return res(null, response);
        });
    });
};

exports.deleteTeamsById = function(req, res) {  
    var commonQuery = { teamId : req.params.teamId }

    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);
        
        db.collection(default_db_collection).deleteOne(commonQuery, function (err, response) {
            console.log("Removed");
            return res(null, response);
        });        
    });
};

exports.putTeamsById = function(req, res) {  
    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);
        
        db.collection(default_db_collection).updateOne({ teamId : req.params.teamId }, { $set: { teamId : req.params.teamId, teamName : req.params.teamName, teamDescription : req.params.teamDescription, teamParticipants : req.params.teamParticipants, teamEventId : req.params.teamEventId, isTeamActive : req.params.isTeamActive, teamScore : req.params.teamScore, teamScoreMaxTotal : req.params.teamScoreMaxTotal, teamRecognition : req.params.teamRecognition } }, function (err, response) {
            console.log("Updated");                
            return res(null, response);
        });                
    });
};

exports.getTeamsById = function(req, res) {  
    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);

        db.collection(default_db_collection).findOne({"teamId":parseInt(req.params.teamId)}, function(err, result) {
            if (err) throw err;
            console.log(result);       
            return res(null, result)     
        });
        client.close(); 
    }); 
};

exports.getAllTeams = function (req, res) {    
    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);

        db.collection(default_db_collection).find().toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            return res(null, result)                
        });
        client.close();
    }); 
};

exports.getTeamsByEventId = function(req, res) {      
    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);

        //db.teams.find({"teamEventId": 1}).sort({"teamScoreMaxTotal": -1})
        db.collection(default_db_collection).find({ "teamEventId": parseInt(req.params.teamEventId) }).sort({ "teamScoreMaxTotal": -1}).limit(parseInt(req.params.recordsLimit)).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);       
            return res(null, result)     
        });
        client.close(); 
    }); 
};

// exports.getVendorParkingIdByLatLng = function(req, res) {  
//     pool.getConnection(function(err, connection){
//         if (err) {
//           connection.release();
//           res.json({"code" : 503, "status" : "Error connecting to database.. :("});
//           return;
//         }   
//         console.log('\nConnected as Thread Id: ' + connection.threadId);

//         console.log('Attempting to get parking Ids info : ' + req.params.locationlat + " " + req.params.locationlng);

//         connection.query("CALL spGetVendorParkingIdByLatLng(" + connection.escape(req.params.locationlat) + "," + connection.escape(req.params.locationlng) + ");", function(err, rows){          
//             connection.release();            
//             if(!err) {                                
//                 var response = JSON.stringify(rows[0]); 
//                 return res(null,response); 
//             }
//         });

//         connection.on('error', function(err) {      
//                 var error = {"code" : 503, "status" : "Error connecting to database.. :("};
//                 return error;     
//         });
//     });
// };

// exports.getAvailabilityParkingByLatLng = function(req, res) {  
//     pool.getConnection(function(err, connection){
//         if (err) {
//           connection.release();
//           res.json({"code" : 503, "status" : "Error connecting to database.. :("});
//           return;
//         }   
//         console.log('\nConnected as Thread Id: ' + connection.threadId);

//         console.log('Attempting to get parking availability info : ' + req.params.locationlat + " " + req.params.locationlng);

//         connection.query("CALL spGetAvailabilityParkingByLatLng(" + connection.escape(req.params.locationlat) + "," + connection.escape(req.params.locationlng) + ");", function(err, rows){          
//             connection.release();            
//             if(!err) {                                
//                 var response = JSON.stringify(rows[0]); 
//                 return res(null,response); 
//             }
//         });

//         connection.on('error', function(err) {      
//                 var error = {"code" : 503, "status" : "Error connecting to database.. :("};
//                 return error;     
//         });
//     });
// };