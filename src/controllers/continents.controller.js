const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');
const Continent = require('../models/continent.model.js');
const GetContinentView = async (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);

    const northAmerica = new Continent('North America');
    const southAmerica = new Continent('South America');
    const europe = new Continent('Europe');
    const africa = new Continent('Africa');
    const asia = new Continent('Asia');
    const oceania = new Continent('Oceania');
    const antarctica = new Continent('Antarctica');

    await northAmerica.initializeContinent();
    await southAmerica.initializeContinent();
    await europe.initializeContinent();
    await africa.initializeContinent();
    await asia.initializeContinent();
    await oceania.initializeContinent();
    await antarctica.initializeContinent();

    const continents = [northAmerica, southAmerica, europe, africa, asia, oceania, antarctica];

    return res.render('continents/continents.view.pug', { isLoggedIn, user: req.session.user, continents });
}

module.exports = { GetContinentView }