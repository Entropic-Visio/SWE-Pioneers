const express = require('express');
const controller = require('../controllers/populationReport.controller.js');

const router = express.Router();

router.get('/', controller.GetPopulationView);

module.exports = router;