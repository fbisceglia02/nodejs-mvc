const express = require("express");
const router = express.Router()

// post request to a User
router.get('/', (req, res) => {
    res.send("User: fbisceglia02")
});

module.exports = router;