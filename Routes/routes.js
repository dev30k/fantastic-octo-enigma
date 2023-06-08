const express = require('express');
const controllers = require('../controllers/controller');
const middlewares = require('../middlewares/middleware');

const router = express.Router();

router.post('/tweetRegistration', controllers.createTweetController);

// Error handling middleware
router.use(middlewares.errorHandler);

module.exports = router;