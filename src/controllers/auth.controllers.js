const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const blacklistModel = require('../models/blacklist.model');

/**
 * @name registerusercontroller
 * @desc Controller to handle user registration, excepts username, email, and password from the request body, creates a new user in the database, and returns a success message or an error if the registration fails.
   @access
 */

async function registerusercontroller(req, res) {
  const { username, email, password } = req.body
  if (!username || !email || !password) {
    return res.status(400).json(
      {message: 'Please provide username, email, and password'}
    )
  } 

  const isUseralreadyexists = await userModel.findOne({ 
    $or: [{ username }, { email }]
   })

  if (isUseralreadyexists) {
    return res.status(400).json(
      {message: 'User with the same username or email already exists'}
    )
  }
  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await userModel.create({
    username,
    email,
    password: hashedPassword
  })
  const token = jwt.sign(
    { userId: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1d'} 
  )

  res.cookie('token', token,)

  res.status(201).json({
    message: 'User registered successfully',
    user: {
      id: user._id,
      username: user.username,
      email: user.email
}
})
}

async function Loginusercontroller(req, res) {

    const {email, password }= req.body 

    const user = await userModel.findOne({email})

    if (!user ) {
      return res.status(400).json({
        message: "Invalid mail or password"
      })
    }

    const isPasswordvalid = await bcrypt.compare(
      password,
      user.password
    )

    if(!isPasswordvalid) {
      return res.status(400).json({
        message: "Invalid password or email"
      })
    }

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1d'} 
  )

    res.cookie("token", token)
    res.status(200).json({
      message: "User logged in succesfully",
      user: {
         id: user._id,
      username: user.username,
      email: user.email
      }
    })
}

async function Logoutusercontroller(req, res) {
  const token= req.cookies.token

  if(token) {
    await blacklistModel.create({ token })
  }

  res.clearCookie("token")

  res.status(200).json({
    message: "User logged out successfully"
  })

  
}

async function GetMecontroller(req, res) {
  const user = await userModel.findById(req.user.userId)

  res.status(200).json({
    message: "User information retrieved successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email
    }
  })
}

module.exports = { registerusercontroller, Loginusercontroller, Logoutusercontroller, GetMecontroller }; 
