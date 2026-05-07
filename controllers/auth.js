
const hashPassword = require('../hash_password')
const { Request, Response, request, response } = require('express')
exports.login = async (req = request, res = response) => {

    const { email, password } = req.body.password;
    const hash_password = await hashPassword.comparePassword(password)

    res.status(201).json({
        message: "Login api",
        "matchPassword": hash_password,

    })
}




// register api...


//name,fatherName, email,password,phone, address, gender,University, department,Roll_no,
exports.register = (req = request, res = response) => {









    const { name, fatherName, email, phone, address, gender, university, department, rollNo } = req.body




}

