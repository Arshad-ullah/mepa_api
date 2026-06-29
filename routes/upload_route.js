const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const uploadController = require("../controllers/upload");

router.post(
    "/upload",
    upload.single("file"),
    uploadController.uploadImage
);

module.exports = router;