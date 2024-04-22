const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');
const City = require('../models/city.model.js');
const Country = require('../models/country.model.js');
const countryServices = require('../services/countries.service.js');
const citiesService = require('../services/cities.service.js');

const GetCountriesView = async (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    const results = await countryServices.getAllCountries();
    console.log(`/countries: ${results.length} rows`);

    const countryWithCapitalNames = await Promise.all(results.map(async country => {
        const cityID = parseInt(country.Capital);
        const city = new City(cityID);
        country.CapitalName = await city.getCityName().catch(error => { 
            console.error("Error fetching city name:", error); 
            return null;
        });
        return country;
    }));

    return res.render('countries/countries.view.pug', { isLoggedIn, user: req.session.user, countries: countryWithCapitalNames });
}

const GetCountryWithCountryCodeView = async (req, res) => {
    try {
        const isLoggedIn = isUserLoggedIn(req);
        const countryCode = req.params.code;

        console.log(countryCode);

        const country = new Country(countryCode);
        await country.initializeCountry();

        if (!country.Name) {
            return res.status(404).render('error.view.pug', {error: {code: 404, message: 'Country Not Found'}});
        }

        if (country.CapitalID) {
            const city = new City(country.CapitalID);
            await city.initializeCity();
            country.CapitalName = city.Name;
        } else {
            country.CapitalName = false;
        }

        if (!country.IndepYear) {
            country.IndepYear = false;
        }

        if (!country.GNPOld) {
            country.GNPOld = false;
        }

        return res.render('countries/country.report.pug', {isLoggedIn, user: req.session.user, country});
    } catch (error) {
        console.log(error);
        return res.status(500).render('error.view.pug', {error: {code: 500, message: 'Internal Server Error'}});
    }

};

module.exports = { GetCountriesView, GetCountryWithCountryCodeView }