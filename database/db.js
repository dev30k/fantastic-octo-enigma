const mysql = require('mysql');

// Create a connection pool
const db = mysql.createConnection({
    host: "localhost",
    user: "lemurian_twitter",
    password: "Lemuria123",
    database:"lemurian_scrapper_systems",
});


db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

module.exports = db;