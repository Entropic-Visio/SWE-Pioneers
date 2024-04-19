const express = require('express');
const controller = require('../controllers/userDatabase.controller.js');

const router = express.Router();

router.get('/', controller.GetUserDatabaseView);
router.post('/delete/:id', controller.DeleteUserFromDatabase);

module.exports = router;