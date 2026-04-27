const express = require('express');

const authRouter = require('./routes/auth')
const data = require('./post.json')



const app = express();


app.use(express.json())
app.use('/v1', authRouter.router)


console.log(data);



app.listen(8000, () => console.log("server started"))