const countryServices = require('../services/countries.service.js')

class Country {
    constructor(countryCode) {
        this.code = countryCode;
        this.name = null;
        this.contient = null;
        this.region = null;
        this.population = null;
        this.captial = null;
    };

    async initializeCountry() {
        if (typeof this.name !== "string") {
                const result = await countryServices.getCountryByCode(this.code);
                if (result) { 
                    this.name = result.Name;
                    this.contient = result.CountryCode;
                    this.region = result.Region
                    this.population = parseInt(result.Population);
                    this.captial = result.Captial
                } else {
                    throw new Error("City not found");
                }
        }
    };

    async getCountryName() {
        if (typeof this.name !== "string") {
            const result = await countryServices.getCountryByCode(this.code);
            if (result) {
                this.name = result.Name;
                return this.name
            }
        }
    };
};

module.exports = { Country };
