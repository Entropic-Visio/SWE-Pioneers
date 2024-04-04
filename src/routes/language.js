const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    try{ 
        return res.render("language");
    } catch (error){
        console.error(error);
        return res.status(500).render("500");
    }
});

module.exports = router;