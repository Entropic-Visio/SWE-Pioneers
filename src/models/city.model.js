const db = require("../services/db");

class City {
    id;
    name;
    countryCode;
    district;
    population;

    constructor(id) {
        this.id = id
    }

    async getDetails() {
        if (typeof this.name !== "string") {
            var sql = "SELECT * FROM `city` WHERE ID = ?"
            const results = await db.query(sql, [this.id]);
            this.name = results[0].Name;
            this.countryCode = results[0].CountryCode;
            this.district = results[0].District;
            this.population = results[0].Population;
        }
    }
}

module.exports = {
    City
}