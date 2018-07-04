var env = 'production',
    config = require('./config')[env],
    mongoose = require('mongoose');

module.exports = function () {
    var db = mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("Connected to mongodb")
    });

    return db;
};
