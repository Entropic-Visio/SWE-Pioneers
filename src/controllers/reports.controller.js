const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');
const countriesService = require('../services/countries.service.js');

const GetReportsView = (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    return res.render('reports/reports.view.pug', { isLoggedIn, user: req.session.user });
}

const GetWorldPopulationReportView = async (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    const result = await countriesService.getWorldPopulation();
    let worldPopulation = 0

    for (let i = 0; i < result.length; i++) {
        worldPopulation += result[i].Population;
    }

    return res.render('reports/worldPopulation.report.pug', { isLoggedIn, user: req.session.user, worldPopulation });
}

module.exports = { GetReportsView, GetWorldPopulationReportView }