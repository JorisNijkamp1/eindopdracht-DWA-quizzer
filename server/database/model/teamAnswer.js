const mongoose = require('mongoose');

//Create schema
const teamAnswerSchema = new mongoose.Schema({
    team_naam: {
        type: String,
        required: true,
    },
    gegeven_antwoord: {
        type: String,
        required: true,
    },
    correct: {
        type: Boolean,
    }
});

//Create model
mongoose.model("Questions", teamAnswerSchema);

module.exports = teamAnswerSchema;
