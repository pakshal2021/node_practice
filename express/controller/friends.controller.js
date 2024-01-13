const model = require('../model/friends.model');

function getfriend(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = model[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            "error" : "frined not found"
        });
    }
}

function getfriends(req, res) {
    res.json(model);
}

function postfriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            "error": "friend name is missing"
        })
    }
    const newFriend = {
        name : req.body.name,
        id: model.lenght
    }
    model.push(newFriend);
    res.json(model);
}

module.exports = {
    getfriend,
    getfriends,
    postfriend
}
