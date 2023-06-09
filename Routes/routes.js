const express = require('express');
const controllers = require('../Controllers/controller');
const middlewares = require('../Middlewares/middleware');

const router = express.Router();

router.post('/tweetRegistration', controllers.createTweetController);
router.post('/tweetRegistration/check_duplicate',controllers.checkDuplicateController);

router.use(middlewares.errorHandler);

module.exports = router;