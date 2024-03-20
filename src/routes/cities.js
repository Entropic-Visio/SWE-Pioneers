const express = require("express");
const router = express.Router();
const db = require('../services/db.js');
const { City } = require("../models/city.model.js");

router.get("/", async (req, res) => {
  try {
    const [rows, fields] = await db.query("SELECT * FROM `city`");
    console.log(`/cities: ${rows.length} rows`);
    return res.send(rows);
  } catch (error) {
    console.error(error);
    return res.status(500).render("500");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const cityID = req.params.id;
    const [rows, fields] = await db.query("SELECT * FROM `city` WHERE ID = ?", [cityID]);

    if (rows.length === 0) {
      return res.status(404).render("404");
    }

    console.log(`/country: ${rows.length} rows`);
    return res.send(rows[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).render("500");
  }
});

router.get("/id/:id", async (req, res) => {
  try {
    const cityID = req.params.id;
    const city = new City(cityID);
    await city.getDetails();

    if (!city.name) {
      return res.status(404).render("404");
    }

    return res.send(city);
  } catch (error) {
    console.log(error)
    return res.status(500).render("500");
  }
});

module.exports = router;