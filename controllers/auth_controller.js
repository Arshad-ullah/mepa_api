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
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const formattedErrors = errors.array().reduce((acc, err) => {
            acc[err.path] = err.msg;
            return acc;
        }, {});

        return res.status(422).json({ success: false, errors: formattedErrors });
    }

    const { email, phone, address, password, gender } = req.body;

    // ✅ Your registration logic here (hash password, save to DB, etc.)
    return res.status(201).json({ success: true, message: 'Registered successfully' });
};