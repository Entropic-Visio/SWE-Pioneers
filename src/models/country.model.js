const countryService = require('../services/countries.service.js');

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
        if (typeof this.name !== "string") {
                const result = await countryService.getCountryByCode(this.countryCodeAlpha3); // query the database
                if (result) {
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
                    this.countryCodeAlpha2 = result.Code2;
                } else {
                    throw new Error("Country Not Found");
                }
        }
    }

    async initializeCountry() {
        if (!Number.isInteger(this.population)) {
            const result = await countryService.getCountryByCode(this.countryCodeAlpha3);
            if (result) {
                this.population = result.Population;
                return this.population;
            } else {
                throw new Error("Country Not Found");
            }
        }
    }
}

module.exports = Country;