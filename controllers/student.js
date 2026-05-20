const { Request, Response, request, response } = require('express')

const Students = require('../model/student');
const { link } = require('joi');


exports.createStudent = async (req = request, res = response) => {
    try {

        const { studentId, name, age, gender, grade, course, semester, email, phone, cgpa, isActive, city } = req.body

        if (
            !studentId ||
            !name ||
            !age ||
            !gender ||
            !grade ||
            !course ||
            !semester ||
            !city ||
            !email ||
            !phone ||
            cgpa === undefined
        ) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }

        // Check existing student
        const existingStudent = await Students.findOne({
            $or: [{ studentId }, { email }],

            // studentId: studentId
        });

        if (existingStudent) {
            return res.status(409).json({
                success: false,
                message: 'Student already exists',
            });
        }

        const student = await Students.create({
            studentId,
            name,
            age,
            gender,
            grade,
            course,
            semester,
            city,
            email,
            phone,
            cgpa,
            isActive,
        });

        return res.status(201).json({
            success: true,
            message: 'Student created successfully',
            data: student,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }

}


// READ data..---------->> 


exports.getStudents = async (req = request, res = response) => {
    try {
        const students = await Students.find()
        return res.status(200).json({
            success: true,
            message: 'Student get successfully',
            data: students,

        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
}




