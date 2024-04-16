const mongoose = require('mongoose');

// Survey model
const surveySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    questions: [{
        question: String,
        options: [String],
    }],
});

module.exports = mongoose.model('Survey', surveySchema);