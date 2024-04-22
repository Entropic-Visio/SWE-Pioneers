const citiesService = require('../services/cities.service.js');
const countriesService = require('../services/countries.service.js');

const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');
const City = require('../models/city.model.js');
const Country = require('../models/country.model.js');

const GetCitiesDashboardView = async (req, res) => {
    try {
        const isLoggedIn = isUserLoggedIn(req);
        return res.render('cities/citiesDashboard.view.pug', { isLoggedIn, user: req.session.user});
    } catch (error) {
        console.error("Error Fetching Cities: ", error.message);
        return error
    }
};

const GetAllCitiesView = async (req, res) => {
    try {
        const isLoggedIn = isUserLoggedIn(req);
        const results = await citiesService.getAllCities();

        const cities = await Promise.all(results.map(async city => {
            const country = new Country(city.CountryCode);
            await country.initializeCountry();
            city.Continent = await country.getCountryContinent().catch(error => { 
                console.error("Error fetching Country name:", error); 
                return null;
            });
            city.Region = await country.getCountryRegion().catch(error => { 
                console.error("Error fetching Country Region:", error); 
                return null;
            });
            city.CountryName = await country.getCountryName().catch(error => { 
                console.error("Error fetching Country Region:", error); 
                return null;
            });
            return city
        }))

        return res.render('cities/allCities.view.pug', { isLoggedIn, user: req.session.user, cities });
    } catch (error) {
        console.error("Error Fetching Cities: ", error.message);
        return error
    }
};

const GetCapitalCitiesView = async (req, res) => {
    try {
        const isLoggedIn = isUserLoggedIn(req);
        const results = await countriesService.getAllCountries();
        const capitalCities = await Promise.all(results.map(async country => {
            try {
                const city = new City(country.Capital);
                await city.initializeCity();
                city.Region = await country.Region;
                city.Continent = await country.Continent;
                city.CountryName = await country.Name;
                console.log(city);
                return city;
            } catch (error) {
                console.error(error.message)
                return null;
            }
        }));

        const filteredCities = capitalCities.filter(city => city !== null);
        
        return res.render('cities/capitalCities.view.pug', { isLoggedIn, user: req.session.user, cities: filteredCities });
    } catch (error) {
        console.error("Error Fetching Cities: ", error.message);
        return error
    }
};

const GetCityWithIDView = async (req, res) => {
    try {
        const isLoggedIn = isUserLoggedIn(req);
        const cityID = parseInt(req.params.id);
        const city = new City(cityID);

        await city.initializeCity();


        if (!city.Name) {
            return res.status(404).render('error.view.pug', {error: {code: 404, message: 'City Not Found'}});
        }

        return res.render('cities/city.report.pug', {isLoggedIn, user: req.session.user, city});

    } catch (error) {
        console.log(error);
        return res.status(500).render('error.view.pug', {error: {code: 500, message: 'Internal Server Error'}});
    }
};



module.exports = { 
    GetCitiesDashboardView, 
    GetAllCitiesView, 
    GetCapitalCitiesView, 
    GetCityWithIDView,
}