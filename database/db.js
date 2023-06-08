const mysql = require('mysql');

// Create a connection pool
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Lemuria123',
    database: 'scrapper_systems',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

module.exports = db;