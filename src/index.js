const express = require('express');
const path = require('path');
const mysql = require('mysql2');

// init app
const app = express();
const port = 5000;

// load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Server assets from 'static' folder
app.use(express.static("static"));

/* Setup database connection */
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST || "localhost",
  user: "user",
  password: "password",
  database: "world",
});

// home route
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/ping", (req, res) => {
    res.send("pong");
  });

  // Returns an array of cities from the database
app.get("/cities", (req, res) => {
    db.query("SELECT * FROM `city`", (err, rows, fields) => {
      console.log(`/cities: ${rows.length} rows`);
      return res.send(rows);
    });
  });

// start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
