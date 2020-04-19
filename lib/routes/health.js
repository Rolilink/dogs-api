const express = require('express');
const healthEndpoint = require('../endpoints/health');

const router = express.Router({ mergeParams: true });

router.use('/', healthEndpoint);

module.exports = router;
