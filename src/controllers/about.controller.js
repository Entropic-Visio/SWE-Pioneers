const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');

const GetAboutView = (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    return res.render('about.view.pug', { isLoggedIn, user: req.session.user });
}

module.exports = { GetAboutView }