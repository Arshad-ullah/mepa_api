const express = require('express')
const controller = require('../controllers/student')

const rounter = express.Router()


rounter.get('/student', controller.getStudents)



exports.rounter = rounter