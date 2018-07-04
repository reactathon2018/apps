// // var mongodb = require('mongodb');
// var config = require('../config');

// var db_host = config.get('db.host');
// var db_port = config.get('db.port');
// var db_username = config.get('db.username');
// var db_password = config.get('db.password');
// var db_database = config.get('db.database');

// if (db_username != "" && db_password != "") {
//     console.log("\n\tdb_host : " + db_host + "\n\tdb_port : " + db_port + "\n\tdb_username : " + db_username + "\n\tdb_password : " + db_password + "\n\tdb_database : " + db_database + "\n");
//     var conn_string = "mongodb://" + db_username + ":" + db_password + "@" + db_host + ":" + db_port + "/" + db_database
//     console.log(conn_string)
// }
// else
// {
//     console.log("\n\tdb_host : " + db_host + "\n\tdb_port : " + db_port + "\n\tdb_database : " + db_database + "\n");
//     var conn_string = "mongodb://" + db_host + ":" + db_port + "/" + db_database
//     console.log(conn_string)
// }

// const MongoClient = require('mongodb').MongoClient;

// const db = MongoClient.connect(conn_string)

// console.log(JSON.stringify(db.collection("events").find()))

// // var pool = mysql.createPool({    
// //     host: db_host,
// //     user: db_username,
// //     password: db_password,
// //     database: db_database,
// // });

// module.exports = db;