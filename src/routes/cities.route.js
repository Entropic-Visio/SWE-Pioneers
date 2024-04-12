const express = require('express');
const controller = require('../controllers/cities.controller.js');

const router = express.Router();

router.get('/', controller.GetAllCities);

module.exports = router;
