const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');

const GetAdminPanelView = (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    return res.render('admin/adminPanel.view.pug', { isLoggedIn, user: req.session.user });
};

module.exports = { GetAdminPanelView }