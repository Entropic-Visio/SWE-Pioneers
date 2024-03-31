const db = require('./db.js');


/**
 * Retrieves all cities from the database.
 * @returns {Promise<Array<Object>>} An array of city objects.
 */
async function getAllCities() {
    // SQL query to select all cities from the 'city' table
    const sql = "SELECT * FROM `city`";
    try {
        // Execute the SQL query asynchronously
        const [rows, fields] = await db.query(sql);

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
}

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
        const [rows, fields] = await db.query(sql, [cityID]);

        // Log the retrieved city object
        console.log(rows[0]);

        // Return the first city object from the result set
        return rows[0];
    } catch (error) {
        // Handle errors that occur during database query execution
        console.error("Error Fetching City by ID: ", error);
        
        // Throw a new error if city retrieval fails
        throw new Error("Failed to Fetch City by ID");
    }
}

/**
 * Retrieves all cities from the database and order them by population descending.
 * @returns {Promise<Array<Object>>} An array of city objects ordered by population.
 */
async function getCityOrderByPopulationDesc() {
    // SQL query to select all cities and organise them by the population descending 
    const sql = "SELECT * FROM `city` ORDER BY `Population` DESC";

    try {
        // // Execute the SQL query asynchronously
        const [rows, fields] = await db.query(sql);
        console.log(`Cities ordered by population: ${rows.length} rows`);

        // Return the retrieved rows
        return rows;
    } catch (error) {
        // Handle errors that occured during databasee query execution
        console.error("Error ordering cities by population: ", error);

        // Throw a new error if city retrievel fail 
        throw new Error("Failed to order cities by population");
    }
};

async function getCityOrderByPopulationAsc() {
    const sql = "SELECT * FROM `city` ORDER BY `Population` ASC"; 
    try {
      const [rows, fields] = await db.query(sql);
      console.log(`Cities ordered by population: ${rows.length} rows`);
      return rows;
    } catch (error) {
      console.error("Error ordering cities by population: ", error);
      throw new Error("Failed to order cities by population");
    }
};

module.exports = { 
    getAllCities, 
    getCityById, 
    getCityOrderByPopulationDesc,
    getCityOrderByPopulationAsc
};