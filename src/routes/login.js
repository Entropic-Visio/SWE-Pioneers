const express = require("express");
const router = express.Router()
const { User } = require('../models/user.model.js');

router.get("/", (req, res) => {
    res.render("login"); // render pug view
});


module.exports = router;