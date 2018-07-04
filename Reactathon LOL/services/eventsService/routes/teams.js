var router = require('express').Router(),
    service = require('../services/teams');

router.get('/all', service.getAllTeams);

router.post('/:teamId/:teamName/:teamDescription/:teamParticipants/:teamEventId/:isTeamActive/:teamScore/:teamScoreMaxTotal/:teamRecognition', service.postTeams);

router.delete('/:teamId/:userEmpId/:userPassword', service.deleteTeamsById);

router.put('/:teamId/:teamName/:teamDescription/:teamParticipants/:teamEventId/:isTeamActive/:teamScore/:teamScoreMaxTotal/:teamRecognition', service.putTeamsById);

router.get('/:teamId', service.getTeamsById);

router.get('/eventId/:teamEventId/:recordsLimit', service.getTeamsByEventId);

// router.get('/:locationlat/:locationlng', service.getVendorParkingIdByLatLng);

// router.get('/available/:locationlat/:locationlng', service.getAvailabilityParkingByLatLng);

module.exports = router;