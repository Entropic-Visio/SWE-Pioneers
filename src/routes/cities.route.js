const express = require('express');
const controller = require('../controllers/cities.controller.js');

const router = express.Router();

router.get('/', controller.GetCitiesDashboardView);
router.get('/all-cities', controller.GetAllCitiesView);
router.get('/capital-cities', controller.GetCapitalCitiesView);
router.get('/id/:id', controller.GetCityWithIDView);

module.exports = router;
