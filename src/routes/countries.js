const express = require("express");
const router = express.Router()
const mysql = require('mysql2');
const db = require('../services/db.js');

router.get("/", (req, res) => {
    db.query("SELECT * FROM `country`", (err, rows, fields) => {
      console.log(`/country: ${rows.length} rows`);
      return res.send(rows);
    });
});

module.exports = router;