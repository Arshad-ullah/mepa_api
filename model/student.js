const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId: {
        type: Number,
        required: true,
        unique: true,
    },

    name: {
        type: String,
        required: true,
        trim: true,
    },

    age: {
        type: Number,
        required: true,
    },

    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true,
    },

    grade: {
        type: String,
        required: true,
    },

    course: {
        type: String,
        required: true,
    },

    semester: {
        type: Number,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    phone: {
        type: String,
        required: true,
    },

    cgpa: {
        type: Number,
        required: true,
        min: 0,
        max: 4,
    },

    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});

const Students = mongoose.model('students', studentSchema);

module.exports = Students;