var eventsRepo = require('../data/events');

exports.postEvents = function (req, res) {
    console.log("\nEvents Service Contacted...");
    try {
        if (!req.params.eventId || !req.params.eventName || !req.params.eventDescription || !req.params.eventReleaseDate || !req.params.eventNominationStartDate || !req.params.eventNominationEndDate || !req.params.eventStartDate || !req.params.eventEndDate || !req.params.eventDemoDate || !req.params.eventFinaleDate || !req.params.eventEnabled || !req.params.eventScoring || !req.params.eventScoringMaxTotal) {
            return res.status(400).end();
        }
        console.log("Service Request Events Address : " + req.params) //.loc_address + " Area : " + req.params.loc_area + " Landmark : " + req.params.loc_landmark + " City : " + req.params.loc_city);
        eventsRepo.postEvents(req, function (err, result) {
            if (err) {
                console.log("Error: 500, returned " + err);
                return res.status(500).end();
            }
            if (!result) {
                console.log("Error: 404, returned " + result);
                return res.status(404).end();
            }
            if (result) {
                console.log("Status: Success | Status Code: 200 | " + result);
                return res.status(200).set('Content-Type', 'application/json').send(result).end();
            }
        });
    }
    catch (err) {
        console.log("Error 500 - Caught an exception - " + err);
        return res.status(500).end();
    }
    finally {
        console.log("Events Over and out..");
    }
};

exports.deleteEventsById = function (req, res) {
    console.log("\nEvents Service Contacted...");
    try {
        if (!req.params.eventId || !req.params.userEmpId || !req.params.userPassword) {
            return res.status(400).end();
        }
        console.log("Service Request Events Id : " + req.params.eventId + " User Id : " + req.params.userEmpId);
        eventsRepo.deleteEventsById(req, function (err, result) {
            if (err) {
                console.log("Error: 500, returned " + err);
                return res.status(500).end();
            }
            if (!result) {
                console.log("Error: 404, returned " + result);
                return res.status(404).end();
            }
            if (result) {
                console.log("Status: Success | Status Code: 200 | " + result);
                return res.status(200).set('Content-Type', 'application/json').send(result).end();
            }
        });
    }
    catch (err) {
        console.log("Error 500 - Caught an exception - " + err);
        return res.status(500).end();
    }
    finally {
        console.log("Events Over and out..");
    }
};

exports.putEventsById = function (req, res) {
    console.log("\nEvents Service Contacted...");
    try {
        if (!req.params.eventId || !req.params.eventName || !req.params.eventDescription || !req.params.eventReleaseDate || !req.params.eventNominationStartDate || !req.params.eventNominationEndDate || !req.params.eventStartDate || !req.params.eventEndDate || !req.params.eventDemoDate || !req.params.eventFinaleDate || !req.params.eventEnabled || !req.params.eventScoring || !req.params.eventScoringMaxTotal) {
            return res.status(400).end();
        }
        console.log("Service Request Events Id : " + req.params) //.locationid + " Address : " + req.params.loc_address + " Area : " + req.params.loc_area + " Landmark : " + req.params.loc_landmark + " City : " + req.params.loc_city);
        eventsRepo.putEventsById(req, function (err, result) {
            if (err) {
                console.log("Error: 500, returned " + err);
                return res.status(500).end();
            }
            if (!result) {
                console.log("Error: 404, returned " + result);
                return res.status(404).end();
            }
            if (result) {
                console.log("Status: Success | Status Code: 200 | " + result);
                return res.status(200).set('Content-Type', 'application/json').send(result).end();
            }
        });
    }
    catch (err) {
        console.log("Error 500 - Caught an exception - " + err);
        return res.status(500).end();
    }
    finally {
        console.log("Events Over and out..");
    }
};

exports.getEventsById = function (req, res) {
    console.log("\nEvents Service Contacted...");
    try {
        if (!req.params.eventId) {
            return res.status(400).end();
        }
        console.log("Service Request Events Id : " + req.params.eventId);
        eventsRepo.getEventsById(req, function (err, result) {
            if (err) {
                console.log("Error: 500, returned " + err);
                return res.status(500).end();
            }
            if (!result) {
                console.log("Error: 404, returned " + result);
                return res.status(404).end();
            }
            if (result) {
                console.log("Status: Success | Status Code: 200 | " + result);
                return res.status(200).set('Content-Type', 'application/json').send(result).end();
            }
        });
    }
    catch (err) {
        console.log("Error 500 - Caught an exception - " + err);
        return res.status(500).end();
    }
    finally {
        console.log("Events Over and out..");
    }
};

exports.getAllEvents = function (req, res) {
    console.log("\nEvents Service Contacted...");
    try {
        if (!req) {
            return res.status(400).end();
        }
        console.log("Service Request Event Id : all");
        eventsRepo.getAllEvents(req, function (err, result) {
            if (err) {
                console.log("Error: 500, returned " + err);
                return res.status(500).end();
            }
            if (!result) {
                console.log("Error: 404, returned " + result);
                return res.status(404).end();
            }
            if (result) {
                console.log("Status: Success | Status Code: 200 | " + result);
                return res.status(200).set('Content-Type', 'application/json').send(result).end();
            }
        });
    }
    catch (err) {
        console.log("Error 500 - Caught an exception - " + err);
        return res.status(500).end();
    }
    finally {
        console.log("Events Over and out..");
    }
};

// Live Events - db.events.find({ $and: [ { "eventNominationStartDate": { $gt: ISODate() } }, { "eventFinaleDate": { $lt: ISODate() } }, { "eventEnabled" : true } ] })
exports.getLiveEvents = function (req, res) {
    console.log("\nEvents Service Contacted...");
    try {        
        if (!req) {
            return res.status(400).end();
        }
        console.log("Service Request Events Id : Live");
        eventsRepo.getLiveEvents(req, function (err, result) {
            if (err) {
                console.log("Error: 500, returned " + err);
                return res.status(500).end();
            }
            if (!result) {
                console.log("Error: 404, returned " + result);
                return res.status(404).end();
            }
            if (result) {
                console.log("Status: Success | Status Code: 200 | " + result);
                return res.status(200).set('Content-Type', 'application/json').send(result).end();
            }
        });
    }
    catch (err) {
        console.log("Error 500 - Caught an exception - " + err);
        return res.status(500).end();
    }
    finally {
        console.log("Events Over and out..");
    }
};

// Upcoming Events - db.events.find({ $and: [ { "eventNominationStartDate": { $gt: new Date(isoDateString) } }, { "eventEnabled" : true } ]})
exports.getUpcomingEvents = function (req, res) {
    console.log("\nEvents Service Contacted...");
    try {
        if (!req) {
            return res.status(400).end();
        }
        console.log("Service Request Events Id : Upcoming");
        eventsRepo.getUpcomingEvents(req, function (err, result) {
            if (err) {
                console.log("Error: 500, returned " + err);
                return res.status(500).end();
            }
            if (!result) {
                console.log("Error: 404, returned " + result);
                return res.status(404).end();
            }
            if (result) {
                console.log("Status: Success | Status Code: 200 | " + result);
                return res.status(200).set('Content-Type', 'application/json').send(result).end();
            }
        });
    }
    catch (err) {
        console.log("Error 500 - Caught an exception - " + err);
        return res.status(500).end();
    }
    finally {
        console.log("Events Over and out..");
    }
};

// Previous Events - db.events.find({ $and: [ { "eventFinaleDate": { $lt: new Date(isoDateString) } }, { "eventEnabled" : true } ]})
exports.getPreviousEvents = function (req, res) {
    console.log("\nEvents Service Contacted...");
    try {
        if (!req) {
            return res.status(400).end();
        }
        console.log("Service Request Events Id : Previous");
        eventsRepo.getPreviousEvents(req, function (err, result) {
            if (err) {
                console.log("Error: 500, returned " + err);
                return res.status(500).end();
            }
            if (!result) {
                console.log("Error: 404, returned " + result);
                return res.status(404).end();
            }
            if (result) {
                console.log("Status: Success | Status Code: 200 | " + result);
                return res.status(200).set('Content-Type', 'application/json').send(result).end();
            }
        });
    }
    catch (err) {
        console.log("Error 500 - Caught an exception - " + err);
        return res.status(500).end();
    }
    finally {
        console.log("Events Over and out..");
    }
};

exports.putLikesByEventsId = function (req, res) {
    console.log("\nEvents Service Contacted...");  
    try {
        if(typeof req.params.eventId == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Events Id : " + req.params.eventId);

        eventsRepo.putLikesByEventsId(req, function (err, result) {            
            if(err) {
                console.log("Error: 500, returned " + err);
                return res.status(500).end();                
            }
            if(!result) {
                console.log("Error: 404, returned " + result);
                return res.status(404).end();
            }
            if(result) {
                console.log("Status: Success | Status Code: 200 | " + result);
                return res.status(200).set('Content-Type', 'application/json').send(result).end();
            }
        });
    }
    catch(err) {
        console.log("Error 500 - Caught an exception - " + err);
        return res.status(500).end();
    }
    finally {    
        console.log("Events Over and out..");
    }
};

// exports.getAllLocationsByLatLngRad = function (req, res) {
//     console.log("\nEvents Service Contacted...");
//     try {
//         if (!req.params.centreLat || !req.params.centreLng || !req.params.boundingRadius) {
//             return res.status(400).end();
//         }
//         console.log("Service Request Events Id : " + req.params.centreLat + " " + req.params.centreLng + " " + req.params.boundingRadius);
//         eventsRepo.getAllLocationsByLatLngRad(req, function (err, result) {
//             if (err) {
//                 console.log("Error: 500, returned " + err);
//                 return res.status(500).end();
//             }
//             if (!result) {
//                 console.log("Error: 404, returned " + result);
//                 return res.status(404).end();
//             }
//             if (result) {
//                 console.log("Status: Success | Status Code: 200 | " + result);
//                 return res.status(200).set('Content-Type', 'application/json').send(result).end();
//             }
//         });
//     }
//     catch (err) {
//         console.log("Error 500 - Caught an exception - " + err);
//         return res.status(500).end();
//     }
//     finally {
//         console.log("Events Over and out..");
//     }
// };

// exports.getCoveredLocations = function (req, res) {
//     console.log("\nEvents Service Contacted...");
//     try {
//         if (!req) {
//             return res.status(400).end();
//         }
//         console.log("Service Request Events : Covered Locations");
//         eventsRepo.getCoveredLocations(req, function (err, result) {
//             if (err) {
//                 console.log("Error: 500, returned " + err);
//                 return res.status(500).end();
//             }
//             if (!result) {
//                 console.log("Error: 404, returned " + result);
//                 return res.status(404).end();
//             }
//             if (result) {
//                 console.log("Status: Success | Status Code: 200 | " + result);
//                 return res.status(200).set('Content-Type', 'application/json').send(result).end();
//             }
//         });
//     }
//     catch (err) {
//         console.log("Error 500 - Caught an exception - " + err);
//         return res.status(500).end();
//     }
//     finally {
//         console.log("Events Over and out..");
//     }
// };