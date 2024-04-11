const express = require("express");
const router = express.Router()
const { User } = require("../models/user.model.js")

router.get("/", (req, res) => {
    res.render("register"); // render pug view
});

router.post("/", async (req, res) => {
    try {

        if (req.body.password !== req.body.confirmPassword) {
            throw new Error("Passwords Do Not Match!");
        }

        if (req.body.name === '' || req.body.email === '' || req.body.password === '' || req.body.confirmPassword === '') {
            throw new Error("Empty Fields");
        }

        const user = new User(req.body.name, req.body.email, req.body.password);
        console.log(user);
        
        res.render("login")
    } catch {
        console.log("Error")
        res.render("register")
    }
});

module.exports = router;