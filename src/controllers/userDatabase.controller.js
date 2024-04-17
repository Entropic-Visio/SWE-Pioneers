const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');
const usersService = require('../services/users.service.js');

const GetUserDatabaseView = async (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    const users = await usersService.getAllUsers();
    return res.render('admin/userDatabase.view.pug', { isLoggedIn, user: req.session.user, users: users });
}

module.exports = { GetUserDatabaseView }