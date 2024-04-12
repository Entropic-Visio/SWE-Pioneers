const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');

const GetContactView = (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    return res.render('contact.view.pug', { isLoggedIn, user: req.session.user });
}

module.exports = { GetContactView }