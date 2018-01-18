var path = require('path');

var htmlRoutes = function(app, __dirname) {
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "/app/public/survey.html"));
    });
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "/app/public/home.html"));
    });
};

module.exports = htmlRoutes;