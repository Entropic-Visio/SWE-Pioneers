const express = require('express');
const controller = require('../controllers/logout.controller.js');

const router = express.Router();

router.post('/', controller.LogoutUser);

module.exports = router;
