const express = require('express');
const controller = require('../controllers/contact.controller.js');

const router = express.Router();

router.get('/', controller.GetContactView);

module.exports = router;
