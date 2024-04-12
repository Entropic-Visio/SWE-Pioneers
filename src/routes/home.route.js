const express = require('express');
const controller = require('../controllers/home.controller.js');

const router = express.Router();

router.get('/', controller.GetHomeView);

module.exports = router;
