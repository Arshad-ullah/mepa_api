const express = require('express')
const medicineRouter = require('../controllers/medicin')
const router = express.Router()





router
    .get('/medicines', medicineRouter.getAllMedicine)
    .post('/createMedicine', medicineRouter.addNewMedicine);

exports.router = router;

