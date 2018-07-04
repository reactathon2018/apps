const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const hackSchema = new Schema({
    name: String,
    src: String,
    adminname: String,
    location: String,
    org: String,
    lang: String,
    starttime: String,
    endtime: String
});

module.exports = mongoose.model('hackathon', hackSchema);
