const teacherController = require('../controllers/teachers')

const express = require('express')

const router = express.Router()

router
    .get('/teacher', teacherController.getTeachers)
    .post('/', teacherController.addTeacher)


exports.router = router;


