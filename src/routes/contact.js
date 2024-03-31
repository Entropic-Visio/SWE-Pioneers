// Import the necessary module.
const express = require("express"); // Import the Express framework to help with creating the server and routing.
const router = express.Router() // Create a new router object to define routes.

// Define a GET route for the root URL ("/") of this router.
router.get("/", (req, res) => {
    res.render("contact");
});
// This makes the route(s) defined in this router accessible from the main application.
module.exports = router;
