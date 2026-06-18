const Message = require("../model/Message");

module.exports = (io) => {
    io.on("connection", (socket) => {
        console.log("✅ User Connected:", socket.id);

        // ✅ JOIN ROOM (ADD THIS)
        socket.on("join_room", (roomId) => {
            socket.join(roomId);
            console.log(`📥 Joined Room: ${roomId}`);
        });

        // ✅ SEND MESSAGE
        socket.on("message", async (data) => {
            try {
                console.log("Received:", data);

                // 1. Save message in MongoDB
                const newMessage = await Message.create({
                    roomId: data.roomId,
                    senderId: data.senderId,
                    message: data.message,
                });

                // 2. Emit to room
                io.to(data.roomId).emit("message", newMessage);

            } catch (err) {
                console.error("❌ Message Save Error:", err);
            }
        });

        socket.on("disconnect", () => {
            console.log("❌ User Disconnected:", socket.id);
        });
    });
};