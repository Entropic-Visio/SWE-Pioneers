const express = require("express");
const router = express.Router();
const db = require('../services/db.js');

router.get("/", (req, res) => {
    db.query("SELECT * FROM `city`", (err, rows, fields) => {
      console.log(`/cities: ${rows.length} rows`);
      return res.send(rows);
    });
});

router.get("/:id", (req, res) => {
  const cityID = req.params.id;
  db.query("SELECT * FROM `city` WHERE ID = ?", [cityID], (err, rows, fields) => { // query database to reterieve all countries
    if (err) {
      console.error(err)
      return res.status(500).render("500");
    }
    if (rows.length === 0) {
      return res.status(404).render("404");
    }
    console.log(`/country: ${rows.length} rows`);
    return res.send(rows[0]);
  });
});

router.get("/:name", (req, res) => {
  const cityName = req.params.name;
  db.query("SELECT * FROM `city` WHERE Name = ?", [cityName], (err, rows, fields) => { // query database to reterieve all countries
    if (err) {
      console.error(err)
      return res.status(500).render("500");
    }
    if (rows.length === 0) {
      return res.status(404).render("404");
    }
    console.log(`/country: ${rows.length} rows`);
    return res.send(rows[0]);
  });
});

module.exports = router;