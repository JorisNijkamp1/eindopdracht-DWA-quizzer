const mongoose = require('mongoose');
const TeamAnswer = require('./teamAnswer');

//Create schema
var questionScheme = questionSchema = new mongoose.Schema({
    vraag: {
        type: String,
        required: true,
    },
    antwoord: {
        type: String,
        required: true,
    },
    categorie_naam: {
        type: String,
        required: true
    },
    team_antwoorden: {
        type: [{type: TeamAnswer, ref: "TeamAnswer"}],
    }
});

//Create model
mongoose.model("V", questionScheme);

module.exports = questionScheme;
