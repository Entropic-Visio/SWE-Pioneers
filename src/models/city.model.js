const db = require('../services/db.js');

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
            const sql = "SELECT * FROM `city` WHERE ID = ?";
            try {
                const [results, fields] = await db.query(sql, [this.id]);
                if (results.length > 0) {
                    this.name = results[0].Name;
                    this.countryCode = results[0].CountryCode;
                    this.district = results[0].District;
                    this.population = results[0].Population;
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

module.exports = {
    City
}