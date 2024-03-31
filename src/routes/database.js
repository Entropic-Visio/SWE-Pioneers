const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.render("database"); // render pug view
});

module.exports = router;