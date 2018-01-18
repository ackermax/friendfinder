//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var friends = require("./app/data/friends.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

//set up Express App
var app = express();
var PORT = process.env.PORT || 3000;

//static folder
app.use(express.static(path.join(__dirname, 'app/public')));

//set up express for data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

apiRoutes(app, __dirname, friends);
htmlRoutes(app, __dirname);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });