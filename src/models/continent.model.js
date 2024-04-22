const continentsService = require('../services/continents.service.js');

class Continent {
    constructor(name) {
        this.Name = name;
        this.Population = 0;
    }

    async initializeContinent() {
        const result = await continentsService.getContinent(this.Name);
        if (result) {
            for (let i = 0; i < result.length; i++) {
                this.Population += result[i].Population;
            }
        } else {
            throw new Error("Language not found");
        }
    }
}

module.exports = Continent;