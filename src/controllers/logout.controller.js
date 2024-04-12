const LogoutUser = (req, res) => {
    req.session.destroy();
    res.render('login.view.pug', { isLoggedIn: false });
}

module.exports = { LogoutUser };