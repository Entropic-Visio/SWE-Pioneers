const citiesService = require('../services/cities.service.js');

class City {
    constructor(id) {
        this.ID = parseInt(id);
        this.Name = null;
        this.CountryCode = null;
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
                } else {
                    throw new Error("City not found");
                }
        }
    };

    async getCityName() {
        if (typeof this.Name !== "string") {
            const result = await citiesService.getCityById(this.ID);
            if (result) {
                this.Name = result.Name;
                return this.Name;
            }
        }
    }
};

module.exports = City;