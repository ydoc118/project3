/* eslint-disable no-undef */
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const connectDB = require('./config/db');
const routes = require("./routes/api/discountRoute.js");
// const routes = require ("./routes/users.js");
// const routes = require ("./routes/auth.js");


// Connect Database
connectDB();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.use(passport.initialize()); 
// app.use(passport.session()); 

app.use(routes)
// Define Routes
// app.use('/api/discountRoute', require ('./routes/api/discountRoute.js'));
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// // Connect to mongodb databases
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/project3", { useNewUrlParser: true, useUnifiedTopology: true })
  // 'mongodb://localhost/vetDiscount',
  // {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
    
  // }
  //  "mongodb://localhost/project3", { useNewUrlParser: true, useUnifiedTopology: true })
// );


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
