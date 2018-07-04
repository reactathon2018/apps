var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var voteSchema = new Schema({
  isUpvote: {
    type: Boolean,
    required: true
  },
  solution_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Solution',
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});
var Model = mongoose.model('Vote', voteSchema);
module.exports = Model;
