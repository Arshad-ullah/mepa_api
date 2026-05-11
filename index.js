const express = require('express');

const authRouter = require('./routes/auth')
const data = require('./post.json')
const postRouter = require('./routes/post_rout')
const medicineRouter = require('./routes/medicine')
const mongoose = require('mongoose');

const app = express();
app.use(express.json())
app.use('/v1', authRouter.router)
app.use('/v2', postRouter.router)
app.use('/api', medicineRouter.router)





// Replace 'your_database_name' with your actual database name
const uri = "mongodb://localhost:27017/admin";

mongoose.connect(uri)
    .then(() => console.log("✅ Successfully connected to MongoDB via Compass URI"))
    .catch(err => console.error("❌ Connection error:", err));



app.listen(8000, () => console.log("server started"))