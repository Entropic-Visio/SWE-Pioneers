const { worldConnection } = require('./db.js');

async function getAllCountryLanguages() {
    const sql = "SELECT * FROM `countrylanguage`";
    try {
        const [rows, fields] = await worldConnection.query(sql);
        console.log(`/languages: ${rows.length} rows`);
        return rows;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch all country languages");
    }
}

async function getLanguageByCodeAndLanguage(countryCodeAlpha3, language) { 
    console.log("Country Code Alpha-3:", countryCodeAlpha3);
    const sql = "SELECT * FROM `countrylanguage` WHERE CountryCode = ? AND Language = ?";
    try {
        const [rows, fields] = await worldConnection.query(sql, [countryCodeAlpha3, language]);
        console.log(rows[0]);
        return rows[0];
    } catch (error) {
        console.error("Error fetching language by code and language: ", error);
        throw new Error("Failed to fetch language by code and language");
    }
}

module.exports = { getAllCountryLanguages, getLanguageByCodeAndLanguage };
