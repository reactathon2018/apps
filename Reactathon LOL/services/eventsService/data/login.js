var MongoClient = require('mongodb').MongoClient,
    config = require('../config');

var db_url = config.get('db.protocol') + '://' + config.get('db.host') + ':'+ config.get('db.port')
var db_database = config.get('db.database')
var default_db_collection = "users"

exports.getLoginVerified = function (req, res) {

    console.log("Data : " + req.params.userEmpId) // + " " + req.params.userPassword);
    
    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);
        
        db.collection(default_db_collection).findOne({ $and: [ { "userEmpId": parseInt(req.params.userEmpId) }, { "userPassword": req.params.userPassword } ] }, function(err, result) {
            if (err) throw err;              
            if (result == null) {
                console.log("Login unsuccessful...")
            }
            return res(null, result)     
        });
        client.close(); 
    }); 
};