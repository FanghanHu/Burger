const mysql = require('mysql');

const MYSQL_CONFIG = process.env.JAWSDB_URL || {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: "burgers_db"
};

const pool = mysql.createPool(MYSQL_CONFIG);

module.exports = pool;