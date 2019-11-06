const mongoose = require('mongoose');
require('./database/model/games');
require('./database/model/questions');
const db = mongoose.connection;
const Games = mongoose.model('Games');
const Questions = mongoose.model('Questions');
const dbConfig = require('./config');

mongoose.connect(`mongodb://${dbConfig.USERNAME}:${dbConfig.PASSWORD}@${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection succesvol")
    return seedQuestions();
}).then(() => {
    return seedGames();
}).catch(err => {
    console.log(err);
}).then(() => {
    db.close();
});

async function seedGames() {
    await Games.deleteMany();
}

async function seedQuestions() {
    await Questions.deleteMany();

    await Questions.insertMany([
        {
            "question": "Hoe wordt een middagdutje zoals dit bijvoorbeeld in Spanje wordt gehouden genoemd?",
            "answer": "Een siësta",
            "category": "Algemeen"
        },
        {
            "question": "Hoe worden rimpels bij de ooghoeken ook wel genoemd?",
            "answer": "Kraaienpootjes",
            "category": "Algemeen"
        },
        {
            "question": "Welk stripfiguur is als kind is een ketel met toverdrank gevallen?",
            "answer": "Obelix",
            "category": "Algemeen"
        },
        {
            "question": "Wat is de meest gestelde vraag bij de afhaalchinees?",
            "answer": "Sambal bij?",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe noem je het dopen van chips in een sausje?",
            "answer": "Dippen",
            "category": "Eten en Drinken"
        },
        {
            "question": "Uit welk land is het gerecht ravioli afkomstig?",
            "answer": "Italië",
            "category": "Eten en Drinken"
        },
        {
            "question": "Met welke woorden sluit Piet Paulusma het weerbericht af?",
            "answer": "Oant moan",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heet het restaurant waar Spongebob werkt?",
            "answer": "De krokante krab",
            "category": "Film en TV"
        },
        {
            "question": "Waar wordt het programma \"Hello Goodbye\" opgenomen?",
            "answer": "Op Schiphol",
            "category": "Film en TV"
        }
    ])
}



