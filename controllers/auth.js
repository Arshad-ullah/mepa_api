const { Request, Response } = require('express')

const hashPassword = require('../hash_password')
exports.login = async (req = Request, res = Response) => {


    const { email, password } = req.body.password;
    const hash_password = await hashPassword.comparePassword(password)


    res.status(201).json({
        message: "Login api",
        "matchPassword": hash_password,

    })
}


