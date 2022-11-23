var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "photogallery",
});

connection.connect();

module.exports = connection;
