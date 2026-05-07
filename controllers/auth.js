
const hashPassword = require('../hash_password')
const { Request, Response, request, response } = require('express')


exports.login = async (req = request, res = response) => {

    const { email, password } = req.body;


    const hash_password = await hashPassword.hashPassword1(password)

    res.status(201).json({
        message: "Login api",
        "matchPassword": hash_password,

    })
}

// register api...
exports.register = async (req, res) => {
    try {

        const password = req.body.password



        // `value` is the clean, validated data — safe to use
        const hashedPassword = await hashPassword.hashPassword1(password);
        // const newUser = await User.create({ ...value, password: hashedPassword });

        return res.status(201).json({ success: true, data: hashedPassword });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};