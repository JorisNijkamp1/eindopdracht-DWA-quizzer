const mongoose = require('mongoose');

//Create schema
exports.questionSchema = new mongoose.Schema({
    questions: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
});

//Create model
exports.Question = mongoose.model("Question", this.questionSchema);