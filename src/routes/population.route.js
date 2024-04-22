const express = require('express');
const controller = require('../controllers/population.controller.js');

const router = express.Router();

router.get('/', controller.GetPopulationView);

module.exports = router;