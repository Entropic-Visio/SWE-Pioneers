const express = require('express');
const controller = require('../controllers/register.controller.js');

const router = express.Router();

router.get('/', controller.GetRegisterView);
router.post('/', controller.RegisterUser);

module.exports = router;