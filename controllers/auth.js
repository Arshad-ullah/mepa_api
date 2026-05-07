
const hashPassword = require('../hash_password')
const { Request, Response, request, response } = require('express')

const token = require('../jwt/jwt_toke')


exports.login = async (req = request, res = response) => {
    const { email, password } = req.body;

    const hash_password = await hashPassword.hashPassword1(password)

    res.status(201).json({
        message: "Login api",
        "matchPassword": hash_password,

    })
}

exports.register = async (req, res) => {
    try {

        const password = req.body.password;

        const hashedPassword = await hashPassword.hashPassword1(password);

        // remove password from token payload
        const { password: _, ...userData } = req.body;



        userData.password = hashedPassword




        userData.token = token.generateToken(userData);

        return res.status(201).json({
            success: true,
            user: userData

        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};