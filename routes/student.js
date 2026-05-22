const express = require('express')
const controller = require('../controllers/student')

const rounter = express.Router()


rounter
    .post('/createStudent', controller.createStudent)
    .get('/students', controller.getStudents)
    .delete('/deleteStudent', controller.deleteStudent)
    .put('/updateStudent/:studentId', controller.updateStudent)
    .post('/searchStudent', controller.searchStudents)
exports.rounter = rounter