const mysql = require('mysql2/promise');
const dbConfig = require('../configs/dbConfigs.js');

// Connection pool for world_database
const worldConnection = mysql.createPool({
    host: dbConfig.WORLD_HOST,
    user: dbConfig.WORLD_USER,
    password: dbConfig.WORLD_PASSWORD,
    database: dbConfig.WORLD_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Connection pool for user_database
const userConnection = mysql.createPool({
    host: dbConfig.USER_HOST,
    user: dbConfig.USER_USER,
    password: dbConfig.USER_PASSWORD,
    database: dbConfig.USER_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = {
    worldConnection,
    userConnection
};
