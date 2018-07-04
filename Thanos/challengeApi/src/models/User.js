// User.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for User
var User = new Schema({
  user: {
    empId: String,
    empname: String,
    empadd: String,
    empmobile: Number,
    emporg: String
  },
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);