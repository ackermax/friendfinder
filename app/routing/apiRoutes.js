var path = require('path');

var apiRoutes = function (app, __dirname, friends) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function(req, res){
        var newFriend = req.body;
        console.log(newFriend);
        res.json(newFriend);
        friends.push(newFriend);
    });
};

module.exports = apiRoutes;