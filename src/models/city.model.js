const cityServices = require('../services/cities.service.js');

class City {
    constructor(id) {
        this.id = parseInt(id);
        this.name = null;
        this.countryCode = null;
        this.district = null;
        this.population = null;
    };

    async initializeCity() {
        if (typeof this.name !== "string") {
                const result = await cityServices.getCityById(parseInt(this.id));
                if (result) { 
                    this.name = result.Name;
                    this.countryCode = result.CountryCode;
                    this.district = result.District;
                    this.population = parseInt(result.Population);
                } else {
                    throw new Error("City not found");
                }
        }
    };

    async getCityName() {
        return this.name;
    }
};

module.exports = City;