const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');
const userServices = require('../services/users.service.js');

const GetAccountSettingView = (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    return res.render('user/accountSetting.view.pug', { isLoggedIn, user: req.session.user });
}

const DeleteUser = async (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    const result = await userServices.deleteUserFromDatabase(req.session.user.Email);
    if (result == true) {
        req.session.destroy();
        console.log("Deleted User Successfully");
    } else {
        console.log("Failed to Delete User");
    }

    return res.render('login.view.pug', { isLoggedIn, user: {UserType: ""} });
}

module.exports = { GetAccountSettingView, DeleteUser };