const { Request, Response, request, response } = require('express')

const Students = require('../model/student')




exports.getStudents = async (req, res) => {
    try {
        console.log("Testing....");

        const students = await Students.find().sort({ cgpa: 1, grade: 1 })



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