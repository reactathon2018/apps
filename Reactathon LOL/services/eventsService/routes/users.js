var router = require('express').Router(),
    service = require('../services/users');

router.get('/all', service.getAllUsers);

router.get('/:userEmpId', service.getUsersById);

router.post('/:userEmpId/:userVzid/:username/:userFirstName/:userLastName/:userEmailId/:userOrgId:/isAdmin:/isUserActive:/userRecognition', service.postUsers);

router.delete('/:userEmpId/:userEmpId/:userPassword', service.deleteUsersById);

router.put('/:userEmpId/:userVzid/:username/:userFirstName/:userLastName/:userEmailId/:userOrgId:/isAdmin:/isUserActive:/userRecognition', service.putUsersById);

// router.get('/type/:usertype', service.getUserDetailsByUserType);

router.get('/mostAwarded/:recordsLimit', service.getMostAwardedUser);

router.get('/mostBadges/:recordsLimit', service.getMostBadgesPerUser);

module.exports = router;