const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');
const usersService = require('../services/users.service.js');

const GetUserDatabaseView = async (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    const users = await usersService.getAllUsers();
    return res.render('admin/userDatabase.view.pug', { isLoggedIn, user: req.session.user, users: users });
};

const DeleteUserFromDatabase = async (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    const userID = req.params.id
    console.log("Recieved User ID:", userID);

    await usersService.deleteUserWithIDFromDatabase(userID);    
    return res.redirect('/user-database');
};

module.exports = { GetUserDatabaseView, DeleteUserFromDatabase };