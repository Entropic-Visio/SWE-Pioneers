const express = require("express");
const router = express.Router();
const countryLanguageServices = require('../services/countryLanguage.services.js');
const { Country } = require('../models/country.model.js');
const { Language } = require('../models/language.model.js');

router.get("/", async (req, res) => {
    try {
        const results = await countryLanguageServices.getAllCountryLanguages();

        const languageWithPopulations = await Promise.all(results.map(async language => {
            try {
                const country = new Country(language.CountryCode);
                const languageObject = new Language(language.CountryCode, language.Language);
                await languageObject.getLanguageInformation();
                languageObject.population = await country.getCountryPopulation();
                return languageObject;
            } catch (error) {
                console.error("Error Processing Language:", error);
                return null; // return null if an error occurs
            }
        }));

        // Filter out null values
        const filteredLanguages = languageWithPopulations.filter(lang => lang !== null);

        return res.render("language", { countryLanguages: filteredLanguages });
    } catch (error) {
        console.error("Server Error:", error);
        return res.status(500).render("500");
    }
});

module.exports = router;
