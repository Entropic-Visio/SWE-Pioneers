const LogoutUser = (req, res) => {
    req.session.destroy();
    res.render('user/login.view.pug', { isLoggedIn: false });
}

module.exports = { LogoutUser };