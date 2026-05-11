const bcrypt = require('bcrypt')

const saltRounds = 10
async function hashPassword1(userPassword) {
    return await bcrypt.hash(userPassword, saltRounds);

}


async function comparePassword(userPassword, storePassword) {
    const value = await bcrypt.compare(userPassword, storePassword)

    console.log("value.." + value);


    return value


}


module.exports = {
    hashPassword1,
    comparePassword,
};