var mongoose = require('mongoose');
var EventSchema = new mongoose.Schema({
  name: String,
});

mongoose.model('events', EventSchema);

