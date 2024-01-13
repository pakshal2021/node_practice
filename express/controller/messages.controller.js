const path = require('path');
function getmessages(req, res) {
    // res.send("hello test");
    //res.sendFile(path.join(__dirname, "..", "public", "images", "img_girl.jpg"))
    res.render("messages", {
        name: "Pakshal Shah",
        title : "This is Messages Page"
    })
}

function postMessage(req, res){
    console.log("post message");
}

module.exports = {
    getmessages,
    postMessage
}