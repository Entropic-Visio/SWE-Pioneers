const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');
const usersService = require('../services/users.service.js');

const GetRegisterView = (req, res) => {
    return res.render('user/register.view.pug');
};

const RegisterUser = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        return res.render('user/register.view.pug', { emptyField: true });
    };

    if (password !== confirmPassword) {
        return res.render('user/register.view.pug', { passwordDontMatch: true });
    };

    const results = await usersService.searchEmailInDatabase(email);

    if (results === true) {
        return res.render('user/register.view.pug', { userAlreadyExists: true });
    }

    usersService.addUserToDatabase(username, email, password);
    res.render('user/login.view.pug', { isLoggedIn: false });
};

module.exports = { GetRegisterView, RegisterUser }