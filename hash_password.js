const bcrypt = require('bcrypt')

const saltRounds = 10

const userPassword = "arshad123"



async function hashPassword1() {

    return await bcrypt.hash(userPassword, saltRounds);

}

module.exports = {
    hashPassword1
};