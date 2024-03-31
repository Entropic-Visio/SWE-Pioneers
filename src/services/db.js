const mysql = require('mysql2/promise');
const dbConfig = require('../configs/dbConfigs.js');

const connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSSWORD,
    database: dbConfig.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Export the connection object so it can be used elsewhere in the application. 
// This allows other parts of the application to perform database operations using this single connection.
module.exports = connection;