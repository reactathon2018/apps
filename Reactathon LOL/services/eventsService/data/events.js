var MongoClient = require('mongodb').MongoClient,
    config = require('../config');

var db_url = config.get('db.protocol') + '://' + config.get('db.host') + ':'+ config.get('db.port')
var db_database = config.get('db.database')
var default_db_collection = "events"

exports.postEvents = function (req, res) {
    var commonQuery = { eventId : req.params.eventId, eventName : req.params.eventName, eventDescription : req.params.eventDescription, eventReleaseDate : req.params.eventReleaseDate, eventNominationStartDate : req.params.eventNominationStartDate, eventNominationEndDate : req.params.eventNominationEndDate, eventStartDate : req.params.eventStartDate, eventEndDate : req.params.eventEndDate, eventDemoDate : req.params.eventDemoDate, eventFinaleDate : req.params.eventFinaleDate, eventScoring : req.params.eventScoring, eventScoringMaxTotal : req.params.eventScoringMaxTotal }

    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);
        db.collection(default_db_collection).insertOne(commonQuery, function (err, response) {
            console.log("Inserted");                
            return res(null, response);
        });
    });
};

exports.deleteEventsById = function (req, res) {
    var commonQuery = { eventId : req.params.eventId }

    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);
        
        db.collection(default_db_collection).deleteOne(commonQuery, function (err, response) {
            console.log("Removed");
            return res(null, response);
        });        
    });
};

exports.putEventsById = function (req, res) {
    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);
        
        db.collection(default_db_collection).updateOne({ eventId : req.params.eventId }, { $set: { eventId : req.params.eventId, eventName : req.params.eventName, eventDescription : req.params.eventDescription, eventReleaseDate : req.params.eventReleaseDate, eventNominationStartDate : req.params.eventNominationStartDate, eventNominationEndDate : req.params.eventNominationEndDate, eventStartDate : req.params.eventStartDate, eventEndDate : req.params.eventEndDate, eventDemoDate : req.params.eventDemoDate, eventFinaleDate : req.params.eventFinaleDate, eventScoring : req.params.eventScoring, eventScoringMaxTotal : req.params.eventScoringMaxTotal } }, function (err, response) {
            console.log("Updated");                
            return res(null, response);
        });                
    });
};

exports.getEventsById = function (req, res) {
    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);

        db.collection(default_db_collection).findOne({"eventId":parseInt(req.params.eventId)}, function(err, result) {
            if (err) throw err;
            console.log(result);       
            return res(null, result)     
        });
        client.close(); 
    }); 
};

exports.getAllEvents = function (req, res) {    
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

exports.getLiveEvents = function (req, res) {   
    
    var isoDateString = new Date().toISOString()

    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);        

        db.collection(default_db_collection).find({ $and: [ { "eventNominationStartDate": { $lte: new Date(isoDateString) } }, { "eventFinaleDate": { $gte:  new Date(isoDateString) } }, { "eventEnabled" : true } ] }).sort({"eventStartDate":1}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            return res(null, result)                
        });
        client.close();
    }); 
};

exports.getUpcomingEvents = function (req, res) { 
    
    var isoDateString = new Date().toISOString()

    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);

        db.collection(default_db_collection).find({ $and: [ { "eventNominationStartDate": { $gt: new Date(isoDateString) } }, { "eventEnabled" : true } ]}).sort({"eventNominationStartDate":1}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            return res(null, result)                
        });
        client.close();
    }); 
};

exports.getPreviousEvents = function (req, res) {  
    
    var isoDateString = new Date().toISOString()        

    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);

        db.collection(default_db_collection).find({ $and: [ { "eventFinaleDate": { $lt: new Date(isoDateString) } }, { "eventEnabled" : true } ]}).sort({"eventNominationStartDate":1}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            return res(null, result)                
        });
        client.close();
    }); 
};

exports.putLikesByEventsId = function (req, res) {        
    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);        
        
        db.collection(default_db_collection).find({ "eventId": parseInt(req.params.eventId) }).sort({ "eventLikesCount": 1}).toArray(function (err, response) {      
                        
            var likeCount = parseInt(response[0]["eventLikesCount"]);            
            
            if (req.url.indexOf('/like/') >= 0) {
                likeCount++
            } else {
                likeCount--
            }            

            db.collection(default_db_collection).updateOne({ "eventId" : parseInt(req.params.eventId) }, { $set: { "eventLikesCount" : likeCount } }, function (err, response) {
                console.log("Updated");                
                return res(null, response);
            });
        })      
    });
};

// exports.getAllLocationsByLatLngRad = function (req, res) {
//     pool.getConnection(function (err, connection) {
//         if (err) {
//             connection.release();
//             res.json({ "code": 503, "status": "Error connecting to database.. :(" });
//             return;
//         }
//         console.log('\nConnected as Thread Id: ' + connection.threadId);

//         console.log('Attempting to get location info : ' +  + req.params.centreLat + " " + req.params.centreLng + " " + req.params.boundingRadius);

//         connection.query("CALL spGetAllLocationsByLatLngRad(" + connection.escape(req.params.centreLat) + ", " + connection.escape(req.params.centreLng) + ", " + connection.escape(req.params.boundingRadius) + ");", function(err, rows){          
//             connection.release();            
//             if(!err) {                                
//                 var response = JSON.stringify(rows[0]); 
//                 return res(null,response); 
//             }
//         });

//         // connection.query("select location_lat, location_lng from location;", function (err, rows) {
//         //     connection.release();
//         //     if (!err) {
//         //         var response = JSON.stringify(rows[0]);
//         //         return res(null, response);
//         //     }
//         // });

//         connection.on('error', function (err) {
//             var error = { "code": 503, "status": "Error connecting to database.. :(" };
//             return error;
//         });
//     });
// };

// exports.getCoveredLocations = function (req, res) {
//     pool.getConnection(function (err, connection) {
//         if (err) {
//             connection.release();
//             res.json({ "code": 503, "status": "Error connecting to database.. :(" });
//             return;
//         }
//         console.log('\nConnected as Thread Id: ' + connection.threadId);

//         console.log('Attempting to get location info : Covered Locations');

//         connection.query("SELECT location_area, location_city FROM `location` limit 3;", function(err, rows){          
//             connection.release();            
//             if(!err) {                                
//                 var response = JSON.stringify(rows); 
//                 return res(null,response); 
//             }
//         });

//         connection.on('error', function (err) {
//             var error = { "code": 503, "status": "Error connecting to database.. :(" };
//             return error;
//         });
//     });
// };