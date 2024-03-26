// Modules
const express = require("express");
const router = express.Router()
const mysql = require('mysql2');
const db = require('../services/db.js');

router.get("/", async (req, res) => {
  try {
    const [rows, fields] = await db.query("SELECT * FROM `country`");
    console.log(`/cities: ${rows.length} rows`);
    return res.render('country');
  } catch (error) {
    console.error(error);
    return res.status(500).render("500");
  }
});

module.exports = router;