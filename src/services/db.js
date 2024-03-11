const mysql = require('mysql2');
const dbConfig = require('../configs/dbConfigs.js');

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSSWORD,
    database: dbConfig.DATABASE,
});

module.exports = connection;