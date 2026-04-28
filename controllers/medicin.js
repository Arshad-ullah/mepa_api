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


exports.addNewMedicine = (req = Request, res = Response) => {

    const { name, detail, image } = req.body;

    if (name == null || detail == null || image == null) return res.json({ message: "Paramter empty" });



    medicines.push(req.body)

    res.status(201).json({
        message: "successfull created",
        data: req.body
    })







}