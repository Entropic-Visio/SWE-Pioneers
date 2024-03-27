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
    console.log("City ID:", cityID);
    const sql = "SELECT * FROM `city` WHERE ID = ?";

    try {
        const [rows, fields] = await db.query(sql, [cityID]);
        console.log(rows[0]);
        return rows[0];
    } catch (error) {
        console.error("Error Fetching City by ID: ", error);
        throw new Error("Failed to Fetch City by ID");
    }
}

async function getCityOrderByPopulationDesc() {
    const sql = "SELECT * FROM `city` ORDER BY `Population` DESC";
    try {
      const [rows, fields] = await db.query(sql);
      console.log(`Cities ordered by population: ${rows.length} rows`);
      return rows;
    } catch (error) {
      console.error("Error ordering cities by population: ", error);
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