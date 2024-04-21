const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');

const GetReportsView = (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    return res.render('reports/reports.view.pug', { isLoggedIn, user: req.session.user });
}

module.exports = { GetReportsView }