const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');

const GetHomeView = (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    return res.render('home.view.pug', { isLoggedIn, user: req.session.user });
}

module.exports = { GetHomeView }