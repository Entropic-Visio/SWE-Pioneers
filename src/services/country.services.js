const { worldConnection } = require('./db.js');
/**
 * Retrieves all countries from the database.
 * @returns {Promise<Array<Object>>} An array of country objects.
 */
async function getAllCountries() {
    // SQL query to select all countries from the `country` table
    const sql = "SELECT * FROM `country`";
    try {
        // Execute the SQL query asynchronously
        const [rows, fields] = await worldConnection.query(sql);

        // log the number of countries returned
        console.log(`/countries: ${rows.length} rows`);

        // Return the rows
        return rows;
    } catch (error) {
        // Handle errors which occur during database query execution
        console.error(error);

        // Render 500.pug if an error occurs
        return res.status(500).render("500");
    }
}

/**
 * Retrieves all cities from the database.
 * @returns {Promise<Object>} An array of city objects.
 */
async function getCountryByCode(countryCodeAlpha3) { 
    // SQL query to select all values in country table where the Code is like the argument parsed.
    const sql = "SELECT * FROM `country` WHERE Code = ?";

    try {
        // Execute the SQL query asynchronously
        const [rows, fields] = await worldConnection.query(sql, [countryCodeAlpha3]);
        
        // Log the first row
        console.log(rows[0]);

        // Return the first row
        return rows[0];
    } catch (error) {
        // Handle errors which occur during database query execution
        console.error("Error Fetching City by ID: ", error);

        // Render 500.pug if an error occurs
        throw new Error("Failed to Fetch City by ID");
    }
}

module.exports = { getAllCountries, getCountryByCode };