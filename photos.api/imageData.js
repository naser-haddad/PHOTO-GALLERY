var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'password',
  database : 'noewData'
});

connection.connect();

connection.query('SELECT * FROM images', function(error, results,) {
  if (error) throw error;
  console.log(results);
});

connection.end();