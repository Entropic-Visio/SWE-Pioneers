const express = require('express');
const path = require('path');

// init app
const app = express();
const port = 5000;


// load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Server assets from 'static' folder
app.use(express.static("static"));

// routes
const homeRoute = require('./routes/home');
const pingRoute = require('./routes/ping');
const citiesRoute = require('./routes/cities');

app.use("/", homeRoute);
app.use("/ping", pingRoute);
app.use('/cities', citiesRoute);

// start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
