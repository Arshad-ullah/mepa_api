const express = require('express')
const controller = require('../controllers/student')

const rounter = express.Router()


rounter
    .post('/createStudent', controller.createStudent)
    .post('/getNames', controller.getValues)
    .get('/students', controller.getStudents)
    .delete('/deleteStudent', controller.deleteStudent)
    .put('/updateStudent/:studentId', controller.updateStudent)
    .get('/searchStudent/:search', controller.searchStudents)


exports.rounter = rounter