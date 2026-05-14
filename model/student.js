const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({})

const Students = mongoose.model('students', studentSchema)


module.exports = Students;
