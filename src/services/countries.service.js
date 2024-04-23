const { worldConnection } = require('./db.js');

/**
 * Retrieves all cities from the database.
 * @returns {Promise<Array<Object>>} An array of city objects.
 */
async function getAllCountries() {
    // SQL query to select all cities from the 'city' table
    const sql = "SELECT * FROM `country`";
    try {
        // Execute the SQL query asynchronously
        const [rows, fields] = await worldConnection.query(sql);

        // Get the number of cities returned
        console.log(`/countries: ${rows.length} rows`);

        // Return the reterived rows
        return rows;
    } catch (error) {
        // Handle errors which occur during database query execution
        console.error(error);

        // Render 500.pug if an error occurs
        return res.status(500).render("500");
    }
};

/**
 * Retrieves a city from the database based on the provided city ID.
 * @param {string} countryCode - The ID of the city to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the city object if found, otherwise rejects with an error.
 */
async function getCountryByCode(countryCode) { 
    // SQL query to select a country from the `country` table based on the given code
    const sql = "SELECT * FROM `country` WHERE Code = ?";

    try {
        // Execute the SQL query asynchronously, passing the country code as a parameter
        const [rows, fields] = await worldConnection.query(sql, [countryCode]);

        // Return the first country object from the result set
        return rows[0];
    } catch (error) {
        // Handle errors that occur during database query execution
        console.error("Error Fetching Country by Code: ", error);
        
        // Throw a new error if country retrieval fails
        throw new Error("Failed to Fetch Country by code");
    }
};

/**
 * Retrieves a city from the database based on the provided city ID.
 * @param {string} countryCode - The ID of the city to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the city object if found, otherwise rejects with an error.
 */
async function getWorldPopulation() { 
    // SQL query to select a country from the `country` table based on the given code
    const sql = "SELECT Population FROM `country`";

    try {
        // Execute the SQL query asynchronously, passing the country code as a parameter
        const [rows, fields] = await worldConnection.query(sql);

        // Return the first country object from the result set
        return rows;
    } catch (error) {
        // Handle errors that occur during database query execution
        console.error("Error Fetching Country by Code: ", error);
        
        // Throw a new error if country retrieval fails
        throw new Error("Failed to Fetch Country by code");
    }
};


module.exports = { 
    getAllCountries, 
    getCountryByCode,
    getWorldPopulation,
};