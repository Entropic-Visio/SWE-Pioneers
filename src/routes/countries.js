// Modules
const express = require("express");
const router = express.Router()
const mysql = require('mysql2');
const db = require('../services/db.js');

// Leave Router "/" as it is set up in index.js or else you'll have to write e.g /countries/countries to access this route. 
router.get("/", (req, res) => {
    db.query("SELECT * FROM `country`", (err, rows, fields) => { // query database to reterieve all countries
      
      if (err) {
        console.error(err)
        return res.status(500).json({ error: "Internal Server Error"});
      }
      console.log(`/country: ${rows.length} rows`); // redundant line tbh we can remove. just prints number of rows not needed.
      return res.send(rows); // respond by sending all rows in database
    });
});

module.exports = router; // module.exports the above code to the router which handles "routing".