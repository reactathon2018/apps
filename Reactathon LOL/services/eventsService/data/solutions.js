var MongoClient = require('mongodb').MongoClient,
    config = require('../config');

var db_url = config.get('db.protocol') + '://' + config.get('db.host') + ':'+ config.get('db.port')
var db_database = config.get('db.database')
var default_db_collection = "solutions"

exports.getAllSolutions = function (req, res) {
    // mc.connect(url, function (err, db) {
    //     console.log("Connected to server");
    //     var getItem = function (db, callback) {
    //         var collection = db.collection('users');
    //         collection.find({}).toArray(function (err, response) {
    //             console.log("Found some items");                
    //             return res(null, response);
    //         });
    //     }
    //     getItem(db, function () {
    //         db.close();
    //     });
    // });    
    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);

        db.collection(default_db_collection).find().toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            return res(null, result)
            client.close();
        });
    }); 
};

exports.getSolutionsById = function (req, res) {
    // mc.connect(url, function (err, db) {
    //     console.log("Connected to server");
    //     var getItem = function (db, callback) {
    //         var collection = db.collection('users');
    //         var commonQuery = { username : req.params.username }
    //         collection.find(commonQuery, function (err, response) {
    //             console.log("Fetched item");                
    //             return res(null, response);
    //         });
    //     }
    //     getItem(db, function () {
    //         db.close();
    //     });
    // });       
    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);        

        db.collection(default_db_collection).findOne({ "solutionId": parseInt(req) }, function(err, result) {
            if (err) throw err;
            console.log(result);       
            return res(null, result)     
        });
        client.close(); 
    }); 
};

exports.postSolutions = function (req, res) {

    var commonQuery = { solutionId : req.params.solutionId, solutionName : req.params.solutionName, solutionDescription : req.params.solutionDescription, solutionLongDescription : req.params.solutionLongDescription, solutionSubmissionDate : req.params.solutionSubmissionDate, solutionSubmittedByUserEmpId : req.params.solutionSubmittedByUserEmpId, solutionLikesCount : req.params.solutionLikesCount, solutionKeywords : req.params.solutionKeywords, solutionUploadPath : req.params.solutionUploadPath, solutionEventId : req.params.solutionEventId, solutionOrgId : req.params.solutionOrgId }

    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);
        db.collection(default_db_collection).insertOne(commonQuery, function (err, response) {
            console.log("Inserted");                
            return res(null, response);
        });
    });
};

exports.deleteSolutionsById = function (req, res) {

    var commonQuery = { solutionId : req.params.solutionId }

    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);
        
        db.collection(default_db_collection).deleteOne(commonQuery, function (err, response) {
            console.log("Removed");
            return res(null, response);
        });        
    });
};

exports.putSolutionsById = function (req, res) {
    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);
        
        db.collection(default_db_collection).updateOne({ solutionId : req.params.solutionId }, { $set: { solutionId : req.params.solutionId, solutionName : req.params.solutionName, solutionDescription : req.params.solutionDescription, solutionLongDescription : req.params.solutionLongDescription, solutionSubmissionDate : req.params.solutionSubmissionDate, solutionSubmittedByUserEmpId : req.params.solutionSubmittedByUserEmpId, solutionLikesCount : req.params.solutionLikesCount, solutionKeywords : req.params.solutionKeywords, solutionUploadPath : req.params.solutionUploadPath, solutionEventId : req.params.solutionEventId, solutionOrgId : req.params.solutionOrgId } }, function (err, response) {
            console.log("Updated");                
            return res(null, response);
        });                
    });
};

exports.putLikesBySolutionsId = function (req, res) {        
    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);        
        
        db.collection(default_db_collection).find({ "solutionId": parseInt(req.params.solutionId) }).sort({ "solutionLikes": 1}).toArray(function (err, response) {      
                        
            var likeCount = parseInt(response[0]["solutionLikesCount"]);            
            
            if (req.url.indexOf('/like/') >= 0) {
                likeCount++
            } else {
                likeCount--
            }            

            db.collection(default_db_collection).updateOne({ "solutionId" : parseInt(req.params.solutionId) }, { $set: { "solutionLikesCount" : likeCount } }, function (err, response) {
                console.log("Updated");                
                return res(null, response);
            });
        })      
    });
};

exports.getMostLikedSolutions = function (req, res) {    
    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);        

        db.collection(default_db_collection).find().sort({ "solutionLikesCount": -1}).limit(parseInt(req)).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);       
            return res(null, result)     
        });
        client.close(); 
    }); 
};