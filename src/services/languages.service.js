const { worldConnection } = require('./db.js');

/**
 * Retrieves all cities from the database.
 * @returns {Promise<Array<Object>>} An array of city objects.
 */
async function getAllLanguages() {
    // SQL query to select all cities from the 'city' table
    const sql = "SELECT * FROM `countrylanguage`";
    try {
        // Execute the SQL query asynchronously
        const [rows, fields] = await worldConnection.query(sql);

        // Get the number of cities returned
        console.log(`/languages: ${rows.length} rows`);
        console.log(rows)

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
 * Retrieves a country from the database based on the provided city ID.
 * @param {string} countryCode - The country code of the country to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the city object if found, otherwise rejects with an error.
 */
async function getLanguageByCode(countryCode, language) { 
    // Log the desired city ID being fetched
    console.log("Country Code:", countryCode);

    // SQL query to select a city from the `city` table based on the given ID
    const sql = "SELECT * FROM `countrylanguage` WHERE CountryCode = ? AND Language = ?";

    try {
        // Execute the SQL query asynchronously, passing the cityID as a parameter
        const [rows, fields] = await worldConnection.query(sql, [countryCode, language]);

        // Log the retrieved city object
        console.log(rows[0]);

        // Return the first city object from the result set
        return rows[0];
    } catch (error) {
        // Handle errors that occur during database query execution
        console.error("Error Fetching Country by Code: ", error);
        
        // Throw a new error if city retrieval fails
        throw new Error("Failed to Fetch Country by Code");
    }
};

module.exports = { 
    getLanguageByCode,
    getAllLanguages, 
};