const mongoose = require('mongoose')

let EventSchema = new mongoose.Schema(
    {
        event_id: String,
        event_name: String,
        event_description: String,
        event_img: String,
        participant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);

EventSchema.methods.addEvent = function (event_id) {
    this.event_id = event_id
    return this.save()
}
EventSchema.methods.getUserEvent = function (_id) {
    Event.find({'event_id': _id}).then((event) => {
        return event
    })
}
module.exports = mongoose.model('Event', EventSchema)