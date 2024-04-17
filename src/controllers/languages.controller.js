const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');
const languagesService = require('../services/languages.service.js');
const Country = require('../models/country.model.js');
const Language = require('../models/languages.model.js');

const GetLanguageView = async (req, res) => {
    try {
        const isLoggedIn = isUserLoggedIn(req);
        const result = await languagesService.getAllLanguages();

        const languageWithPopulation = await Promise.all(result.map(async language => {
            const country = new Country(language.CountryCode);
            console.log(country);
            await country.initializeCountry();
            const langaugeWithPop = new Language(language.CountryCode, language.Language)
            await langaugeWithPop.initializeLanguage();
            console.log(langaugeWithPop);
            langaugeWithPop.population = await country.getCountryPopulation().catch(error => { 
                console.error("Error fetching city name:", error); 
                return null; 
            });
            return langaugeWithPop;
        }));

        return res.render('languages/languages.view.pug', { isLoggedIn, user: req.session.user, languages: languageWithPopulation});
    } catch (error) {
        console.error("Error Fetching Citites", error.message);
        return error
    }
}

module.exports = { GetLanguageView }