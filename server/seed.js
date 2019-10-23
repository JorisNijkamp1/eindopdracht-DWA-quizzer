const mongoose = require('mongoose');
require('./database/games/games');
require('./database/questions/questions');

const dbName = 'quizzer';

const db = mongoose.connection;
const Games = mongoose.model('Games');
const Questions = mongoose.model('Questions');

mongoose.connect(`mongodb://localhost:27017/${dbName}`, {useNewUrlParser: true}).then(() => {
    return seedLocation();
}).then(() => {
    return seedPlayer();
}).catch(err => {
    console.log(err);
}).then(() => {
    db.close();
});


async function seedLocation() {

}

async function seedPlayer() {

}



