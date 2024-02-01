const express = require('express');
const path = require('path');

<<<<<<< HEAD
// init app
const app = express();
=======
app.get('/', (req, res) =>
    res.json({ message: 'Docker is TORMENT' })
);
>>>>>>> e8460ee6e0275a5e75e9f8682673eb14f9feb995


// load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// home route
app.get('/', (req, res) => {
    res.render('index');
});

// start server
const port = process.env.PORT || 8080;
<<<<<<< HEAD
app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`)
});
=======
app.listen(port, () => console.log(`app listening on http://localhost:${port}`))
>>>>>>> e8460ee6e0275a5e75e9f8682673eb14f9feb995
