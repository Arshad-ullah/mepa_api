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