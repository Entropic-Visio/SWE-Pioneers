const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');

const GetCountriesView = (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    return res.render('countries.view.pug', { isLoggedIn, user: req.session.user });
}

module.exports = { GetCountriesView }