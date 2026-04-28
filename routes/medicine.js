const express = require('express')
const medicineRouter = require('../controllers/medicin')
const router = express.Router()





router
    .get('/medicines', medicineRouter.getAllMedicine)



exports.router = router;

