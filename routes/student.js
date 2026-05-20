const express = require('express')
const controller = require('../controllers/student')

const rounter = express.Router()


rounter.post('/createStudent', controller.createStudent)



exports.rounter = rounter