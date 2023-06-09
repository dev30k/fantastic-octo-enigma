const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./Routes/routes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

// Routes
app.use('/api', router);
app.get('/', (req, res) => res.send('Congratulations you have reached the Twitter Scrapping API!!!')
);
// Start server
app.listen(5000, () => {
    console.log('Server started on port 5000');
});