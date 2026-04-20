const { Request, Response } = require('express');

exports.login = (req = Request, res = Response) => {
    res.json({
        message: "This is Testing"
    });
};