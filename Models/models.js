const db = require('../database/db');
const createScrappedData = (tweetData) => {
    const {  name,username, post_date,tweet_text, reply_count, retweet_count, like_count} = tweetData;

    const sql = `INSERT INTO tweets (name,username, post_date,tweet_text, reply_count, retweet_count, like_count) VALUES (?, ?, ?, ?, ?,?,?)`;

    return new Promise((resolve, reject) => {
        db.query(sql, [name,username, post_date,tweet_text, reply_count, retweet_count, like_count], (err, results) => {
            if (err) {
                reject(err);
            }

            resolve(results);
        });
    });
};

module.exports = {createScrappedData}