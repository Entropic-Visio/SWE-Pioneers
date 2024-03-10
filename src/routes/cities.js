const express = require("express");
const router = express.Router()
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST || "localhost",
    user: "user",
    password: "password",
    database: "world",
  });

router.get("/", (req, res) => {
    db.query("SELECT * FROM `city`", (err, rows, fields) => {
      console.log(`/cities: ${rows.length} rows`);
      return res.send(rows);
    });
});

module.exports = router;