// Modules
const express = require("express"); 
const router = express.Router() 
const mysql = require('mysql2'); 
const db = require('../services/db.js');
const countryServices = require('../services/country.services.js');
const { Country } = require('../models/country.model.js');

router.get("/", async (req, res) => {
  try {
    const results = await countryServices.getAllCountries();
    console.log(`/countries: ${results.length} rows`);
    return res.render('country', {countries:results});
  } catch (error) {
    console.error(error);
    return res.status(500).render("500");
  }
});

router.get("/desc", async (req, res) => {
  try {
    const results = await cityServices();
    return res.send(results);
  } catch (error) {
    console.error(error);
    return res.status(500).render("500");
  }
});


router.get("/countryCode/:countryCode", async (req, res) => {
  try {
    const countryCode = req.params.countryCode; // city ID
    
    const country = new Country(countryCode); // create city object with ID
    await country.getCountryInformation(); // get the rest of the information from the database.

    if (!country.name) { // if a city wasnt found render the 404.pug page.
      return res.status(404).render("404");
    }

    return res.render('country-report', {country:country}); // render city using city.pug and assign city variable with the city object

  } catch (error) {
    // If an error occurs during the database query or rendering, log the error to the console.
    console.log(error)
    return res.status(500).render("500");
  }
});
// Export the router so it can be used in other parts of the application, typically the main server file.
module.exports = router;
