const express = require('express')


const authRouter = express.Router()
const authController = require('../controllers/auth.controllers')
const authMiddleware = require('../Middleware/auth.middlewares')

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post('/register',authController.registerusercontroller)

/**
 * @route POST /api/auth/login
 * @desc Login a user
 * @access Public
 */
 authRouter.post('/login', authController.Loginusercontroller)

 /**
  * @route GET /api/auth/logout
  * @desc Logout a user by blacklisting the token
  * @access Private
  */
 authRouter.get('/logout', authController.Logoutusercontroller)

 /**
  * @route GET /api/auth/get-me
  * @desc Get the authenticated user's information
  * @access Private
  */
authRouter.get('/get-me', authMiddleware.authMiddleware, authController.GetMecontroller)
  
 




module.exports = authRouter