const mongoose = require('mongoose');

//Create schema
var teamScheme = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    approved: {
        type: Boolean,
        required: true,
    },
    team_score: {
        type: Number,
        required: true,
    }
});

//Create model
mongoose.model("Team", teamScheme);

module.exports = teamScheme;
