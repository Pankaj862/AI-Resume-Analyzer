const mongoose = require('mongoose')

const tecnicalQuestionsSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Question is required'],
    },
    intention: {
        type: String,
        required: [true, 'Intention is required'], 
    },
    answer: {
        type: String,
        required: [true, 'Answer is required'],
    },
    }, {
        _id: false
    });

const behavioralQuestionsSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Question is required'],
    },

    intention: {
        type: String,
        required: [true, 'Intention is required'], 
    },
    answer: {
        type: String,
        required: [true, 'Answer is required'],
    }
    
}, {
    _id: false
});

const skillGapsSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: [true, 'Skill is required'],
    },
    severity: {
        type: String,
        enum: ['low', 'medium', 'high'],
        required: [true, 'Severity is required']
    }
}, {
    _id: false
});

const preparationPlanSchema = new mongoose.Schema({
    day: {
        type: Number,
        required: [true, 'Day is required'],
    },
    focus: {
        type: String,
        required: [true, 'Focus area is required'],
    },
    tasks: [
        {
            type: String,
            required: [true, 'Task is required'],
        }
    ]
})


const interviewReportSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        required: [true, 'Job description is required'],
    },

    resume: {
        type: String,
    },

    selfDescription: {
        type: String,
        required: [true, 'Self description is required'],
    },

    matchScore: {
        type: Number,
        max: 100,
        min: 0,
    },
    technicalQuestions: [tecnicalQuestionsSchema],
    behavioralQuestions: [behavioralQuestionsSchema],
    skillGaps: [skillGapsSchema],
    preparationPlan: [preparationPlanSchema],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    }

},{
    timestamps: true
})

const interviewReportModel = mongoose.model("interviewReports", interviewReportSchema)

module.exports = interviewReportModel