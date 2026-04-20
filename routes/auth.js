const express=require("express")
const authController=require('../controllers/auth_controller')
const router= express.Router();


router.get('/api',authController.login)



exports.router=router;