const express = require('express');
const friendRouter = require('./routers/friends.router');
const messageRouter = require('./routers/messages.router');
const path = require('path');

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log("Listing On Port");
});

app.set("view engine", 'hbs');
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
    const startTime = Date.now();
    next();
    const defference = Date.now() - startTime;
    console.log(defference);
});

app.get('/', (req, res) => {
    res.render("index", {
        title : "testing",
        caption : "This is a testing page"
    });
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use('/friends', friendRouter)

app.use('/message', messageRouter);
