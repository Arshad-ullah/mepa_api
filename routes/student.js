const express = require('express')
const controller = require('../controllers/student')

const rounter = express.Router()


rounter
    .post('/createStudent', controller.createStudent)
    .get('/students', controller.getStudents)

exports.rounter = rounter