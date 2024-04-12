const express = require('express');
const controller = require('../controllers/languages.controller.js');

const router = express.Router();

router.get('/', controller.GetLanguagesView);

module.exports = router;
