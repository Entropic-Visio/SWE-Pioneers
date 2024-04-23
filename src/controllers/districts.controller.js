const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');

const GetDistricstView = (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    return res.render('districts/districts.view.pug', { isLoggedIn, user: req.session.user });
}

module.exports = { GetDistricstView }