const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');

const GetPopulationView = (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    return res.render('population/population.report.pug', { isLoggedIn, user: req.session.user });
}

module.exports = { GetPopulationView }