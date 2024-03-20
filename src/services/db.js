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

module.exports = connection;