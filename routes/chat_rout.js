const express = require("express");
const router = express.Router();

const chatController = require("../controllers/chat");

// GET CHAT BETWEEN TWO USERS
router.get(
    "/:userA/:userB",
    chatController.getChatBetweenUsers
);

module.exports = router;