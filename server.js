//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//set up Express App
var app = express();
var PORT = process.env.PORT || 3000;

//set up express for data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });