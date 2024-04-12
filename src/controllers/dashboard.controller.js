const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');

const GetDashboardView = (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    return res.render('dashboard.view.pug', { isLoggedIn, user: req.session.user });
}

module.exports = { GetDashboardView }