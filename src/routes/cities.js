const express = require("express");
const router = express.Router();
const db = require('../services/db.js');
const { City } = require("../models/city.model.js");
const cityServices = require('../services/city.services.js');

router.get("/", async (req, res) => {
  try {
    const results = await cityServices.getAllCities();
    return res.send(results);
  } catch (error) {
    console.error(error);
    return res.status(500).render("500");
  }
});

router.get("/id/:id", async (req, res) => {
  try {
    const cityID = req.params.id;
    const city = new City(cityID);
    await city.getCityInformation();

    if (!city.name) {
      return res.status(404).render("404");
    }

    return res.render('city', {city:city});
  } catch (error) {
    console.log(error)
    return res.status(500).render("500");
  }
});

module.exports = router;