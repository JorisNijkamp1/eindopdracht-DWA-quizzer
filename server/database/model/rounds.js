const mongoose = require('mongoose');

//Create schema
var roundScheme = roundSchema = new mongoose.Schema({
    // _id: {
    //     type: String,
    //     required: true,
    // },
    ronde_status: {
        type: String,
        // required: true,
    },
    categories: {
        type: Array,
        required: true,
    },
});

//Create model
mongoose.model("Round", roundScheme);

module.exports = roundScheme;
