const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');
const { getAllCountries } = require('../services/countries.service.js');

const GetCountriesView = async (req, res) => {
    try {
        const isLoggedIn = isUserLoggedIn(req);
        const results = await getAllCountries();
        return res.render('countries/countries.view.pug', { isLoggedIn, user: req.session.user, countries: results });
    } catch (error) {
        console.error("Error Fetching Countries", error.message);
        return error
    }
    
}
module.exports = { GetCountriesView }