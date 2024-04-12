const express = require('express');
const controller = require('../controllers/about.controller.js');

const router = express.Router();

router.get('/', controller.GetAboutView);

module.exports = router;