const { Response, Request } = require('express')

const data = require('../post.json')

exports.getAllPost = (req = Request, res = Response) => {



    res.status(200).json({
        posts: data
    })


}