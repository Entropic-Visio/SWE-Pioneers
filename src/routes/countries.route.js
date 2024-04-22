const express = require('express');
const controller = require('../controllers/countries.controller.js');

const router = express.Router();

router.get('/', controller.GetCountriesView);
router.get('/code/:code', controller.GetCountryWithCountryCodeView);

module.exports = router;
