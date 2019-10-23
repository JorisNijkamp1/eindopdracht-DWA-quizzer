const mongoose = require('mongoose');

//Create schema
const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: false,
    },
    answer: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: false,
    }
});

//Create model
mongoose.model("Questions", questionSchema);

module.exports = questionSchema;
