const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');
const usersService = require('../services/users.service.js');

const GetUserDatabaseView = (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    return res.render('user/userDatabase.view.pug', { isLoggedIn, user: req.session.user });
}

module.exports = { GetUserDatabaseView }