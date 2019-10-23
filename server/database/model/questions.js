const mongoose = require('mongoose');

//Create schema
const questionSchema = new mongoose.Schema({
    question: {
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
mongoose.model("Questions", questionSchema);

module.exports = questionSchema;
