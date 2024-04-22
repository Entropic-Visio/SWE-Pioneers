const { worldConnection } = require('./db.js');

/**
 * Retrieves all cities from the database.
 * @returns {Promise<Array<Object>>} An array of city objects.
 */
async function getAllCities() {
    // SQL query to select all cities from the 'city' table
    const sql = "SELECT * FROM `city`";
    try {
        // Execute the SQL query asynchronously
        const [rows, fields] = await worldConnection.query(sql);

        // Get the number of cities returned
        console.log(`/cities: ${rows.length} rows`);

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
 * @param {number} cityID - The ID of the city to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the city object if found, otherwise rejects with an error.
 */
async function getCityById(cityID) { 
    // Log the desired city ID being fetched
    console.log("City ID:", cityID);

    // SQL query to select a city from the `city` table based on the given ID
    const sql = "SELECT * FROM `city` WHERE ID = ?";

    try {
        // Execute the SQL query asynchronously, passing the cityID as a parameter
        const [rows, fields] = await worldConnection.query(sql, [cityID]);

        // Log the retrieved city object
        console.log(rows[0][0]);

        // Return the first city object from the result set
        return rows[0];
    } catch (error) {
        // Handle errors that occur during database query execution
        console.error("Error Fetching City by ID: ", error);
        
        // Throw a new error if city retrieval fails
        throw new Error("Failed to Fetch City by ID");
    }
};


module.exports = { 
    getAllCities, 
    getCityById,
};