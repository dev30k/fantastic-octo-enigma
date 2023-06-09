const models = require('../Models/models');

const createTweetController = async (req, res) => {
    const { name,username, post_date,tweet_text, reply_count, retweet_count, like_count } = req.body;

    try {
        await models.createScrappedData({ name,username, post_date,tweet_text, reply_count, retweet_count, like_count });

        res.status(201).json({ message: 'Tweet added created successfully' });
    } catch (err) {
        res.status(500).json({ error: err});
    }
};

const checkDuplicateController = async (req,res) =>{
    const {username} = req.body;

    try {
        await models.checkDuplicateData({ username });

        res.status(201).json({ message: 'No duplicate found' });
    } catch (err) {
        res.status(500).json({ error: err});
    }

}

module.exports = {createTweetController,checkDuplicateController}