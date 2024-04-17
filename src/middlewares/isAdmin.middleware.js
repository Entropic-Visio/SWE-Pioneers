const isAdmin = (req, res, next) => {
    if (req.session.user.UserType === "Admin") {
        next();
    } else {
        res.render('error.view.pug', { error: { code: 403, message: 'Invalid Permissions' }, user: req.session.user.UserType });
    }
}

module.exports = isAdmin;