const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  port: 3306,
  password: "1111",
  database: "test_shop",
});

module.exports = pool;