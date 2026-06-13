const jwt = require('jsonwebtoken');
const blacklistModel = require('../models/blacklist.model');

async function authMiddleware(req, res, next) {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "User not authenticated"
        })
    }

    const isTokenblacklisted = await blacklistModel.findOne({ token })
    if (isTokenblacklisted) {
        return res.status(401).json({
            message: "Token is invalid or has been logged out"
        })
    }
try {
    const decoded= jwt.verify(token, process.env.JWT_SECRET) // decoded is the data we get from then token when we verify it
    req.user = decoded // we are attaching the decoded data to the req object so that we can use it in the next middleware or controller
    next()
}
   catch (err) {
    return res.status(401).json({
        message: "token is expired or invalid"
    })
 }
}

module.exports = {authMiddleware}