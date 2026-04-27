const express = require('express');

const authRouter = require('./routes/auth')
const data = require('./post.json')
const postRouter = require('./routes/post_rout')


const app = express();


app.use(express.json())

app.use('/v1', authRouter.router)

app.use('/v2', postRouter.router)





app.listen(8000, () => console.log("server started"))