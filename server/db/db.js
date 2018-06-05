const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ABCdef123!',
  database: 'airfec',
});

module.exports.con = con;

