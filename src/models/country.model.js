const countryService = require('../services/country.services.js');

class Country {
    constructor(countryCodeAlpha3) {
        this.countryCodeAlpha3 = countryCodeAlpha3.toUpperCase();
        this.name = null;
        this.continent = null;
        this.region = null;
        this.surfaceArea = null;
        this.indepYear = null;
        this.population = null;
        this.lifeExpectancy = null;
        this.GNP = null;
        this.GNPOld = null;
        this.localName = null;
        this.governmentForm = null;
        this.headOfState = null;
        this.capital = null;
        this.countryCodeAlpha2 = null;
    }

    async getCountryInformation() {
        if (typeof this.name !== "string") { // if the city name isnt a string
                const result = await countryService.getCountryByCode(this.countryCodeAlpha3); // query the database
                if (result) { // if the result is not null initalize the rest of the values
                    this.name = result.Name;
                    this.continent = result.Continent;
                    this.region = result.Region;
                    this.surfaceArea = result.SurfaceArea;
                    this.indepYear = result.IndepYear;
                    this.population = result.Population;
                    this.lifeExpectancy = result.LifeExpectancy;
                    this.GNP = result.GNP;
                    this.GNPOld = result.GNPOld;
                    this.localName = result.LocalName;
                    this.governmentForm = result.GovernmentForm;
                    this.headOfState = result.HeadOfState;
                    this.capital = result.Capital;
                    this.countryCodeAlpha2 = result.Code2.toUpperCase();
                } else {
                    throw new Error("City not found");
                }
        }
    }
}

module.exports = { Country };