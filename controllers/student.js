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

// DELET----->> student delete api

exports.deleteStudent = async (req = request, res = response) => {

    try {
        const studentId = req.body.studentId

        const student = await Students.findOneAndDelete({
            studentId,
        })

        if (!student) return res.status(200).json({

            success: false,
            message: "Not found"

        })

        return res.status(200).json({
            success: true,
            message: 'Student deleted successfully',
            data: student,
        })
    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
}


// UPDATE student api

exports.updateStudent = async (req = request, res = response) => {
    try {
        const { studentId } = req.params;
        console.log("sttudentId.." + studentId);
        const {
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
        } = req.body;

        // Check student exists
        const existingStudent = await Students.findOne({ studentId });

        if (!existingStudent) {
            return res.status(404).json({
                success: false,
                message: 'Student not found',
            });
        }

        // Optional: check email already used by another student
        if (email) {
            const emailExists = await Students.findOne({
                email,
                studentId: { $ne: studentId },
            });

            if (emailExists) {
                return res.status(409).json({
                    success: false,
                    message: 'Email already in use',
                });
            }
        }

        // Update student
        const updatedStudent = await Students.findOneAndUpdate(
            { studentId },
            {
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
            },
            {
                new: true,
                runValidators: true,
            }
        );

        return res.status(200).json({
            success: true,
            message: 'Student updated successfully',
            data: updatedStudent,
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

exports.searchStudents = async (req, res) => {
    try {
        const { search } = req.params;

        if (!search?.trim()) {
            return res.status(200).json({
                success: true,
                message: 'Please provide a search value',
                data: [],
            });
        }

        const orConditions = [
            { name: { $regex: search, $options: 'i' } },
            { course: { $regex: search, $options: 'i' } },
            { city: { $regex: search, $options: 'i' } },
            { gender: { $regex: search, $options: 'i' } },
            { email: { $regex: search, $options: 'i' } },
            { phone: { $regex: search, $options: 'i' } },
        ];

        const numericValue = Number(search);

        if (!isNaN(numericValue)) {
            orConditions.push(
                { semester: numericValue },
                { studentId: numericValue }
            );
        }

        const students = await Students.find({
            $or: orConditions,
        });

        return res.status(200).json({
            success: true,
            message: 'Students retrieved successfully',
            data: students,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


exports.getValues = async (req = request, res = response) => {


    try {

        const { name } = req.body;

        if (!name) return res.status(200).json({
            success: true,
            message: "Name field requred"
        })



        const values = await Students.find({}, { name: 1 })




        return res.status(200).json({
            success: true,
            message: 'Students retrieved successfully',
            data: values,
        });





    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });



    }

}