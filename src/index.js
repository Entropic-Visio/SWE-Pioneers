const express = require('express');
const path = require('path');

// init app
const app = express();


// load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// home route
app.get('/', (req, res) => {
    res.render('index');
});

// start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`)
});
