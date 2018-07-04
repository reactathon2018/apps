var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userEventMappingSchema = new Schema({
    userid: String,
    eventid : String
})

module.exports = mongoose.model('userEventMapping',userEventMappingSchema)