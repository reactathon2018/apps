var router = require('express').Router(),
    service = require('../services/events');

// router.get('/all/:centreLat/:centreLng/:boundingRadius', service.getAllLocationsByLatLngRad);

router.get('/all', service.getAllEvents);

router.get('/live', service.getLiveEvents);

router.get('/upcoming', service.getUpcomingEvents);

router.get('/previous', service.getPreviousEvents);

// router.get('/coveredlocations', service.getCoveredLocations);

router.post('/:eventId/:eventName/:eventDescription/:eventReleaseDate/:eventNominationStartDate/:eventNominationEndDate/:eventStartDate/:eventEndDate/:eventDemoDate/:eventFinaleDate/:eventEnabled/:eventScoring/:eventScoringMaxTotal', service.postEvents);

router.delete('/:eventId/:userEmpId/:userPassword', service.deleteEventsById);

router.put('/:eventId/:eventName/:eventDescription/:eventReleaseDate/:eventNominationStartDate/:eventNominationEndDate/:eventStartDate/:eventEndDate/:eventDemoDate/:eventFinaleDate/:eventEnabled/:eventScoring/:eventScoringMaxTotal', service.putEventsById);

router.get('/:eventId', service.getEventsById);

router.put('/like/:eventId/1', service.putLikesByEventsId);

router.put('/dislike/:eventId/1', service.putLikesByEventsId);

module.exports = router;