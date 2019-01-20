// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

var friendData = require("../app/data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================
function findDiff(friend1, friend2) {
    var diff = 0;
    console.log("start of diff", friend1, friend2);
    for (i = 0; i < friend1.length; i++) {
        var delta = friend1[i] - friend2[i];
        if (delta < 0) delta = delta * -1;
        diff = diff + delta;
    }
    console.log(diff);
    return diff;
}

function findCloseFriend(newFriend) {
    // find diff
    console.log("find close friend", newFriend)
    friend = friendData[0].name; // default
    var minDiff = findDiff(newFriend.scores, friendData[0].scores);
    for (var i = 1; i < friendData.length; i++) {
        var newMinDiff = findDiff(newFriend.scores, friendData[i].scores);
        if (newMinDiff < minDiff) {
            minDiff = newMinDiff;
            friend = friendData[i].name;
        }
    }
    console.log("close match", friend)
    return friend;
}

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {
        // console.log("friend posted", req.body);
        var closeFriend = findCloseFriend(req.body);
        friendData.push(req.body);
        //  console.log("total friends", friendData)
        console.log("return closest friend", closeFriend)
        res.json(closeFriend);
    });

};