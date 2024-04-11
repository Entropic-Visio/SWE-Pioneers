const express = require("express");
const router = express.Router()
const { User } = require('../models/user.model.js');
const { getUserFromDatabase } = require('../services/user.services.js');

router.get("/", (req, res) => {
    res.render("login"); // render pug view
});

router.post("/", async (req, res) => {
    try {
        if (req.body.name === '' || req.body.email === '' || req.body.password === '' || req.body.confirmPassword === '') {
            throw new Error("Empty Fields");
        }

        const results = await getUserFromDatabase(req.body.email, req.body.password);
        
        console.log("Login Successful")
    } catch {
        console.log("Bad Credentials")
        res.render("login")
    }
});

module.exports = router;