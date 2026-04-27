const postController = require('../controllers/post')
const express = require('express')

const router = express.Router()



router
    .get('/posts', postController.getAllPost)
    .get('/post', postController.getPost)



exports.router = router;