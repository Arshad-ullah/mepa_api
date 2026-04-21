const { Request, Response } = require('express');
const { validationResult } = require('express-validator');

exports.login = (req = Request, res = Response) => {
    res.json({
        name: "Arshad",
        f_name: "Ibrahim Gul",
        age: 25,
        address: "Hangue Karbogha sharif",

    });
};




// 1: email, phone, address,password,gender 
exports.register = (req, res) => {


    console.log(req.headers);



    console.log(req.headers["host"]);
    const { email, phone, address, password, gender } = req.body;
    return res.status(201).json({ success: true, message: 'Registered successfully' });
};