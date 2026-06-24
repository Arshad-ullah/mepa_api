const teacherController = require('../controllers/teachers')

const express = require('express')

const router = express.Router()



router
    .get('/', teacherController.getTeachers)
    .post('/', teacherController.addTeacher)


exports.router = router;

