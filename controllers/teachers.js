const { request, response } = require('express')

const pool = require('../services/pg_connect')



exports.getTeachers = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM teachers');
        console.log(result.rows.length);
        res.status(200).json({
            success: true,
            data: result.rows
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// insert teacher..


exports.addTeacher = async (req = request, res = response) => {
    try {
        const { name, gender, age, subject, salary } = req.body;

        const result = await pool.query(
            `INSERT INTO teachers (name, gender, age, subject, salary)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING *`,
            [name, gender, age, subject, salary]
        );

        res.status(201).json({
            success: true,
            message: "Teacher added successfully",
            data: result.rows[0],
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to add teacher",
            error: error.message,
        });
    }
};