require('dotenv').config();


const jwt = require('jsonwebtoken')



function generateToken(payload) {


    const token = jwt.sign(payload, process.env.JWT_SECRET)

    console.log(token);


    return token




}



module.exports = {
    generateToken
}
