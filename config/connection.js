var mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burgers_db"
  });

  mysqlConnection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + mysqlConnection.threadId);
  });
  
  module.exports = mysqlConnection;