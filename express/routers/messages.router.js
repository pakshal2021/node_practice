const express = require('express');
const messageController = require('../controller/messages.controller');
const messageRouter = express.Router();

messageRouter.get('/', messageController.getmessages);
messageRouter.post('/', messageController.postMessage);

module.exports = messageRouter;