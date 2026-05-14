const { Request, Response, request, response } = require('express')

const Students = require('../model/student')




exports.getStudents = async (req, res) => {
    try {
        console.log("Testing....");

        const students = await Students.find({}, { name: 1, grade: 1, _id: 0, cgpa: 1 }).sort({ name: 1 }).lean()



        res.status(200).json({
            success: true,
            data: students,
            totalStudents: students.length,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,

        });
    }


};