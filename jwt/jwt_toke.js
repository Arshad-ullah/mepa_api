require('dotenv').config();

const jwt = require('jsonwebtoken');

const ACCESS_TOKEN_EXPIRY = '1m';
const REFRESH_TOKEN_EXPIRY = '7d';

function generateAccessToken(payload) {
    const token = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
            expiresIn: ACCESS_TOKEN_EXPIRY,
        }
    );

    return token;
}

function generateRefreshToken(payload) {
    const refreshToken = jwt.sign(
        payload,
        process.env.JWT_REFRESH_SECRET,
        {
            expiresIn: REFRESH_TOKEN_EXPIRY,
        }
    );

    return refreshToken;
}

function verifyAccessToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
}

function verifyRefreshToken(token) {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
}

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    verifyAccessToken,
    verifyRefreshToken,
};