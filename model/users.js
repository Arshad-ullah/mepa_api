const mongoose = require("mongoose")


const userScheme = new mongoose.Schema({})


const User = mongoose.model("users", userScheme)


module.exports = User
