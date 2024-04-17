const express = require('express');
const controller = require('../controllers/worldDatabase.controller.js');

const router = express.Router();

router.get('/', controller.GetWorldDatabaseView);

module.exports = router;
