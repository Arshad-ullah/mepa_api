const postController = require('../controllers/post')
const express = require('express')

const router = express.Router()



router
    .get('/posts', postController.getAllPost)
    .get('/post', postController.getPost)
    .post('/createNewUser', postController.addNewPost)
    .delete('/deletePost', postController.deletePost)
    



exports.router = router;