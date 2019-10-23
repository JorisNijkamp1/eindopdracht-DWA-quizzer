const mongoose = require('mongoose');

//Create schema
exports.gamesSchema = new mongoose.Schema({
    game_room_naam: {
        type: String,
        required: true,
        unique: true,
    },
    game_status: {
        type: String,
        required: true,
    },
    teams: {
        team_naam: {
            type: String,
            required: true,
            unique: true
        },
        team_score: {
            type: Number,
            required: true,
        }
    },
    rondes: {
        ronde_id: {
            type: Number,
            required: true
        },
        ronde_status: {
            type: String,
            required: true,
        },
        ronde_categorie: {
            type: Array,
            required: true
        },
        vragen: {
            vraag: {
                type: String,
                unique: true,
                required: true,
            },
            antwoord: {
                type: String,
                required: true,
            },
            categorie_naam: {
                type: String,
                required: true,
            },
            team_antwoorden: {
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
                    required: true,
                }
            }
        }
    }
});

//Create model
exports.Games = mongoose.model("Games", this.gamesSchema);