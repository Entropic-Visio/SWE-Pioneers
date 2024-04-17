const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');
const City = require('../models/city.model.js');
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
module.exports = { GetCountriesView }