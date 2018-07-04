var teamsRepo = require('../data/teams');

exports.postTeams = function (req, res) {
    console.log("\nTeams Service Contacted...");  
    try {
        if(typeof req.params.teamId == 'undefined' || typeof req.params.teamName == 'undefined' || typeof req.params.teamDescription == 'undefined' || typeof req.params.teamParticipants == 'undefined'|| typeof req.params.teamEventId == 'undefined' || typeof req.params.isTeamActive == 'undefined' || typeof req.params.teamScore == 'undefined' || typeof req.params.teamScoreMaxTotal == 'undefined' || typeof req.params.teamRecognition == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Teams Id : " + req.params) //.teamId + " Vendor Id : " + req.params.parking_vendor_id + " Location Id : " + req.params.parking_loc_id + " Tariff Id : " + req.params.parking_tariff_id + " Total Slots : " + req.params.parking_slots + " From Time : " + req.params.parking_from_time + " To Time : " + req.params.parking_to_time + " Workdays Id : " + req.params.parking_workdays_id + " Managed Status : " + req.params.parking_managed_status);
        teamsRepo.postTeams(req, function (err, result) {            
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
        console.log("Teams Over and out..");
    }
};

exports.deleteTeamsById = function (req, res) {
    console.log("\nTeams Service Contacted...");  
    try {
        if(typeof req.params.teamId == 'undefined' || typeof req.params.userEmpId == 'undefined' || typeof req.params.userPassword == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Teams Id : " + req.params.teamId + " User Id : " + req.params.userEmpId);
        teamsRepo.deleteTeamsById(req, function (err, result) {            
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
        console.log("Teams Over and out..");
    }
};

exports.putTeamsById = function (req, res) {
    console.log("\nTeams Service Contacted...");  
    try {
        if(typeof req.params.teamId == 'undefined' || typeof req.params.teamName == 'undefined' || typeof req.params.teamDescription == 'undefined' || typeof req.params.teamParticipants == 'undefined'|| typeof req.params.teamEventId == 'undefined' || typeof req.params.isTeamActive == 'undefined' || typeof req.params.teamScore == 'undefined' || typeof req.params.teamScoreMaxTotal == 'undefined' || typeof req.params.teamRecognition == 'undefined') {
            return res.status(400).end();
        }   

        console.log("Service Request Teams Id : " + req.params) //.parkingid + " Vendor Id : " + req.params.vendorid + " Teams Name : " + req.params.parkingname + " Location Id : " + req.params.locationid + " Tariff Id : " + req.params.tariffid + " Total Slots : " + req.params.totalslots + " From Time : " + req.params.fromtime + " To Time : " + req.params.totime + " Workdays Id : " + req.params.workdaysid + " Managed Status : " + req.params.managedstatus);
       
        teamsRepo.putTeamsById(req, function (err, result) {            
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
        console.log("Teams Over and out..");
    }
};

exports.getTeamsById = function (req, res) {
    console.log("\nTeams Service Contacted...");  
    try {
        if(typeof req.params.teamId == 'undefined') {
            return res.status(400).end();
        }   

        console.log("Service Request Teams Id : " + req.params.teamId);
       
        teamsRepo.getTeamsById(req, function (err, result) {            
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
        console.log("Teams Over and out..");
    }
};

exports.getAllTeams = function (req, res) {
    console.log("\nTeams Service Contacted...");
    try {
        if (!req) {
            return res.status(400).end();
        }
        console.log("Service Request Event Id : all");
        teamsRepo.getAllTeams(req, function (err, result) {
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
        console.log("Teams Over and out..");
    }
};

exports.getTeamsByEventId = function (req, res) {
    console.log("\nTeams Service Contacted...");  
    try {
        if(typeof req.params.teamEventId == 'undefined') {
            return res.status(400).end();
        }   

        console.log("Service Request Teams Id : " + req.params.teamEventId + " Record Limit : " + req.params.recordsLimit);
       
        teamsRepo.getTeamsByEventId(req, function (err, result) {            
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
        console.log("Teams Over and out..");
    }
};

// exports.getVendorParkingIdByLatLng = function (req, res) {
//     console.log("\nTeams Service Contacted...");  
//     try {
//         if(typeof req.params.locationlat == 'undefined' || typeof req.params.locationlng == 'undefined') {
//             return res.status(400).end();
//         }   

//         console.log("Service Request Location markers : " + req.params.locationlat + " " + req.params.locationlng);
       
//         teamsRepo.getVendorParkingIdByLatLng(req, function (err, result) {            
//             if(err) {
//                 console.log("Error: 500, returned " + err);
//                 return res.status(500).end();                
//             }
//             if(!result) {
//                 console.log("Error: 404, returned " + result);
//                 return res.status(404).end();
//             }
//             if(result) {
//                 console.log("Status: Success | Status Code: 200 | " + result);
//                 return res.status(200).set('Content-Type', 'application/json').send(result).end();
//             }
//         });
//     }
//     catch(err) {
//         console.log("Error 500 - Caught an exception - " + err);
//         return res.status(500).end();
//     }
//     finally {    
//         console.log("Teams Over and out..");
//     }
// };

// exports.getAvailabilityParkingByLatLng = function (req, res) {
//     console.log("\nTeams Service Contacted...");  
//     try {
//         if(typeof req.params.locationlat == 'undefined' || typeof req.params.locationlng == 'undefined') {
//             return res.status(400).end();
//         }   

//         console.log("Service Request Location markers : " + req.params.locationlat + " " + req.params.locationlng);
       
//         teamsRepo.getAvailabilityParkingByLatLng(req, function (err, result) {            
//             if(err) {
//                 console.log("Error: 500, returned " + err);
//                 return res.status(500).end();                
//             }
//             if(!result) {
//                 console.log("Error: 404, returned " + result);
//                 return res.status(404).end();
//             }
//             if(result) {
//                 console.log("Status: Success | Status Code: 200 | " + result);
//                 return res.status(200).set('Content-Type', 'application/json').send(result).end();
//             }
//         });
//     }
//     catch(err) {
//         console.log("Error 500 - Caught an exception - " + err);
//         return res.status(500).end();
//     }
//     finally {    
//         console.log("Teams Over and out..");
//     }
// };