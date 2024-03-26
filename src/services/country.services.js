const db = require('./db.js');

async function getAllCountries() {
    const sql = "SELECT * FROM `country`";
    try {
        const [rows, fields] = await db.query(sql);
        console.log(`/countries: ${rows.length} rows`);
        return rows;
    } catch (error) {
        console.error(error);
        return res.status(500).render("500");
    }
}

async function getCountryByCode(countryCodeAlpha3) { 
    console.log("City ID:", cityID);
    const sql = "SELECT * FROM `country` WHERE Code = ?"; // Query

    try {
        const [rows, fields] = await db.query(sql, [countryCodeAlpha3]); // Query the Database
        console.log(rows[0]);
        return rows[0]; // Return the Value
    } catch (error) {
        console.error("Error Fetching City by ID: ", error);
        throw new Error("Failed to Fetch City by ID");
    }
}


module.exports = { getAllCountries, getCountryByCode };