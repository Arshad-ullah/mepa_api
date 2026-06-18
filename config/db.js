const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/admin";

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("✅ MongoDB Connected");
    } catch (err) {
        console.error("❌ DB Connection Error:", err);
    }
};

module.exports = connectDB;