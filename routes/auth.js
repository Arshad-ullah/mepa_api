const express = require('express')

const authController = require('../controllers/auth')

const validate = require('../middleware/auth_middleware')

const { registerValidation } = require('../validations/validator');

const router = express.Router()




router
    .post('/login', authController.login)
    .post('/register', registerValidation, validate, authController.register)



exports.router = router;