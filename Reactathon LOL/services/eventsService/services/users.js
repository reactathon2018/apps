var usersRepo = require('../data/users');

exports.getAllUsers = function (req, res) {
    console.log("\nUser Service Contacted...");
    try {
        if(!req) {
            return res.status(400).end();
        }   
        console.log("Service Request Id : " + req);
        usersRepo.getAllUsers(req, function (err, result) {            
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
        console.log("getUserDetails Over and out..");
    }
};

exports.getUsersById = function (req, res) {
    console.log("\nUser Service Contacted...");
    try {
        if(!req.params.userEmpId) {
            return res.status(400).end();
        }        
        console.log("Service Request Id : " + req.params.userEmpId);
        usersRepo.getUsersById (req.params.userEmpId, function (err, result) {
            //console.log("Request returned some value. Res : " + res + " Result : " + result);
            if(err) {
                console.log("Error: 500, returned " + err);
                return res.status(500).end();                
            }
            if(!result) {
                console.log("Error: 404, returned " + result);
                return res.status(404).end();                
            }          
            console.log("Status: Success | Status Code: 200 | " + result);   
            return res.status(200).set('Content-Type', 'application/json').send(result).end();      
        });
    }
    catch(err) {
        console.log("Error 500 - Caught an exception - " + err);
        return res.status(500).end();
    }
    finally {
        console.log("getUserDetailsById Over and out..");
    }
};

exports.postUsers = function (req, res) {
    console.log("\nUser Service Contacted...");  
    try {
        if(typeof req.params.username == 'undefined' || typeof req.params.phoneno == 'undefined' || typeof req.params.firstname == 'undefined' || typeof req.params.lastname == 'undefined' || typeof req.params.email == 'undefined' || typeof req.params.userpass == 'undefined' || typeof req.params.usertype == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Username : " + req.params.username + " Phone# : " + req.params.phoneno + " Firstname : " + req.params.firstname + " Lastname : " + req.params.lastname + " Email Id : " + req.params.email + " User Type : " + req.params.usertype);

        usersRepo.postUsers(req, function (err, result) {            
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
        console.log("users Over and out..");
    }
};

exports.deleteUsersById = function (req, res) {
    console.log("\nUser Service Contacted...");  
    try {
        if(typeof req.params.userid == 'undefined' || typeof req.params.userEmpId == 'undefined' || typeof req.params.userPassword == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.params.userid + " User UID : " + req.params.userEmpId);

        usersRepo.deleteUsersById(req, function (err, result) {            
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
        console.log("users Over and out..");
    }
};

exports.putUsersById = function (req, res) {
    console.log("\nUser Service Contacted...");  
    try {
        if(typeof req.params.userid == 'undefined' || typeof req.params.username == 'undefined' || typeof req.params.phoneno == 'undefined' || typeof req.params.firstname == 'undefined' || typeof req.params.lastname == 'undefined' || typeof req.params.email == 'undefined' || typeof req.params.userpass == 'undefined' || typeof req.params.usertype == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.params.userid +" Username : " + req.params.username + " Phone# : " + req.params.phoneno + " Firstname : " + req.params.firstname + " Lastname : " + req.params.lastname + " Email Id : " + req.params.email + " User Type : " + req.params.usertype);

        usersRepo.putUsersById(req, function (err, result) {            
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
        console.log("users Over and out..");
    }
};

exports.getMostAwardedUser = function (req, res) {
    console.log("\nUser Service Contacted...");
    try {
        if(!req.params.recordsLimit) {
            return res.status(400).end();
        }        
        console.log("Service Request Id : MostAwardedUser; Records Limit - " + req.params.recordsLimit);
        usersRepo.getMostAwardedUser (req.params.recordsLimit, function (err, result) {
            //console.log("Request returned some value. Res : " + res + " Result : " + result);
            if(err) {
                console.log("Error: 500, returned " + err);
                return res.status(500).end();                
            }
            if(!result) {
                console.log("Error: 404, returned " + result);
                return res.status(404).end();                
            }          
            console.log("Status: Success | Status Code: 200 | " + result);   
            return res.status(200).set('Content-Type', 'application/json').send(result).end();      
        });
    }
    catch(err) {
        console.log("Error 500 - Caught an exception - " + err);
        return res.status(500).end();
    }
    finally {
        console.log("Users Over and out..");
    }
};

exports.getMostBadgesPerUser = function (req, res) {
    console.log("\nUser Service Contacted...");
    try {
        if(!req.params.recordsLimit) {
            return res.status(400).end();
        }        
        console.log("Service Request Id : MostBadgesPerUser; Records Limit - " + req.params.recordsLimit);
        usersRepo.getMostBadgesPerUser (req.params.recordsLimit, function (err, result) {
            //console.log("Request returned some value. Res : " + res + " Result : " + result);
            if(err) {
                console.log("Error: 500, returned " + err);
                return res.status(500).end();                
            }
            if(!result) {
                console.log("Error: 404, returned " + result);
                return res.status(404).end();                
            }          
            console.log("Status: Success | Status Code: 200 | " + result);   
            return res.status(200).set('Content-Type', 'application/json').send(result).end();      
        });
    }
    catch(err) {
        console.log("Error 500 - Caught an exception - " + err);
        return res.status(500).end();
    }
    finally {
        console.log("Users Over and out..");
    }
};

// exports.getUserDetailsByUserType = function (req, res) {
//     console.log("\nUser Service Contacted...");  
//     try {
//         if(typeof req.params.usertype == 'undefined') {
//             return res.status(400).end();
//         }   
//         console.log("Service Request User Type : " + req.params.usertype);

//         usersRepo.getUserDetailsByUserType(req, function (err, result) {            
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
//         console.log("users Over and out..");
//     }
// };