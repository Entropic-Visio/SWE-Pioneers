const express = require("express");
const router = express.Router();
const { City } = require("../models/city.model.js");
const cityServices = require('../services/city.services.js');


/*
SQL Query Database for all Cities,
Returns All Cities
*/
router.get("/", async (req, res) => {
  try {
    const results = await cityServices.getAllCities();
    return res.render('city', {cities:results});
  } catch (error) {
    console.error("Error fetching cities:", error.message);
    return res.status(500).render("500");
  }
});


router.get("/asc", async (req, res) => {
  try {
    const results = await cityServices.getCityOrderByPopulationAsc();
    return res.send(results);
  } catch (error) {
    console.error(error);
    return res.status(500).render("500");
  }
});

router.get("/desc", async (req, res) => {
  try {
    const results = await cityServices.getCityOrderByPopulationDesc();
    return res.send(results);
  } catch (error) {
    console.error(error);
    return res.status(500).render("500");
  }
});


/*
SQL Query Database for City with Parameter ID,
Returns City with the same ID, and uses PUG to render in formatted data.
*/
router.get("/id/:id", async (req, res) => {
  try {
    const cityID = parseInt(req.params.id); // city ID
    
    const city = new City(cityID); // create city object with ID
    await city.getCityInformation(); // get the rest of the information from the database.

    if (!city.name) { // if a city wasnt found render the 404.pug page.
      return res.status(404).render("404");
    }

    return res.render('city-report', {city:city}); // render city using city.pug and assign city variable with the city object

  } catch (error) {
    console.log(error);
    return res.status(500).render("500");
  }
});

module.exports = router;