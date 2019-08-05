const mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Fjdfrk!!20th',
    database: 'fs-bnb'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Database connected");
    }
});

module.exports = connection;