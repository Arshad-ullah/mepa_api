const Message = require("../model/Message");

// GET CHAT BETWEEN TWO USERS
exports.getChatBetweenUsers = async (req, res) => {
    try {
        const { userA, userB } = req.params;

        // create same roomId logic used in socket
        const roomId = [userA, userB].sort().join("_");

        const messages = await Message.find({ roomId })
            .sort({ createdAt: 1 });

        return res.status(200).json({
            success: true,
            roomId,
            count: messages.length,
            data: messages,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};