const express = require("express")
const { authMiddleware } = require("../Middleware/auth.middlewares")
const interviewController = require("../controllers/interview.controller")
const upload = require("../Middleware/file.middleware")

const interviewRouter = express.Router()

/**
 * @route POST /api/interview
 * @description genreate new interview report on the basis of user selfdescription job description and resume
 * @access private
 */



interviewRouter.post("/", authMiddleware,upload.single("resume"), interviewController.generateInterviewReportController)



module.exports= interviewRouter