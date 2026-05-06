const { Request, Response } = require('express')

const hashPassword = require('../hash_password')

exports.login = async (req = Request, res = Response) => {



    const hash_password = await hashPassword.hashPassword1()


    res.status(201).json({
        message: "Login api",
        "hashpassword": hash_password,

    })

}


