const express = require('express')
const controller = require('../controllers/student')

const rounter = express.Router()


rounter.get('/students', controller.getStudents)



exports.rounter = rounter