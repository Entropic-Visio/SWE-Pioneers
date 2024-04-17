const express = require('express');
const controller = require('../controllers/userDatabase.controller.js');

const router = express.Router();

router.get('/', controller.GetUserDatabaseView);

module.exports = router;
