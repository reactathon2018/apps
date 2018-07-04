var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var jobSchema = mongoose.Schema({

    title      : String,
    desc       : String,

});

// methods ======================NOT used in Job - Nazer
// // generating a hash

// userSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
// };

// // checking if password is valid
// userSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };

 // create the model for users and expose it to our app
 module.exports = mongoose.model('Job', jobSchema);
