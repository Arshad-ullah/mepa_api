const { Request, Response } = require('express')

const hashPassword = require('../hash_password')

exports.login = async (req = Request, res = Response) => {

    const password = req.body.password;

    const hash_password = await hashPassword.hashPassword1(
        password
    )
    res.status(201).json({
        message: "Login api",
        "hashpassword": hash_password,

    })

}


