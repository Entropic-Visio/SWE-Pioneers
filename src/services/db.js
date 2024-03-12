//Import the mysql2 package to work with MySQL databases in a Node.js environment.
const mysql = require('mysql2');
// Import the database configuration from the 'configs' directory. This file contains the database connection settings
const dbConfig = require('../configs/dbConfigs.js');

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSSWORD,
    database: dbConfig.DATABASE,
});

// Export the connection object so it can be used elsewhere in the application. 
// This allows other parts of the application to perform database operations using this single connection.
module.exports = connection;