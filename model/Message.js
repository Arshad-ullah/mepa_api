const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
    {
        roomId: {
            type: String,
            required: true,
        },

        senderId: {
            type: String,
            required: true,
        },

        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, // adds createdAt + updatedAt
    }
);

module.exports = mongoose.model("Message", messageSchema);