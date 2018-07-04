const express = require('express');
const CandidateRoute = require('./CandidateRoutes');
const router = express.Router();


CandidateRoute(router);

module.exports = router;
