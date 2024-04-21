const express = require('express');
const controller = require('../controllers/reports.controller.js');

const router = express.Router();

router.get('/', controller.GetReportsView);

module.exports = router;
