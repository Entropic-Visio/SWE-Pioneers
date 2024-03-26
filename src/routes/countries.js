// Modules
const express = require("express");
const router = express.Router()
const mysql = require('mysql2');
const db = require('../services/db.js');

router.get("/", async (req, res) => {
  try {
    const [rows, fields] = await db.query("SELECT * FROM `country`");
<<<<<<< HEAD
    console.log(`/cities: ${rows.length} rows`);
    return res.render('country');
=======
    console.log(`/countries: ${rows.length} rows`);
    return res.render("country");
>>>>>>> 4f9c5e7d6401dcf3886b1f64cb338422b84c16b4
  } catch (error) {
    console.error(error);
    return res.status(500).render("500");
  }


});

module.exports = router;