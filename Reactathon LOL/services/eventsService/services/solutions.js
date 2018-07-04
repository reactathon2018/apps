var solutionsRepo = require('../data/solutions');

exports.getAllSolutions = function (req, res) {
    console.log("\nSolutions Service Contacted...");
    try {
        if(!req) {
            return res.status(400).end();
        }   
        console.log("Service Request Id : " + req);
        solutionsRepo.getAllSolutions(req, function (err, result) {            
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
        console.log("Solutions Over and out..");
    }
};

exports.getSolutionsById = function (req, res) {
    console.log("\nSolutions Service Contacted...");
    try {
        if(!req.params.solutionId) {
            return res.status(400).end();
        }        
        console.log("Service Request Id : " + req.params.solutionId);
        solutionsRepo.getSolutionsById (req.params.solutionId, function (err, result) {
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
        console.log("Solutions Over and out..");
    }
};

exports.postSolutions = function (req, res) {
    console.log("\nSolutions Service Contacted...");  
    try {
        if (typeof req.params.solutionId == 'undefined' || typeof req.params.solutionName == 'undefined' || typeof req.params.solutionDescription == 'undefined' || typeof req.params.solutionLongDescription == 'undefined' || typeof req.params.solutionSubmissionDate == 'undefined' || typeof req.params.solutionSubmittedByUserEmpId == 'undefined' || typeof req.params.solutionLikes == 'undefined' || typeof req.params.solutionKeywords == 'undefined' || typeof req.params.solutionUploadPath == 'undefined' || typeof req.params.solutionEventId == 'undefined' || typeof req.params.solutionOrgId == 'undefined' ) {      
            return res.status(400).end();
        } 
        console.log("Service Request Solution : " + req.params) //.username + " Phone# : " + req.params.phoneno + " Firstname : " + req.params.firstname + " Lastname : " + req.params.lastname + " Email Id : " + req.params.email + " User Type : " + req.params.usertype);

        solutionsRepo.postSolutions(req, function (err, result) {            
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
        console.log("Solutions Over and out..");
    }
};

exports.deleteSolutionsById = function (req, res) {
    console.log("\nSolutions Service Contacted...");  
    try {
        if(typeof req.params.solutionId == 'undefined' || typeof req.params.userEmpId == 'undefined' || typeof req.params.userPassword == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Solutions Id : " + req.params.solutionId + " User UID : " + req.params.userEmpId);

        solutionsRepo.deleteSolutionsById(req, function (err, result) {            
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
        console.log("Solutions Over and out..");
    }
};

exports.putSolutionsById = function (req, res) {
    console.log("\nSolutions Service Contacted...");  
    try {
        if (typeof req.params.solutionId == 'undefined' || typeof req.params.solutionName == 'undefined' || typeof req.params.solutionDescription == 'undefined' || typeof req.params.solutionLongDescription == 'undefined' || typeof req.params.solutionSubmissionDate == 'undefined' || typeof req.params.solutionSubmittedByUserEmpId == 'undefined' || typeof req.params.solutionLikes == 'undefined' || typeof req.params.solutionKeywords == 'undefined' || typeof req.params.solutionUploadPath == 'undefined' || typeof req.params.solutionEventId == 'undefined' || typeof req.params.solutionOrgId == 'undefined' ) {      
            return res.status(400).end();
        }   
        console.log("Service Request Solutions Id : " + req.params) //.userid +" Username : " + req.params.username + " Phone# : " + req.params.phoneno + " Firstname : " + req.params.firstname + " Lastname : " + req.params.lastname + " Email Id : " + req.params.email + " User Type : " + req.params.usertype);

        solutionsRepo.putSolutionsById(req, function (err, result) {            
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
        console.log("Solutions Over and out..");
    }
};

exports.putLikesBySolutionsId = function (req, res) {
    console.log("\nSolutions Service Contacted...");  
    try {
        if(typeof req.params.solutionId == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Solution Id : " + req.params.solutionId);

        solutionsRepo.putLikesBySolutionsId(req, function (err, result) {            
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
        console.log("Solutions Over and out..");
    }
};

exports.getMostLikedSolutions = function (req, res) {
    console.log("\nSolutions Service Contacted...");
    try {
        if(!req.params.recordsLimit) {
            return res.status(400).end();
        }        
        console.log("Service Request Id : " + req.params.recordsLimit);
        solutionsRepo.getMostLikedSolutions (req.params.recordsLimit, function (err, result) {
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
        console.log("Solutions Over and out..");
    }
};