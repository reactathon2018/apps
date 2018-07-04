var mongoose = require('mongoose');
var EventSchema = new mongoose.Schema({
  name: String,
  "eventId": {
      "type": "number",
      "required": true
    },
    "eventName": {
      "type": "string",
      "required": true
    },
    "regStart": {
      "type": "date",
      "required": true
    },
    "regEnd": {
      "type": "date",
      "required": true
    },
    "eventStart": {
      "type": "date",
      "required": true
    },
    "eventEnd": {
      "type": "date",
      "required": true
    },
    "bannerImage": {
      "type": "string"
    },
    "participantsLimit": {
      "type": "number",
      "required": true
    },
    "eventDescription": {
      "type": "string",
      "required": true
    },
    "eventRules": {
      "type": [
        "any"
      ]
    },
    "eventStatus": {
      "type": "string",
      "required": true
    },
    "expectedParticipants":{
        "type":"number"
    },
    "teamList": {
      "type": [
        "teams"
      ]
    }
});

mongoose.model('events', EventSchema);

