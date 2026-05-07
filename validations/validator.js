const { body, validationResult } = require('express-validator');

exports.registerValidation = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters')
        .matches(/^[a-zA-Z\s]+$/).withMessage('Name must contain only letters'),

    body('fatherName')
        .notEmpty().withMessage('Father name is required')
        .isLength({ min: 2, max: 50 }).withMessage('Father name must be between 2 and 50 characters')
        .matches(/^[a-zA-Z\s]+$/).withMessage('Father name must contain only letters'),

    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .normalizeEmail(),

    body('phone')
        .notEmpty().withMessage('Phone number is required')
        .matches(/^[0-9]{10,15}$/).withMessage('Phone must be 10 to 15 digits'),

    body('address')
        .notEmpty().withMessage('Address is required')
        .isLength({ min: 10, max: 200 }).withMessage('Address must be between 10 and 200 characters'),

    body('gender')
        .notEmpty().withMessage('Gender is required')
        .isIn(['male', 'female', 'other']).withMessage('Gender must be male, female, or other'),

    body('university')
        .notEmpty().withMessage('University is required')
        .isLength({ min: 3 }).withMessage('University name must be at least 3 characters'),

    body('department')
        .notEmpty().withMessage('Department is required')
        .isLength({ min: 2 }).withMessage('Department name must be at least 2 characters'),

    body('rollNo')
        .notEmpty().withMessage('Roll number is required')
        .isAlphanumeric().withMessage('Roll number must contain only letters and numbers'),

    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
        .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
        .matches(/[0-9]/).withMessage('Password must contain at least one number')
        .matches(/[!@#$%^&*]/).withMessage('Password must contain at least one special character'),
];