const express = require('express');
const http = require('http')
const authRouter = require('./routes/auth')
const data = require('./post.json')
const postRouter = require('./routes/post_rout')
const medicineRouter = require('./routes/medicine')
const connectDB = require('./config/db')
const chatSocket = require("./sockets/chat_socket");
const studentRouter = require('./routes/student')

const { Server } = require('socket.io')

const teacherRouter = require('./routes/teachers')






const app = express();
app.use(express.json())
app.use('/', authRouter.router)
app.use('/v2', postRouter.router)
app.use('/api', medicineRouter.router)

app.use("/chat", require("./routes/chat_rout"));

app.use('/v2', studentRouter.rounter)

app.use('/teacher', teacherRouter.router)

const server = http.createServer(app)
// Socket setup
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

// init socket events
chatSocket(io);
// db connects..
connectDB()





server.listen(8000, () => console.log("server start..http://localhost:8000"))

// module.exports = app