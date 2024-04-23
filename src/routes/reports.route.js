const express = require('express');
const controller = require('../controllers/reports.controller.js');

const router = express.Router();

router.get('/', controller.GetReportsView);
router.get('/worldPopulation', controller.GetWorldPopulationReportView);


module.exports = router;
