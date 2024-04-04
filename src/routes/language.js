const express = require("express");
const router = express.Router();
const countryLanguageServices = require('../services/countryLanguage.services.js');

router.get("/", async (req, res) => {
    try{ 
        const results = await countryLanguageServices.getAllCountryLanguages();
        return res.render("language", { countryLanguages: results});
    } catch (error){
        console.error(error);
        return res.status(500).render("500");
    }
});

module.exports = router;