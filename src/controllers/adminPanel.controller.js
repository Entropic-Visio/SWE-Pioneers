const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');

const GetAdminPanelView = (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    if (req.session.user.UserType === 'Admin') {
        return res.render('adminPanel.view.pug', { isLoggedIn, user: req.session.user });
    }
    
    return res.status(403).render('error.view.pug', {error: { code: 403, title: 403, message: "Invalid Permissions" }, isLoggedIn, user: req.session.user });
};

module.exports = { GetAdminPanelView }