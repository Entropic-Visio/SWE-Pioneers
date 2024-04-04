const db = require('./db.js');

async function getAllCountryLanguage() {
    const sql = "SELECT * FROM `countrylanguage`";
    try {
        const [rows, fields] = await db.query(sql);
        console.log(`/langauges: ${rows.length} rows`);
        return rows;
    } catch (error) {
        console.error(error);
        return res.status(500).render("500");
    }
}

async function getCountryByCode(countryCodeAlpha3) { 
    console.log("Country Code Alpha-3:", countryCodeAlpha3);
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

module.exports = {getAllCountryLanguage, getCountryByCode };

//chagened