const citiesService = require('../services/cities.service.js');
const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');
const City = require('../models/city.model.js');

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
        return res.render('cities/allCities.view.pug', { isLoggedIn, user: req.session.user, cities: results });
    } catch (error) {
        console.error("Error Fetching Cities: ", error.message);
        return error
    }
};

const GetCapitalCitiesView = async (req, res) => {
    try {
        const isLoggedIn = isUserLoggedIn(req);
        const results = await citiesService.getAllCities();
        return res.render('cities/capitalCities.view.pug', { isLoggedIn, user: req.session.user, cities: results });
    } catch {
        console.error("Error Fetching Cities: ", error.message);
        return error
    }
};

const GetCityWithIDView = async (req, res) => {
    try {
        const cityID = parseInt(req.params.id);
        const city = new City(cityID);

        await city.initializeCity();

        if (!city.Name) {
            return res.status(404).render('error.view.pug', {error: {code: 404, message: 'City Not Found'}});
        }
        console.log(city.Name);

        return res.render('cities/city.report.pug', {city: city});
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