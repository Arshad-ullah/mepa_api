const { Request, Response } = require('express')

const medicines = require('../medicine.json')


/**
 * GET /api/medicines
 **/

exports.getAllMedicine = (req = Request, res = Response) => {
    res.status(200).json({
        success: true,
        data: medicines
    })

}