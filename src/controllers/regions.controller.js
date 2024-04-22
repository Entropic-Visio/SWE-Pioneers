const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');

const GetRegionView = (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    return res.render('region/region.view.pug', { isLoggedIn, user: req.session.user });
}

module.exports = { GetPopulationView }