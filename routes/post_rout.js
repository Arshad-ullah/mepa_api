const postController = require('../controllers/post')
const express = require('express')

const router = express.Router()



router.get('/post', postController.getAllPost);



exports.router = router;