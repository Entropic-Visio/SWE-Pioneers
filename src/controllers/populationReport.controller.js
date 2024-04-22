const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');

const GetAboutView = (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    return res.render('populationReport.view.pug', { isLoggedIn, user: req.session.user });
}

module.exports = { GetPopulationView }