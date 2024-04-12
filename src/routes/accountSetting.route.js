const express = require('express');
const controller = require('../controllers/accountSetting.controller.js');

const router = express.Router();

router.get('/', controller.GetAccountSettingView);
router.post('/delete-account', controller.DeleteUser);

module.exports = router;
