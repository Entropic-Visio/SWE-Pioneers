const { getAllCities } = require('../services/cities.service.js');
const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');

const GetAllCities = async (req, res) => {
    try {
        const isLoggedIn = isUserLoggedIn(req);
        const results = await getAllCities();
        return res.render('cities.view.pug', { isLoggedIn, user: req.session.user, cities: results });
    } catch (error) {
        console.error("Error Fetching Cities: ", error.message);
        return error
    }
}

module.exports = { GetAllCities }