const { Response, Request } = require('express')

const data = require('../post.json')

exports.getAllPost = (req = Request, res = Response) => {
    res.status(200).json({
        posts: data
    })

}

// get specific one..
exports.getPost = (req = Request, res = Response) => {

    const id = +req.body.id

    const obj = data.find((item) => item.id == id)

    res.status(200).json({
        post: obj
    })
}



// create 

exports.addNewPost = (req = Request, res = Response) => {



    data.push(req.body);


    res.status(201).json({
        "successful created": true,
        post: req.body

    })

}

