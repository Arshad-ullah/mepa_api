const express=require('express');

const authRouter=require('./routes/auth')

const app=express();


app.use(express.json())
app.use('/v1',authRouter.router)


app.listen(8000,()=>console.log("server started"))