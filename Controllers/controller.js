
const models = require('../models/models');
const { v4: uuidv4 } = require('uuid');

const createTweetController = async (req, res) => {
    const { name,username, post_date,tweet_text, reply_count, retweet_count, like_count } = req.body;

    try {
        await models.createScrappedData({ name,username, post_date,tweet_text, reply_count, retweet_count, like_count });

        res.status(201).json({ message: 'Tweet added created successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {createTweetController}