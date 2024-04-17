const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');

const GetLanguagesView = (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    return res.render('languages/languages.view.pug', { isLoggedIn, user: req.session.user });
}

module.exports = { GetLanguagesView }