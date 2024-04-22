const citiesService = require('../services/cities.service.js');
const countriesService = require('../services/countries.service.js');


class City {
    constructor(id) {
        this.ID = parseInt(id);
        this.Name = null;
        this.CountryCode = null;
        this.CountryName = null;
        this.Region = null;
        this.Continent = null;
        this.District = null;
        this.Population = null;
    };

    async initializeCity() {
        if (typeof this.Name !== "string") {
                const result = await citiesService.getCityById(this.ID);
                if (result) { 
                    this.Name = result.Name;
                    this.CountryCode = result.CountryCode;
                    this.District = result.District;
                    this.Population = parseInt(result.Population);
                    console.log (this.CountryCode);
                    const CC = await countriesService.getCountryByCode(this.CountryCode);
                    if (CC) {
                        console.log (this.CountryCode);
                        this.CountryName = CC.CountryName;
                        return this.CountryName;
                    } else {
                        console.error("Country doesnt exist");
                    }
                
                } else {
                    throw new Error("City not found");
                }
        }
    };
    

    async getCityName() {
        if (typeof this.Name === "string") {
            this.Name = result.Name;
            return this.Name;
        } else {
            console.error("Name Doesnt Exist")
        }
    }
};

module.exports = City;