const express = require("express");

const app = express();

// initiating the User route
const userRoute = require('./routes/User')
app.use('/user', userRoute) //whatever is written in the user route is going to be accessible through the /user endpoint

app.listen(3005, () => {
    console.log("Server running on port 3005")
})