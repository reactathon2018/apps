var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var solutionSchema = new Schema({
    hackathon_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hackathon',
        required: true
    },
    team_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    },
    solution: {
        type: String,
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        required: false
    }]
});
var Model = mongoose.model('Solution', solutionSchema);
module.exports = Model;
