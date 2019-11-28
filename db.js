mysql = require('mysql');

connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'node-app',
});


module.exports = connection;