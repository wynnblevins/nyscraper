const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const app = express();
const db = require('./models');
const mongoose = require('mongoose');
const cheerio = require('cheerio');
const request = require('request');

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlinesReact";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
require('./controllers/articlesController')(app, db);
require('./controllers/notesController')(app, db);
require('./controllers/scraperController')(app, cheerio, request)

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
