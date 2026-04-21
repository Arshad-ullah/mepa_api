const express = require("express")
const authController = require('../controllers/auth_controller')
const registerValidation = require('../validator')
const router = express.Router();


router.get('/api', authController.login)
router.post('/register', authController.register)

exports.router = router;