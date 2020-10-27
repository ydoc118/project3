/* eslint-disable no-undef */
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const routes = require("./routes/api/discountRoute.js");


// Connect Database
connectDB();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(cors()); 

// Define Routes
app.use(routes)

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
