const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');

const authRouter = require('./routes/auth');
const postRouter = require('./routes/post_rout');
const medicineRouter = require('./routes/medicine');
const studentRouter = require('./routes/student');
const uri = "mongodb://localhost:27017/admin";
const app = express();
app.use(express.json());
app.use('/v1', authRouter.router);
app.use('/v2', postRouter.router);
app.use('/api', medicineRouter.router);
app.use('/v2', studentRouter.rounter);

// Create HTTP server
const server = http.createServer(app);

// Attach Socket.IO
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Socket Connection
io.on('connection', (socket) => {
    console.log(`✅ User Connected: ${socket.id}`);

    socket.on('message', (data) => {
        console.log('Received:', data["message"]);

        // Send back to all clients
        io.emit('message', data);
    });

    socket.on('disconnect', () => {
        console.log(`❌ User Disconnected: ${socket.id}`);
    });
});

mongoose.connect(uri)
    .then(() => console.log("✅ Successfully connected to MongoDB"))
    .catch(err => console.error("❌ Connection error:", err));

server.listen(8000, () => {
    console.log('🚀 Server running at http://localhost:8000');
});