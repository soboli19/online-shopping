var mysql = require('mysql');

//var sqlcon = mysql.createConnection({
var pool = mysql.createPool({
    connectionLimit: 100,
  host: "localhost",
  user: "spider",
  password: "Bing05!*",
  database: "zlinedb"
});

//mysqlcon.connect(function(err) {
//  if (err) throw err;
//  console.log("MySQL Connected!");
//});

module.exports = pool;
