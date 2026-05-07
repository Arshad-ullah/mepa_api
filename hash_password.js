const bcrypt = require('bcrypt')

const saltRounds = 10
async function hashPassword1(userPassword) {
    return await bcrypt.hash(userPassword, saltRounds);

}


async function comparePassword(userPassword) {
    const value = await bcrypt.compare(userPassword, "$2b$10$dZ.bJ6EhCef0vZakAXEv6uuZ4w.wi0ibkRKrVjx7EAM18JSsMSFiC")

    console.log("value.." + value);


    return value


}


module.exports = {
    hashPassword1,
    comparePassword,
};