var MongoClient = require('mongodb').MongoClient,
    config = require('../config');

var db_url = config.get('db.protocol') + '://' + config.get('db.host') + ':'+ config.get('db.port')
var db_database = config.get('db.database')
var default_db_collection = "users"

exports.getAllUsers = function (req, res) {
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

exports.getUsersById = function (req, res) {
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

        db.collection(default_db_collection).findOne({"userEmpId":parseInt(req)}, function(err, result) {
            if (err) throw err;
            console.log(result);       
            return res(null, result)     
        });
        client.close(); 
    }); 
};

exports.postUsers = function (req, res) {

    var commonQuery = { userEmpId : req.params.userEmpId, userVzid : req.params.userVzid, username : req.params.username, userFirstName : req.params.userFirstName, userLastName : req.params.userLastName, userEmailId : req.params.userEmailId, userOrgId : req.params.userOrgId, isAdmin : req.params.isAdmin, isUserActive : req.params.isUserActive, userRecognition : req.params.userRecognition }

    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);
        db.collection(default_db_collection).insertOne(commonQuery, function (err, response) {
            console.log("Inserted");                
            return res(null, response);
        });
    });
};

exports.deleteUsersById = function (req, res) {

    var commonQuery = { userEmpId : req.params.userEmpId }

    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);
        
        db.collection(default_db_collection).deleteOne(commonQuery, function (err, response) {
            console.log("Removed");
            return res(null, response);
        });        
    });
};

exports.putUsersById = function (req, res) {
    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);
        
        db.collection(default_db_collection).updateOne({ userEmpId : req.params.userEmpId }, { $set: { userEmpId : req.params.userEmpId, userVzid : req.params.userVzid, username : req.params.username, userFirstName : req.params.userFirstName, userLastName : req.params.userLastName, userEmailId : req.params.userEmailId, userOrgId : req.params.userOrgId, isAdmin : req.params.isAdmin, isUserActive : req.params.isUserActive, userRecognition : req.params.userRecognition } }, function (err, response) {
            console.log("Updated");                
            return res(null, response);
        });                
    });
};

exports.getMostBadgesPerUser = function (req, res) {   
    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);

        db.collection(default_db_collection).find().sort({"userRecognition.badgesCount": -1}).limit(parseInt(req)).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);       
            return res(null, result)     
        });
        client.close(); 
    }); 
};

exports.getMostAwardedUser = function (req, res) {  
    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);

        db.collection(default_db_collection).find().sort({"userRecognition.awardsCount": -1}).limit(parseInt(req)).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);       
            return res(null, result)     
        });
        client.close(); 
    }); 
};

// exports.getUserDetails = function(req, res) {
  
//     pool.getConnection(function(err, connection){
//         if (err) {
//             //connection.release();
//             //res.json({"code" : 503, "status" : "Error creating connection to database.. :("});
//             //return;
//             var error = { "code": 503, "status": "Error creating connection to database.. :(" + err};
//             return error;
//         } 

//         console.log('Connected as Thread Id: ' + connection.threadId);

//         connection.query("select * from user;", function(err, rows){          
//             connection.release();            
//             if(!err) {                                
//                 var response = JSON.stringify(rows[0]); 
//                 return res(null,response); 
//             }

//         /*connection.query("CALL spGetAllUserDetails();", function(err, fields, rows){          
//             connection.release();            
//             if(!err) {                                
//                 var response = JSON.stringify(fields) + JSON.stringify(rows[0]); 
//                 console.log("Response res - " + " F: " + fields + " R: " + response);
//                 //return res(null, response);
//                 return response; 
//             } */ 
//         });

//         connection.on('error', function(err) {      
//                 var error = {"code" : 503, "status" : "Error connecting to database.. :("};
//                 return error;     
//         });
//     });
// };

// exports.getUserDetailsById = function(req, res) {

//     console.log("Data Request Id: " + req);

//     pool.getConnection(function(err, connection){
//         // if (err) {
//         //     //connection.release();
//         //     var db_conn_error = JSON.stringify({"code" : 503, "status" : "Error connecting to database.. :("});
//         //     console.log(db_conn_error); 
//         //     return res(null, db_conn_error); 
//         // }   
//         if (err) {
//             // if(connection)
//             // {
//             //     connection.release();
//             // }
//             //res.json({"code" : 503, "status" : "Error creating connection to database.. :("});
//             //return;
//             var error = { "code": 503, "status": "Error creating connection to database.. " + err };
//             return res(null,error.status);
//         } 
//         console.log('Connected as Thread Id: ' + connection.threadId);

//         connection.query("CALL spGetUserDetailsById(" + connection.escape(req) + ");", function(err, rows){          
//             connection.release();            
//             if(!err) {                                
//                 var response = JSON.stringify(rows[0]); 
//                 //console.log("Response res - " + response);
//                 return res(null, response); 
//             }           
//         });

//         connection.on('error', function(err) {      
//             var error = { "code": 503, "status": "Error creating connection to database.. " + err };
//             return res(null,error.status); 
//         });
//     });
// };

// exports.addUserDetails = function(req, res) {

//     console.log("Data Request Id: " + req);

//     pool.getConnection(function(err, connection){
//         if (err) {
//             connection.release();
//             res.json({"code" : 503, "status" : "Error connecting to database.. :("});
//             return;
//         }   

//         console.log('Connected as Thread Id: ' + connection.threadId);

//         console.log("CALL spAddUserDetails(" + connection.escape(req.params.username) + "," + connection.escape(req.params.phoneno) + "," + connection.escape(req.params.firstname) + "," + connection.escape(req.params.lastname) + "," + connection.escape(req.params.email) + "," + connection.escape(req.params.userpass) + "," + connection.escape(req.params.usertype) + ");");

//         connection.query("CALL spAddUserDetails(" + connection.escape(req.params.username) + "," + connection.escape(req.params.phoneno) + "," + connection.escape(req.params.firstname) + "," + connection.escape(req.params.lastname) + "," + connection.escape(req.params.email) + "," + connection.escape(req.params.userpass) + "," + connection.escape(req.params.usertype) + ");", function(err, rows){          
//             connection.release();            
//             if(!err) {                                
//                 var response = JSON.stringify(rows[0]); 
//                 return res(null, response); 
//             }           
//         });

//         connection.on('error', function(err) {      
//                 res.json({"code" : 503, "status" : "Error connecting to database.. :("});
//                 return;     
//         });
//     });
// };

// exports.deleteUserDetails = function(req, res) {

//     console.log("Data Request Id: " + req);

//     pool.getConnection(function(err, connection){
//         if (err) {
//             connection.release();
//             res.json({"code" : 503, "status" : "Error connecting to database.. :("});
//             return;
//         }   

//         console.log('Connected as Thread Id: ' + connection.threadId);

//         console.log("CALL spDeleteUserDetails(" + connection.escape(req.params.userid) + "," + connection.escape(req.params.userEmpId) + ");");

//         connection.query("CALL spDeleteUserDetails(" + connection.escape(req.params.userid) + "," + connection.escape(req.params.userEmpId) + "," + connection.escape(req.params.userPassword) + ");", function(err, rows){          
//             connection.release();            
//             if(!err) {                                
//                 var response = JSON.stringify(rows[0]); 
//                 return res(null, response); 
//             }           
//         });

//         connection.on('error', function(err) {      
//                 res.json({"code" : 503, "status" : "Error connecting to database.. :("});
//                 return;     
//         });
//     });
// };

// exports.updateUserDetails = function(req, res) {

//     console.log("Data Request Id: " + req);

//     pool.getConnection(function(err, connection){
//         if (err) {
//             connection.release();
//             res.json({"code" : 503, "status" : "Error connecting to database.. :("});
//             return;
//         }   

//         console.log('Connected as Thread Id: ' + connection.threadId);

//         console.log("CALL spUpdateUserDetails(" + connection.escape(req.params.userid) + "," + connection.escape(req.params.username) + "," + connection.escape(req.params.phoneno) + "," + connection.escape(req.params.firstname) + "," + connection.escape(req.params.lastname) + "," + connection.escape(req.params.email) + "," + connection.escape(req.params.userpass) + "," + connection.escape(req.params.usertype) + ");");

//         connection.query("CALL spUpdateUserDetails(" + connection.escape(req.params.userid) + "," + connection.escape(req.params.username) + "," + connection.escape(req.params.phoneno) + "," + connection.escape(req.params.firstname) + "," + connection.escape(req.params.lastname) + "," + connection.escape(req.params.email) + "," + connection.escape(req.params.userpass) + "," + connection.escape(req.params.usertype) + ");", function(err, rows){          
//             connection.release();            
//             if(!err) {                                
//                 var response = JSON.stringify(rows[0]); 
//                 return res(null, response); 
//             }           
//         });

//         connection.on('error', function(err) {      
//                 res.json({"code" : 503, "status" : "Error connecting to database.. :("});
//                 return;     
//         });
//     });
// };

// exports.getUserDetailsByUserType = function(req, res) {

//     console.log("Data Request Id: " + req);

//     pool.getConnection(function(err, connection){
//         if (err) {
//             //connection.release();
//             res.json({"code" : 503, "status" : "Error connecting to database.. :("});
//             return;
//         }   

//         console.log('Connected as Thread Id: ' + connection.threadId);

//         console.log("CALL spGetUserDetailsByUserType(" + connection.escape(req.params.usertype) + ");");

//         connection.query("CALL spGetUserDetailsByUserType(" + connection.escape(req.params.usertype) + ");", function(err, rows){          
//             connection.release();            
//             if(!err) {                                
//                 var response = JSON.stringify(rows[0]); 
//                 return res(null, response); 
//             }           
//         });

//         connection.on('error', function(err) {      
//                 res.json({"code" : 503, "status" : "Error connecting to database.. :("});
//                 return;     
//         });
//     });
// };