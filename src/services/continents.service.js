const { worldConnection } = require('./db.js');

/**
 * Retrieves all cities from the database.
 * @returns {Promise<Array<Object>>} An array of city objects.
 */
async function getContinent(continent) {
    // SQL query to select all cities from the 'city' table
    const sql = "SELECT Population FROM `country` WHERE Continent = ?";
    try {
        // Execute the SQL query asynchronously
        const [rows, fields] = await worldConnection.query(sql, [continent]);

        // Get the number of cities returned
        console.log(rows);

        // Return the reterived rows
        return rows;
    } catch (error) {
        // Handle errors which occur during database query execution
        console.error(error);

        // Render 500.pug if an error occurs
        return res.status(500).render("500");
    }
};

module.exports = { getContinent };