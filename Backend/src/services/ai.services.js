const { GoogleGenAI } = require("@google/genai");
const interviewReportModel = require("../models/interviewReport.model");
const {z} = require("zod")
const { zodToJsonSchema } = require("zod-to-json-schema")
const geminiResponseSchema = require("../models/geminiresponse.model")

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

const interviewReportSchema = z.object({
    matchScore: z.number().describe("A score between 0 and 100 indicating how well the candidate's profile matches the job describe"),
    technicalQuestions: z.array(z.object({
        question: z.string().describe("The technical question can be asked in the interview"),
        intention: z.string().describe("The intention of interviewer behind asking this question"),
        answer: z.string().describe("how to answer this technical question, what points to cover, what approach to follow etc."),
    })).describe("Technical questions that can be asked in the interview along with their intention and how to answer them"),
    
    behavioralQuestions: z.array(z.object({
        question: z.string().describe("The behavioral question can be asked in the interview"),
        intention: z.string().describe("The intention of interviewer behind asking this question"),
        answer: z.string().describe("how to answer this behavioral question, what points to cover, what approach to follow etc."),
    })).describe("Behavioral questions that can be asked in the interview along with their intention and how to answer them"),
    
    skillGaps: z.array(z.object({
        skill: z.string().describe("The skill which the candidate is lacking"),
         severity: z.enum([ "low", "medium", "high" ]).describe("The severity of this skill gap, i.e. how important is this skill for the job and how much it can impact the candidate's chances")
    })).describe("List of skill gaps in the candidate's profile along with their severity"),

     preparationPlan: z.array(z.object({
        day: z.number().describe("The day number in the preparation plan, starting from 1"),
        focus: z.string().describe("The main focus of this day in the preparation plan, e.g. data structures, system design, mock interviews etc."),
        tasks: z.array(z.string()).describe("List of tasks to be done on this day to follow the preparation plan, e.g. read a specific book or article, solve a set of problems, watch a video etc."),
         title: z.string().describe("The title of the job for which the interview report is generated"),
    })).describe("A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively"),
})



async function generateInterviewReport({resume, selfDescription, jobDescription}) {

 const prompt = `
Act as an expert Technical Interviewer and Career Coach. 
Your task is to analyze the provided Resume and Job Description (JD) to generate a structured Interview Preparation Report.

### INPUT DATA:
- Resume: ${resume}
- Self Description: ${selfDescription}
- Job Description: ${jobDescription}

### GOAL:
Based on the candidate's background and the JD requirements, generate a JSON object that matches the schema exactly.
1. Identify the 'matchScore' based on skills.
2. Generate 'technicalQuestions' and 'behavioralQuestions' tailored to this specific candidate's gaps and strengths.
3. Identify 'skillGaps' (e.g., if the JD asks for .NET but they only know Node.js).
4. Create a 7-day 'preparationPlan' to help this candidate bridge those gaps.

### OUTPUT INSTRUCTIONS:
- Generate ONLY valid JSON.
- DO NOT use keys like 'candidate_details' or 'job_role'.
- USE ONLY these top-level keys: "matchScore", "technicalQuestions", "behavioralQuestions", "skillGaps", "preparationPlan", "title".
- Ensure 'severity' is strictly one of: "low", "medium", or "high".
- No conversational text before or after the JSON.
`;

    

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: geminiResponseSchema,
        }
    })

    console.log("RAW RESPONSE:");
    console.log(response.text);


    return JSON.parse(response.text)

    


}
module.exports =  generateInterviewReport