const bcrypt = require('bcrypt')

const saltRounds = 10





async function hashPassword1(userPassword) {




    return await bcrypt.hash(userPassword, saltRounds);

}


async function comparePassword(userPassword) {

    const value = await bcrypt.compare(userPassword, "$2b$10$4Oaz/gLHh//1ZAVLKT/COuM/TPzMa0MjzB.zXVCo5Ecl8dJvmM1BK")

    console.log("value.." + value);


}


module.exports = {
    hashPassword1,
    comparePassword,
};