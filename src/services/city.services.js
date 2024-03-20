const db = require('./db.js');

async function getAllCities() {
    const sql = "SELECT * FROM `city`";
    try {
        const [rows, fields] = await db.query(sql);
        console.log(`/cities: ${rows.length} rows`);
        return rows;
    } catch (error) {
        console.error(error);
        return res.status(500).render("500");
    }
}

/*
Get Specific City using SQL query using the cityID

*/
async function getCityById(cityID) { 
    console.log("City ID:", cityID);
    const sql = "SELECT * FROM `city` WHERE ID = ?"; // Query

    try {
        const [rows, fields] = await db.query(sql, [cityID]); // Query the Database
        console.log(rows[0]);
        return rows[0]; // Return the Value
    } catch (error) {
        console.error("Error Fetching City by ID: ", error);
        throw new Error("Failed to Fetch City by ID");
    }
}

module.exports = { getCityById, getAllCities };