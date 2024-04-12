const express = require('express');
const controller = require('../controllers/dashboard.controller.js');

const router = express.Router();

router.get('/', controller.GetDashboardView);

module.exports = router;
