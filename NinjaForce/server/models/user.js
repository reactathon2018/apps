var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email : String,
    password : String,
    organization : String
})

module.exports = mongoose.model('User',userSchema)