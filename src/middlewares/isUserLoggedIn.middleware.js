const isUserLoggedIn = (req) => {
    if (req.session.isLoggedIn) {
        return true;
    } else {
        return false;
    }
};

module.exports = isUserLoggedIn;