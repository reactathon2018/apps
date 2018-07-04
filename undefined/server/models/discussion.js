var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var discussionSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    question: {
        type: String,
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        required: false
    }]
});
var Model = mongoose.model('Discussion', discussionSchema);
module.exports = Model;
