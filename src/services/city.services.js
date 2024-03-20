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

async function getCityById(cityID) {
    const sql = "SELECT * FROM `city` WHERE ID = ?";
    try {
        const [results, fields] = await db.query(sql, [cityID]);
        console.log(results[0]);
        return results[0];
    } catch (error) {
        console.error("Error Fetching City by ID: ", error);
        throw new Error("Failed to Fetch City by ID");
    }
}

module.exports = { getCityById, getAllCities };