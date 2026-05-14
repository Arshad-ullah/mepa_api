const express = require('express');

const authRouter = require('./routes/auth')
const data = require('./post.json')
const postRouter = require('./routes/post_rout')
const medicineRouter = require('./routes/medicine')

const studentRouter = require('./routes/student')
const uri = "mongodb://localhost:27017/admin";


const app = express();
app.use(express.json())
app.use('/v1', authRouter.router)
app.use('/v2', postRouter.router)
app.use('/api', medicineRouter.router)

app.use('v2', studentRouter.rounter)



const mongoose = require('mongoose');







mongoose.connect(uri)
    .then(() => console.log("✅ Successfully connected to MongoDB via Compass URI"))
    .catch(err => console.error("❌ Connection error:", err));






app.listen(8000, () => console.log("server started"))