var router = require('express').Router(),
    service = require('../services/login');

router.get('/:userEmpId/:userPassword', service.getLoginVerified);

module.exports = router;