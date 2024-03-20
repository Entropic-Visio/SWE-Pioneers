const cityServices = require('../services/city.services.js');

class City {
    constructor(id) {
        this.id = parseInt(id);
        this.name = null;
        this.countryCode = null;
        this.district = null;
        this.population = null;
    }

    async getCityInformation() {
        if (typeof this.name !== "string") { // if the city name isnt a string
                const result = await cityServices.getCityById(parseInt(this.id)); // query the database
                if (result) { // if the result is not null initalize the rest of the values
                    this.name = result.Name;
                    this.countryCode = result.CountryCode;
                    this.district = result.District;
                    this.population = parseInt(result.Population);
                } else {
                    throw new Error("City not found");
                }
        }
    }
}

module.exports = { City };