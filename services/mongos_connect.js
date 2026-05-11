const mongoose = require('mongoose');





const uri = "mongodb://localhost:27017/admin";

mongoose.connect(uri)
    .then(() => console.log("✅ Successfully connected to MongoDB via Compass URI"))
    .catch(err => console.error("❌ Connection error:", err));

