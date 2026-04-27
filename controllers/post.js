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


// delete psot...



exports.deletePost = (req = Request, res = Response) => {

    const id = +req.body.id;


    const index = data.findIndex((element) => element.id == id)


    if (index != -1) {
        const obj = data.splice(index, 1)

        res.status(200).json({
            "success": true,
            obj
        })

    }
    else {

        res.status(200).json({
            "success": false,
            message: "Not found"
        })
    }

}
