const countryServices = require('../services/countries.service.js')

class Country {
    constructor(countryCode) {
        this.Code = countryCode;
        this.Code2 = null;
        this.Name = null;
        this.Continent = null;
        this.Region = null;
        this.SurfaceArea = null;
        this.IndepYear = null;
        this.Population = null;
        this.LifeExpectancy = null;
        this.GNP = null;
        this.GNPOld = null;
        this.LocalName = null;
        this.GovernmentForm = null;
        this.HeadOfState = null;
        this.CapitalID = null;
        this.CapitalName = null;
    };

    async initializeCountry() {
        if (typeof this.Name !== "string") {
            const result = await countryServices.getCountryByCode(this.Code);
            if (result) { 
                this.Code2 = result.Code2;
                this.Name = result.Name;
                this.Continent = result.Continent;
                this.Region = result.Region;
                this.SurfaceArea = result.SurfaceArea;
                this.IndepYear = result.IndepYear;
                this.Population = result.Population;
                this.LifeExpectancy = result.LifeExpectancy;
                this.GNP = result.GNP;
                this.GNPOld = result.GNPOld;
                this.LocalName = result.LocalName;
                this.GovernmentForm = result.GovernmentForm;
                this.HeadOfState = result.HeadOfState;
                this.CapitalID = result.Capital;
            } else {
                throw new Error("Country not found");
            }
        }
    };

    async getCountryName() {
        if (typeof this.Name === "string") {
            return this.Name;
        }
    };

    async getCountryPopulation() {
        if (typeof this.Name === "string") {
            return this.Population;
        }
    };

    async getCountryContinent() {
        if (typeof this.Name === "string") {
            return this.Continent;
        }
    };

    async getCountryRegion() {
        if (typeof this.Name === "string") {
            return this.Region;
        }
    };
};

module.exports = Country;
