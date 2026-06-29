const cloudinary = require("../config/claudnery");

exports.uploadImage = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file selected"
            });
        }

        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "teachers"
        });

        res.json({
            success: true,
            imageUrl: result.secure_url,
            publicId: result.public_id
        });

    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        });
    }
};