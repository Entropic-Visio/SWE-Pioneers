const express = require('express');
const controller = require('../controllers/adminPanel.controller.js');

const router = express.Router();

router.get('/', controller.GetAdminPanelView);

module.exports = router;
