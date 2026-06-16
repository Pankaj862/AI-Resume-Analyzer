const pdfParse = require("pdf-parse")
const  generateInterviewReport = require("../services/ai.services")
const interviewReportModel = require("../models/interviewReport.model")

async function generateInterviewReportController(req,res) {
    

    const resumeContent =await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText();

    console.log("Resume text length:", resumeContent?.text?.length);
    console.log("Resume preview:");
    console.log(resumeContent?.text?.slice(0, 300));
    
    const {selfDescription, jobDescription} = req.body

    


    const interViewReportByAi = await  generateInterviewReport({
        resume: resumeContent.text,
        selfDescription,
        jobDescription
    })

    

    const interviewReport = await interviewReportModel.create({
        user: req.user.id,
        resume: resumeContent.text,
        selfDescription,
        jobDescription,
        ...interViewReportByAi
    })

    res.status(201).json({
        message: "Interview report genereated",
        interviewReport
    })

    }
module.exports = { generateInterviewReportController}