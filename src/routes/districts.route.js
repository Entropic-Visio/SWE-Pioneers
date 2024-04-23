const express = require('express');
const controller = require('../controllers/districts.controller.js');

const router = express.Router();

router.get('/', controller.GetDistricstView);

module.exports = router;