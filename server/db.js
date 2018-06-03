const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ABCdef123!',
  database: 'airfec',
});

module.exports.connection = connection;

