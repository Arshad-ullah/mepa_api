const express=require('express');

const app=express();


app.get('/api',(req,res)=>{

    res.send({
        status:true,
        message: "Welcome to Peshawar"
    })
})







app.listen(8000,()=>console.log("server started"))