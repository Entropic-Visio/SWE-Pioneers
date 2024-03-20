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
        if (typeof this.name !== "string") {
            try {
                const result = await cityServices.getCityById(this.id);
                if (result) {
                    this.name = result.Name;
                    this.countryCode = result.CountryCode;
                    this.district = result.District;
                    this.population = parseInt(result.Population);
                } else {
                    throw new Error("City not found");
                }
            } catch (error) {
                console.error("Error fetching city details:", error);
                throw new Error("Error fetching city details");
            }
        }
    }
}

module.exports = { City };