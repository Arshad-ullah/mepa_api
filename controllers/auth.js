const { Request, Response } = require('express')

exports.login = (req = Request, res = Response) => {


    res.status(201).json({
        message: "Login api"

    })

}