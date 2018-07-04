const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Name field is required']
    },
    password: {
        type: String,
        required: [true, 'Password field is required']
    },
    role: {
        type: String,
        required: [true, 'Role field is required']
    },
    isactive: {
      type: Boolean,
      default: true
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
