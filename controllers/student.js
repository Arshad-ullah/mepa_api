const { Request, Response, request, response } = require('express')

const Students = require('../model/student')



exports.getStudents = (req = request, res = response) => {

    console.log("Testing....");



    const students = Students.find();


    if (!students) {

        res.status(200).json({
            success: true,
            data: students
        })
    }
}