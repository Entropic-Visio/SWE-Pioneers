const express = require("express");
const router = express.Router();
const db = require('../services/db.js');

router.get("/", (req, res) => {
    db.query("SELECT * FROM `city`", (err, rows, fields) => {
      console.log(`/cities: ${rows.length} rows`);
      return res.send(rows);
    });
});

module.exports = router;