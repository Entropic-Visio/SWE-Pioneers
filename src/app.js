const express = require('express');
const path = require('path');

// init app
const app = express();
const port = 5000;


// load view engine
// this renders our views using pug renderer. 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Server assets from 'static' folder
app.use(express.static("assets"));

// routes javascript files.
const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
const pingRoute = require('./routes/ping');
const citiesRoute = require('./routes/cities');
const countriesRoute = require('./routes/countries');
const reportsRoute = require('./routes/reports');
const databaseRoute = require('./routes/database');
const languagesRoute = require('./routes/language')
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');


// we assign the routes to a javascript file which we required above. 
app.use("/", homeRoute);
app.use("/about", aboutRoute);
app.use("/contact", contactRoute);
app.use("/ping", pingRoute);
app.use("/cities", citiesRoute);
app.use("/countries", countriesRoute);
app.use("/reports", reportsRoute);
app.use("/database", databaseRoute);
app.use("/languages",languagesRoute)
app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use((req, res, next) => {
  res.status(404).render('404');
});


// start server
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

// exporting app for jest route testings
module.exports = app;