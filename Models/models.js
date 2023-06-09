const db = require('../database/db');
const createScrappedData = (tweetData) => {
    const {  name,username, post_date,tweet_text, reply_count, retweet_count, like_count} = tweetData;

    const sql = `INSERT INTO twitter_Data (name,username, post_date,tweet_text, reply_count, retweet_count, like_count) VALUES (?, ?, ?, ?, ?,?,?)`;

    return new Promise((resolve, reject) => {
        db.query(sql, [name,username, post_date,tweet_text, reply_count, retweet_count, like_count], (err, results) => {
            if (err) {
                reject(err);
            }

            resolve(results);
        });
    });
};
const checkDuplicateData = (tweetData) => {
    const {  username} = tweetData;

    const sql = `SELECT COUNT(*) AS count FROM tweets WHERE username = ?`;

    return new Promise((resolve, reject) => {
        db.query(sql, [username], (err, results) => {
            if (err) {
                reject(err);
            }

            resolve(results);
        });
    });
};

module.exports = {createScrappedData,checkDuplicateData}