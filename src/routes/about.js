const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.render("about"); // render pug view
});

module.exports = router;