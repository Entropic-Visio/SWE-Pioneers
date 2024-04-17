const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');
const citiesService = require('../services/cities.service.js');
const countriesService = require('../services/countries.service.js');
const languagesService = require('../services/languages.service.js');

const GetWorldDatabaseView = (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    return res.render('admin/worldDatabase.view.pug', { isLoggedIn, user: req.session.user });
}

module.exports = { GetWorldDatabaseView }