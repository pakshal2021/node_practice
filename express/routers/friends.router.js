const express = require('express');
const friendController = require('../controller/friends.controller');
const friendRouter = express.Router();

friendRouter.use((req, res, next) => {
    console.log(req.ip);
    next();
})


friendRouter.get('/', friendController.getfriends)
friendRouter.get('/:friendId', friendController.getfriend);
friendRouter.post('/', friendController.postfriend);

module.exports = friendRouter;