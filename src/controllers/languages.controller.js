const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');
const { getAllLanguages } = require('../services/languages.service.js');
const GetLanguageView = async (req, res) => {
    try {
        const isLoggedIn = isUserLoggedIn(req);
        const results = await getAllLanguages();
        console.log(results)
        return res.render('languages/languages.view.pug', { isLoggedIn, user: req.session.user, langauges: results});
    } catch (error) {
        console.error("Error Fetching Citites", error.message);
        return error
    }
}

module.exports = { GetLanguageView }