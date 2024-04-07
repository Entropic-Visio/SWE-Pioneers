const { userConnection } = require('./db.js');

async function getUserFromDatabase(email, password) {
    const sql = "SELECT * FROM `user` WHERE Email = ? and Password = ?";
    try {
        const [rows, fields] = await userConnection.query(sql, [email, password]);
        return rows[0]; 
    } catch (error) {
        console.error("Error Failed to Get User ", error);
        throw new Error("Failed to Fetch User");
    }
}

module.exports = { getUserFromDatabase };