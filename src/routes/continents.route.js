const express = require('express');
const controller = require('../controllers/continents.controller.js');

const router = express.Router();

router.get('/', controller.GetContinentView);

module.exports = router;
