const { Request, Response } = require('express');

exports.login = (req = Request, res = Response) => {
    res.json({
        name:"Arshad",
        f_name:"Ibrahim Gul",
        age: 25,
        address:"Hangue Karbogha sharif",
        
    });
};



exports.register=(req=Request, res=Response)=>{

    
    res.json({
        user: req.body
    })

    
}