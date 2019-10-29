const mongoose = require('mongoose');
require('./database/model/games');
require('./database/model/questions');
const dbName = 'quizzer';
const db = mongoose.connection;
const Games = mongoose.model('Games');
const Questions = mongoose.model('Questions');
const dbConfig = require('./config');

mongoose.connect(`mongodb://${dbConfig.USERNAME}:${dbConfig.PASSWORD}@${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection succesvol")
    return seedGames();
}).then(() => {
    return seedQuestions();
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
            "question": "Hoeveel zijdes heeft een dobbelsteen?",
            "answer": "6",
            "category": "Algemeen"
        },
        {
            "question": "Wat roepen Amerikaanse kinderen die langs de deuren gaan met Halloween?",
            "answer": "Trick or treat",
            "category": "Algemeen"
        },
        {
            "question": "In welke maand begint de herfst?",
            "answer": "September",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt een wond genoemd dat is ontstaan door verbranding van de huid?",
            "answer": "Een brandwond",
            "category": "Algemeen"
        },
        {
            "question": "Waar is je hart spreekwoordelijk gemaakt als je geen gevoel hebt?",
            "answer": "Van steen",
            "category": "Algemeen"
        },
        {
            "question": "Welk attractie bedoelen de Engelsen met rollercoaster?",
            "answer": "Een achtbaan",
            "category": "Algemeen"
        },
        {
            "question": "Hoe heet de vriend van de pop Barbie?",
            "answer": "Ken",
            "category": "Algemeen"
        },
        {
            "question": "Welke datum valt een schrikkeldag?",
            "answer": "29-feb",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt de spaarkaart van supermarkt Albert Heijn genoemd?",
            "answer": "Bonuskaart",
            "category": "Algemeen"
        },
        {
            "question": "Hoe heet de pop van Wiske uit Suske en Wiske?",
            "answer": "Schanulleke",
            "category": "Algemeen"
        },
        {
            "question": "Wat is een drollenvanger?",
            "answer": "Een broek",
            "category": "Algemeen"
        },
        {
            "question": "Wat is de kleinste euromunt?",
            "answer": "1 Cent",
            "category": "Algemeen"
        },
        {
            "question": "Waarvoor staat de afkorting OV in de OV-chipkaart?",
            "answer": "Openbaar Vervoer",
            "category": "Algemeen"
        },
        {
            "question": "Wat gooi je om als je een heel ander leven begint?",
            "answer": "Het roer",
            "category": "Algemeen"
        },
        {
            "question": "Hoe heet de meest bekende zoekmachine op het internet?",
            "answer": "Google",
            "category": "Algemeen"
        },
        {
            "question": "In welke maand begint de lente?",
            "answer": "Maart",
            "category": "Algemeen"
        },
        {
            "question": "Hoeveel dagen heeft de maand augustus?",
            "answer": "31",
            "category": "Algemeen"
        },
        {
            "question": "Welke vogels vallen spreekwoordelijk van het dak wanneer het warm is?",
            "answer": "Mussen",
            "category": "Algemeen"
        },
        {
            "question": "Het tegenoverstelde van groeien is?",
            "answer": "Krimpen",
            "category": "Algemeen"
        },
        {
            "question": "Wat heb je niet meer als je blut bent?",
            "answer": "Geld",
            "category": "Algemeen"
        },
        {
            "question": "Waarin zit iemand die moet \"zitten\" of \"brommen\"?",
            "answer": "De gevangenis",
            "category": "Algemeen"
        },
        {
            "question": "Waar is iemand met claustrofobie bang voor?",
            "answer": "Kleine ruimtes",
            "category": "Algemeen"
        },
        {
            "question": "Wat springt er figuurlijk over als je verliefd bent?",
            "answer": "Een vonk",
            "category": "Algemeen"
        },
        {
            "question": "Welke ster is overdag aan de hemel te zien?",
            "answer": "De zon",
            "category": "Algemeen"
        },
        {
            "question": "Waaraan is een shopoholic verslaafd?",
            "answer": "Winkelen",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt een looprek voor oudere mensen ook wel genoemd?",
            "answer": "Een rolator",
            "category": "Algemeen"
        },
        {
            "question": "Wat wordt gedoeld met een huis van bewaring?",
            "answer": "Een gevangenis",
            "category": "Algemeen"
        },
        {
            "question": "Wat zijn mocassins?",
            "answer": "Schoenen",
            "category": "Algemeen"
        },
        {
            "question": "Hoe noem je een stof die een schadelijke invloed heeft op een organisme?",
            "answer": "Gif",
            "category": "Algemeen"
        },
        {
            "question": "Hoe worden zaterdag en zondag samen vaak genoemd?",
            "answer": "Weekend / weekeinde",
            "category": "Algemeen"
        },
        {
            "question": "Waarvoor staat de O bij een KNO-arts?",
            "answer": "Oor",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt duizend miljoen genoemd?",
            "answer": "Een miljard",
            "category": "Algemeen"
        },
        {
            "question": "Hoeveel uur duurt een etmaal",
            "answer": "24",
            "category": "Algemeen"
        },
        {
            "question": "Waarvoor zijn mensen bang met kynofobie?",
            "answer": "Honden",
            "category": "Algemeen"
        },
        {
            "question": "Wat is de middelste kleur van de Nederlandse vlag?",
            "answer": "Wit",
            "category": "Algemeen"
        },
        {
            "question": "In welk lichaamsdeel vind je een hamer, aambeeld en stijgbeugel?",
            "answer": "In het oor",
            "category": "Algemeen"
        },
        {
            "question": "Over welke maand wordt gezegd dat hij doet wat hij wil?",
            "answer": "April",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt het gekleurde gedeelte van de oog genoemd?",
            "answer": "De iris",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt de tablet PC van Apple genoemd?",
            "answer": "Ipad",
            "category": "Algemeen"
        },
        {
            "question": "Hoe heet de kortste en dikste vinger van de hand?",
            "answer": "Duim",
            "category": "Algemeen"
        },
        {
            "question": "Op welke datum wordt tweede kerstdag gevierd?",
            "answer": "26-dec",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt het reinigen van de ruimtes tussen de tanden met een draadje genoemd?",
            "answer": "Flossen",
            "category": "Algemeen"
        },
        {
            "question": "Naar welke Romeinse god is de maand maart vernoemd?",
            "answer": "Mars",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt het lees- en schrijfalfabet voor blinden genoemd?",
            "answer": "Braille",
            "category": "Algemeen"
        },
        {
            "question": "Welke kleur hebben de harten en ruiten in een kaartspel?",
            "answer": "Rood",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt de angst om een uitdaging niet goed te volbrengen genoemd?",
            "answer": "Faalangst",
            "category": "Algemeen"
        },
        {
            "question": "Welke crème wordt aangebracht ter bescherming tegen zonlicht?",
            "answer": "Zonnebrandcrème",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt een vakantie genoemd die kort van tevoren wordt geboekt?",
            "answer": "Last minute",
            "category": "Algemeen"
        },
        {
            "question": "Hoe heet de vrouw van William, prins van het Verenigd Koninkrijk? ",
            "answer": "Kate (Catherine) Middleton ",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt de spelbegeleider in een casino genoemd? ",
            "answer": "Een Croupier ",
            "category": "Algemeen"
        },
        {
            "question": "Wat wordt er bedoeld met de afkorting \"M.A.W.\"? ",
            "answer": "Met Andere Woorden ",
            "category": "Algemeen"
        },
        {
            "question": "Wie schreef onder andere de boeken \"de Eetclub en \"Koorts\"? ",
            "answer": "Saskia Noort ",
            "category": "Algemeen"
        },
        {
            "question": "Welke toets vind je op een toetsenbord tussen de \"E\" en de \"T\"? ",
            "answer": "R ",
            "category": "Algemeen"
        },
        {
            "question": "Hoe noem je de broer van je moeder? ",
            "answer": "Oom ",
            "category": "Algemeen"
        },
        {
            "question": "Hoe heet een keuken op een schip? ",
            "answer": "Kombuis ",
            "category": "Algemeen"
        },
        {
            "question": "Met welk apparaat maak je gaatjes in papier, karton of folie? ",
            "answer": "Een perforator ",
            "category": "Algemeen"
        },
        {
            "question": "Uit hoeveel letters bestaat het Latijns alfabet? ",
            "answer": "26 ",
            "category": "Algemeen"
        },
        {
            "question": "Door welke kleur bril kijk je wanneer je alles optimistisch bekijkt? ",
            "answer": "Een roze bril ",
            "category": "Algemeen"
        },
        {
            "question": "Welke taal wordt officieel in Argentinië gesproken? ",
            "answer": "Spaans ",
            "category": "Algemeen"
        },
        {
            "question": "Hoe heet de fruitetende dino uit de spellen van Super Mario? ",
            "answer": "Yoshi ",
            "category": "Algemeen"
        },
        {
            "question": "Wat wordt er met pH uitgedrukt? ",
            "answer": "Een zuurtegraad ",
            "category": "Algemeen"
        },
        {
            "question": "Hoe heet het grootste eiland van de Canarische Eilanden? ",
            "answer": "Tenerife ",
            "category": "Algemeen"
        },
        {
            "question": "Welke parasiet staat bekend om het kunnen overbrengen van de zieke van Lyme? ",
            "answer": "De teek ",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt een lening genoemd die iemand aangaat om een huis te kopen? ",
            "answer": "Een hypotheek ",
            "category": "Algemeen"
        },
        {
            "question": "Met hoeveel dobbelstenen wordt het spel Yahtzee gespeeld? ",
            "answer": "Vijf ",
            "category": "Algemeen"
        },
        {
            "question": "Hoe worden de haartje op je oogleden genoemd? ",
            "answer": "Wimpers ",
            "category": "Algemeen"
        },
        {
            "question": "Welke kleur hebben de ruiten in een kaartspel? ",
            "answer": "Rood ",
            "category": "Algemeen"
        },
        {
            "question": "Hoeveel dagen heeft de maand januari? ",
            "answer": "31 dagen ",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt het eerste jaar van de middelbare school genoemd? ",
            "answer": "Brugklas ",
            "category": "Algemeen"
        },
        {
            "question": "Met hoeveel pionnen begint iedere speler bij het bordspel \"mens erger je niet\"? ",
            "answer": "Vier ",
            "category": "Algemeen"
        },
        {
            "question": "Waar is het gras spreekwoordelijk altijd groener? ",
            "answer": "Bij de buren ",
            "category": "Algemeen"
        },
        {
            "question": "Welke grondstof kun je in het bordspel van de Kolonisten van Catan, naast klei, erts, graan en hout, nog meer ontvangen? ",
            "answer": "Wol ",
            "category": "Algemeen"
        },
        {
            "question": "Welke kleur heeft het poppetje in het logo van Android, het besturingsysteem van Google? ",
            "answer": "Groen ",
            "category": "Algemeen"
        },
        {
            "question": "In welk tv-programma kom je Tommy, Ienie Minie en Pino tegen? ",
            "answer": "Sesamstraat ",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt de grote oorlog ook wel genoemd? ",
            "answer": "De eerste wereldoorlog ",
            "category": "Algemeen"
        },
        {
            "question": "Welk automerk bracht de automodellen Golf, Polo en Passat uit? ",
            "answer": "Volkswagen ",
            "category": "Algemeen"
        },
        {
            "question": "Welke maand wordt ook wel hooimaand genoemd? ",
            "answer": "Juli ",
            "category": "Algemeen"
        },
        {
            "question": "Welke kleur heeft geld spreekwoordelijk wanneer er geen belasting over is betaald? ",
            "answer": "Zwart ",
            "category": "Algemeen"
        },
        {
            "question": "Wat is het tegenoverstelde van conservatief?",
            "answer": "Progressief",
            "category": "Algemeen"
        },
        {
            "question": "In welk lichaamsdeel vind je het aambeeld?",
            "answer": "In het oor",
            "category": "Algemeen"
        },
        {
            "question": "Welke Amerikaanse krant heeft als bijnaam The Old Gray Lady?",
            "answer": "The New York Times",
            "category": "Algemeen"
        },
        {
            "question": "Hoe noem je een trap die spiraalvormig omhoog gaat?",
            "answer": "Een wenteltrap",
            "category": "Algemeen"
        },
        {
            "question": "Wat maakt pestosaus groen?",
            "answer": "basilicum",
            "category": "Algemeen"
        },
        {
            "question": "Wie schreef het boek \"alleen op de wereld\"?",
            "answer": "Hector Malot",
            "category": "Algemeen"
        },
        {
            "question": "Hoe heet de woning van de paus?",
            "answer": "Vaticaan",
            "category": "Algemeen"
        },
        {
            "question": "Hoeveel zintuigen heeft een mens?",
            "answer": "5",
            "category": "Algemeen"
        },
        {
            "question": "Voor hoeveel procent bestaat een menselijk lichaam uit water?",
            "answer": "70%",
            "category": "Algemeen"
        },
        {
            "question": "Hoe heet het duizendste deel van een kilogram?",
            "answer": "Een gram",
            "category": "Algemeen"
        },
        {
            "question": "Van welke godsdienst is de Koran het heilige boek?",
            "answer": "Islam",
            "category": "Algemeen"
        },
        {
            "question": "Hoe noem je benen met naar buiten wijzende knieën?",
            "answer": "O-benen",
            "category": "Algemeen"
        },
        {
            "question": "Wat is de gewichtseenheid van diamanten?",
            "answer": "Karaat",
            "category": "Algemeen"
        },
        {
            "question": "Welke kleur heeft de jas van een chirurg meestal?",
            "answer": "Groen",
            "category": "Algemeen"
        },
        {
            "question": "Uit hoeveel tekens kan één sms-bericht maximaal bestaan?",
            "answer": "160",
            "category": "Algemeen"
        },
        {
            "question": "Wat is een ander woord voor Toendra?",
            "answer": "Mossteppe",
            "category": "Algemeen"
        },
        {
            "question": "Hoeveel dagen doet de aarde erover om 1 keer om de zon te draaien?",
            "answer": "365",
            "category": "Algemeen"
        },
        {
            "question": "Waarmee wordt normaal gesproken geschreven op een whiteboard?",
            "answer": "Viltstiften",
            "category": "Algemeen"
        },
        {
            "question": "Wat is een ander woord voor alpinist?",
            "answer": "Bergbeklimmer",
            "category": "Algemeen"
        },
        {
            "question": "Hoe noem je een jaar met 366 dagen?",
            "answer": "Een schrikkeljaar",
            "category": "Algemeen"
        },
        {
            "question": "Wat is het Italiaanse woord voor meester of leraar?",
            "answer": "Maestro",
            "category": "Algemeen"
        },
        {
            "question": "Wie schreef het sprookje \"de kleine zeemeermin\"?",
            "answer": "Hans Christiaan Andersen",
            "category": "Algemeen"
        },
        {
            "question": "Wat zijn de eerste 6 letters van een Frans en Belgisch toetsenbord?",
            "answer": "Azerty",
            "category": "Algemeen"
        },
        {
            "question": "In welk jaar is electronicabedrijf Apple (o.a. bekend van de Iphone) opgericht?",
            "answer": "1976",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt de mand onder een hete luchtballon genoemd?",
            "answer": "Gondel",
            "category": "Algemeen"
        },
        {
            "question": "Wie bedacht Suske en Wiske?",
            "answer": "Willy Vandersteen",
            "category": "Algemeen"
        },
        {
            "question": "Hoe heet het Heilige boek van de joden?",
            "answer": "Thora",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt het genre dat uit gedichten bestaat genoemd?",
            "answer": "Poëzie",
            "category": "Algemeen"
        },
        {
            "question": "49. Door welk kanaal zijn Afrika en Azië van elkaar gescheiden?",
            "answer": "Suezkanaal",
            "category": "Algemeen"
        },
        {
            "question": "Hoe noem je iemand die met roofvogels werkt?",
            "answer": "Een valkenier",
            "category": "Algemeen"
        },
        {
            "question": "Hoe noem je de persoon die een testament voor iemand opmaakt?",
            "answer": "Notaris",
            "category": "Algemeen"
        },
        {
            "question": "Wat is de Engelse benaming voor producten die niet eetbaar zijn?",
            "answer": "Non-food",
            "category": "Algemeen"
        },
        {
            "question": "Welk beroep oefent een zielenknijper uit?",
            "answer": "Psychiater",
            "category": "Algemeen"
        },
        {
            "question": "Wat is een ander woord voor pedometer?",
            "answer": "Stappenteller",
            "category": "Algemeen"
        },
        {
            "question": "Welk sterrenbeeld zit tussen Ram en Tweelingen in?",
            "answer": "Stier",
            "category": "Algemeen"
        },
        {
            "question": "Wat is meestal de hoogste en de laagste kaart in een kaartspel?",
            "answer": "De aas",
            "category": "Algemeen"
        },
        {
            "question": "Wat is het volume van een kilo water?",
            "answer": "Een liter",
            "category": "Algemeen"
        },
        {
            "question": "Wat is een ander woord voor goochelaar?",
            "answer": "Illusionist",
            "category": "Algemeen"
        },
        {
            "question": "Wat is een ander woord voor blauwe plek?",
            "answer": "Hematoom",
            "category": "Algemeen"
        },
        {
            "question": "Hoe heet het vriendinnetje van Superman?",
            "answer": "Loïs Lane",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt rondslingerend afval genoemd?",
            "answer": "Zwerfvuil",
            "category": "Algemeen"
        },
        {
            "question": "Naar welke Romeinse god is zaterdag vernoemd?",
            "answer": "Saturnus",
            "category": "Algemeen"
        },
        {
            "question": "Welke kleur heeft zuurstofarm bloed?",
            "answer": "Blauw",
            "category": "Algemeen"
        },
        {
            "question": "Met welke letter worden zachte potloden aangeduid?",
            "answer": "B",
            "category": "Algemeen"
        },
        {
            "question": "Wat is het tegenovergestelde van analoog?",
            "answer": "Digitaal",
            "category": "Algemeen"
        },
        {
            "question": "Hoe noem je scouts van 7 tot 11 jaar?",
            "answer": "Welpen",
            "category": "Algemeen"
        },
        {
            "question": "Hoe noemt men het zachtjes golven van water?",
            "answer": "Kabbelen",
            "category": "Algemeen"
        },
        {
            "question": "Hoeveel weken is een vrouw zwanger?",
            "answer": "38",
            "category": "Algemeen"
        },
        {
            "question": "Wat is en zeeduivel?",
            "answer": "Een vis",
            "category": "Algemeen"
        },
        {
            "question": "Wat is een ander woord voor stofwisseling?",
            "answer": "Metabolisme",
            "category": "Algemeen"
        },
        {
            "question": "Van welk woord is het woord \"gel\" afgeleid?",
            "answer": "Gelatine",
            "category": "Algemeen"
        },
        {
            "question": "Het franse woord voor halsketting is?",
            "answer": "Collier",
            "category": "Algemeen"
        },
        {
            "question": "Hoe word een luchtspiegeling ook wel genoemd?",
            "answer": "Fata Morgana",
            "category": "Algemeen"
        },
        {
            "question": "Waardoor worden jeugdpuistjes voornamelijk veroorzaakt?",
            "answer": "Hormonen",
            "category": "Algemeen"
        },
        {
            "question": "Welke planeet is de grootste in ons zonnestelsel?",
            "answer": "Jupiter",
            "category": "Algemeen"
        },
        {
            "question": "In welk jaar werd de euro ingevoerd?",
            "answer": "2002",
            "category": "Algemeen"
        },
        {
            "question": "Wat wordt bedoeld met het woord absentie?",
            "answer": "Afwezigheid",
            "category": "Algemeen"
        },
        {
            "question": "Wat komt in China na iemands achternaam?",
            "answer": "De voornaam",
            "category": "Algemeen"
        },
        {
            "question": "Wat bedoeld men met broodheer?",
            "answer": "De werkgever",
            "category": "Algemeen"
        },
        {
            "question": "Welk bedrijf is uitgever van Hello Kitty?",
            "answer": "Sanrio",
            "category": "Algemeen"
        },
        {
            "question": "Wat is de figuurlijke kleur van een huismerk?",
            "answer": "Wit",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt een flat met meer dan 12 verdiepingen ook wel genoemd?",
            "answer": "Wolkenkrabber",
            "category": "Algemeen"
        },
        {
            "question": "Hoe heet de schrijfster van Pipi Langous",
            "answer": "Astrid Lindgren",
            "category": "Algemeen"
        },
        {
            "question": "Welke feestdag wordt 40 dagen na Pasen gevierd?",
            "answer": "Hemelvaartsdag",
            "category": "Algemeen"
        },
        {
            "question": "Wat zijn Courier, Comic Sans en Arial?",
            "answer": "Lettertypes",
            "category": "Algemeen"
        },
        {
            "question": "In welk lichaamsdeel zit de meniscus?",
            "answer": "Knie",
            "category": "Algemeen"
        },
        {
            "question": "Van welke stof in het zwembadwater kun je rode ogen krijgen?",
            "answer": "Chloor",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt een vakantiehuis in Frankrijk vaak genoemd?",
            "answer": "Een gîte",
            "category": "Algemeen"
        },
        {
            "question": "Wat is de gemiddelde brandtijd van een waxinelichtje?",
            "answer": "4 uur",
            "category": "Algemeen"
        },
        {
            "question": "Wat is de meest gespeelde vorm van het kaartspel poker?",
            "answer": "Texas Hold ‘em",
            "category": "Algemeen"
        },
        {
            "question": "Welk speelstuk kan bij stratego als enige de bom uitschakelen?",
            "answer": "een mineur",
            "category": "Algemeen"
        },
        {
            "question": "Welke kleur zie je spreekwoordelijk wanneer je jaloers bent?",
            "answer": "Groen",
            "category": "Algemeen"
        },
        {
            "question": "Uit hoeveel velden bestaat een schaakbord?",
            "answer": "64",
            "category": "Algemeen"
        },
        {
            "question": "Welke kaart kun je naast een kanskaart nog meer moeten pakken bij het bordspel Monopoly?",
            "answer": "Algemeen Fonds",
            "category": "Algemeen"
        },
        {
            "question": "Welke puzzel werd in 1979 voor het eerst gepubliceerd onder de naam Number Place?",
            "answer": "Sudoku",
            "category": "Algemeen"
        },
        {
            "question": "Met hoeveel speelkaarten wordt bridge gespeeld?",
            "answer": "52",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt een licht strafbaar feit genoemd?",
            "answer": "een overtreding",
            "category": "Algemeen"
        },
        {
            "question": "Welke maand wordt ook wel sprokkelmaand genoemd?",
            "answer": "Februari",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt een tijdelijke stoornis van de hersenen genoemd?",
            "answer": "Een black-out",
            "category": "Algemeen"
        },
        {
            "question": "Wat is de bekendste en meest voorkomende alcohol?",
            "answer": "Ehtanol",
            "category": "Algemeen"
        },
        {
            "question": "Waarvoor is iemand van coulrofobie bang?",
            "answer": "Clowns",
            "category": "Algemeen"
        },
        {
            "question": "Hoe worden chemische bestrijdigsmiddelen vaak genoemd?",
            "answer": "pesticiden",
            "category": "Algemeen"
        },
        {
            "question": "De verzamelnaam voor middelen ter verhoging van lichamelijke schoonheid of hygiëne is?",
            "answer": "Cosmetica",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt het versieren van nagels vaak genoemd?",
            "answer": "Nail art",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt de verstoring van het slaap-waakritme genoemd?",
            "answer": "Jetlag",
            "category": "Algemeen"
        },
        {
            "question": "In welke stad in België word driejaarlijks de kattenstoet gehouden?",
            "answer": "Ieper",
            "category": "Algemeen"
        },
        {
            "question": "Hoe heet de mascotte van Landal Greenparks?",
            "answer": "Bollo de Beer",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt een geseponeerde rechtszaak genoemd?",
            "answer": "Sepot",
            "category": "Algemeen"
        },
        {
            "question": "Wat is het hardste materiaal van het menselijk lichaam?",
            "answer": "Tandglazuur",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt een bijvoegsel of toevoegsel van een boek genoemd?",
            "answer": "Addendum",
            "category": "Algemeen"
        },
        {
            "question": "Welke bloedgroep komt het meest voor?",
            "answer": "O",
            "category": "Algemeen"
        },
        {
            "question": "Hoeveel amandelen hebben de meeste mensen?",
            "answer": "3",
            "category": "Algemeen"
        },
        {
            "question": "Van welke plant wordt de zalf calendula gemaakt?",
            "answer": "De goudsbloem",
            "category": "Algemeen"
        },
        {
            "question": "Hoe noem je het overblijfsel van een religieus voorwerp?",
            "answer": "Een relikwie",
            "category": "Algemeen"
        },
        {
            "question": "Wat bestudeert een osteoloog?",
            "answer": "Botten",
            "category": "Algemeen"
        },
        {
            "question": "Wat wordt bedoeld met horripilatie of spasmodermie?",
            "answer": "Kippenvel",
            "category": "Algemeen"
        },
        {
            "question": "Hoe heet de voorzitter van de Provinciale Staten?",
            "answer": "De commissaris van de koningin",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt het genoemd als je links- en rechtshandig bent?",
            "answer": "Ambidextrie",
            "category": "Algemeen"
        },
        {
            "question": "In welk jaar werd de website Google gelanceerd?",
            "answer": "1998",
            "category": "Algemeen"
        },
        {
            "question": "Waarvan is Vodafone de afkorting?",
            "answer": "Voice Data Fone",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt de vorm van graffiti genoemd waarbij de muren zo worden schoongemaakt dat er een patroon zichtbaar wordt?",
            "answer": "Reverse graffiti",
            "category": "Algemeen"
        },
        {
            "question": "Wat wordt bedoeld met proscopie?",
            "answer": "De toekomst voorspellen",
            "category": "Algemeen"
        },
        {
            "question": "Uit hoeveel kaarten bestaat een set tarotkaarten?",
            "answer": "78",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt de studie naar China en alles wat met China te maken heeft genoemd?",
            "answer": "Sinologie",
            "category": "Algemeen"
        },
        {
            "question": "Waar ben je bang voor wanneer je last hebt van brontofobie?",
            "answer": "Onweer",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt oogkunde ook wel genoemd?",
            "answer": "Optometrie",
            "category": "Algemeen"
        },
        {
            "question": "Waar werkt een kompel?",
            "answer": "In de mijnen",
            "category": "Algemeen"
        },
        {
            "question": "Waar houd een podoloog zich mee bezig?",
            "answer": "voeten",
            "category": "Algemeen"
        },
        {
            "question": "Bij welk spel kan men de Bermuda Bowl winnen?",
            "answer": "Bridge",
            "category": "Algemeen"
        },
        {
            "question": "Hoe noemen we een toevallige uitvinding?",
            "answer": "Serendipiteit",
            "category": "Algemeen"
        },
        {
            "question": "Welk bekend bordspel is bedacht door Klaus Teuber?",
            "answer": "De kolonisten van Catan",
            "category": "Algemeen"
        },
        {
            "question": "Wat is ontstoken wanneer je last hebt van gingivitis?",
            "answer": "Het tandvlees",
            "category": "Algemeen"
        },
        {
            "question": "Wie schreef de boeken van Mary Poppins?",
            "answer": "Pamela Lyndon Travers",
            "category": "Algemeen"
        },
        {
            "question": "Waarvoor staat de afkorting Aldi, het voordelige supermarktbedrijf?",
            "answer": "Albrecht Discount",
            "category": "Algemeen"
        },
        {
            "question": "Hoe wordt de troefnegen bij klaverjassen genoemd?",
            "answer": "De nel",
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
            "question": "In welk land zijn de meeste smaken schepijs uitgevonden?",
            "answer": "Italië",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt erwtensoep ook wel genoemd?",
            "answer": "Snert",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat at Popeye om snel spierballen te kweken?",
            "answer": "Spinazie",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat wordt spreekwoordelijk nooit zo heet gegeten als het wordt opgediend?",
            "answer": "Soep",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe heten pastasliertjes voor in de soep?",
            "answer": "Vermicelli",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe noem je een opgerolde haring met daarin een augurk?",
            "answer": "Een rolmops",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke saus krijg je bij de patat wanneer je een \"patatje met\" besteld?",
            "answer": "Mayonaise",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke bittere groente is het minst populair onder kinderen?",
            "answer": "Spruitjes",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke snack bestaat uit een stuk kaas met daar omheen bladerdeeg en paneermeel",
            "answer": "Kaassoufflé",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt boter met tuinkruiden genoemd?",
            "answer": "Kruidenboter",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe luidt de slogan van McDonald’s?",
            "answer": "I’m Lovin’ It",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat zijn kadetjes, bagels en scones?",
            "answer": "Broodjes",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt appelmoes met stukjes appel genoemd?",
            "answer": "Appelcompote",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt gehakt omwikkeld met spek genoemd?",
            "answer": "Een slavink",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat krijg je als je mais poft?",
            "answer": "Popcorn",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt een blokje kristalsuiker genoemd?",
            "answer": "Een suikerklontje",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat zijn harlekijntjes, griotten en tikkels?",
            "answer": "Dropjes",
            "category": "Eten en Drinken"
        },
        {
            "question": "Waarmee wordt cola gemixt bij een BeCo?",
            "answer": "Beerenburg",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke snack wordt in Vlaanderen ook wel curryworst genoemd?",
            "answer": "De frikandel",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke drank wordt gemaakt van melk, suiker en cacaopoeder?",
            "answer": "Chocolademelk",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe heet lange dunne Chinese vermicelli?",
            "answer": "Mie",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welk fastfoodketen verkoopt de Whopper?",
            "answer": "Burger King",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke pasta heeft de vorm van een strikje?",
            "answer": "Farfalle",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe noem je een maaltijd die tegelijk een ontbijt en een lunch is?",
            "answer": "Brunch",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat is de Italiaanse naam voor een combinatie van gedroogde vruchten?",
            "answer": "Tuttifrutti",
            "category": "Eten en Drinken"
        },
        {
            "question": "Op welke dag van de week wordt er het meest gesnackt?",
            "answer": "Zaterdag",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt een klein vleeskroketje genoemd?",
            "answer": "Een bitterbal",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke gele saus bevat kerrie en uien?",
            "answer": "Joppiesaus",
            "category": "Eten en Drinken"
        },
        {
            "question": "Uit welk land is het gerecht paëlla afkomstig?",
            "answer": "Spanje",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt een hamburger met een plakje kaas genoemd?",
            "answer": "Een cheeseburger",
            "category": "Eten en Drinken"
        },
        {
            "question": "Van wat voor deeg worden saucijzenbroodjes gemaakt?",
            "answer": "Bladerdeeg",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke candybar heeft een kokosvulling?",
            "answer": "Bounty",
            "category": "Eten en Drinken"
        },
        {
            "question": "Maak de zin af: Snoep verstandig, eet een …",
            "answer": "Appel",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat is de verzamelnaam voor melk en producten die bereid zijn uit rauwe melk?",
            "answer": "Zuivel",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke kleur heeft een raketijsje naast rood en oranje nog meer?",
            "answer": "Geel",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe heet het gerecht waarbij kleine stukjes voedsel worden ondergedompeld in een warme of hete vloeistof?",
            "answer": "Fondue",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt gemalen vlees meestal genoemd?",
            "answer": "Gehakt",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt vanille-ijs met warme chocoladesaus erover genoemd?",
            "answer": "Dame blanche",
            "category": "Eten en Drinken"
        },
        {
            "question": "Een ander woord voor shoarmabroodje is?",
            "answer": "Pitabroodje",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt de voedselbereiding boven heet vuur of gloeiende kolen genoemd?",
            "answer": "Barbecueën",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke kleur heeft de likeur Pisang Ambon?",
            "answer": "Groen",
            "category": "Eten en Drinken"
        },
        {
            "question": "Van welke kool wordt zuurkool gemaakt?",
            "answer": "Witte kool",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt de eerste maaltijd van de dag genoemd?",
            "answer": "Het ontbijt",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe worden gefrituurde aardappelreepjes genoemd?",
            "answer": "Patat of friet",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke kleur heeft het vruchtvlees van een avocado?",
            "answer": "Geel",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe worden Spaanse aperitiefhapjes genoemd?",
            "answer": "Tapas",
            "category": "Eten en Drinken"
        },
        {
            "question": "Een vaak versierd cakeje dat in een klein papieren bakje word geserveerd?",
            "answer": "Cupcake",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke kleur heeft het laagje glazuur bovenop een tompoes meestal?",
            "answer": "Roze",
            "category": "Eten en Drinken"
        },
        {
            "question": "Dit gereedschap gebruik je om een dun plakje van een kaas af te snijden",
            "answer": "Kaasschaaf",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe worden de instructies genoemd die men moet volgen om een gerecht te maken?",
            "answer": "Een recept",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat zit er naast aardappelen en uien nog meer in hutspot?",
            "answer": "Wortel",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt een mengsel van 2 of meer alcoholische drankjes genoemd?",
            "answer": "Een cocktail",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat is meestal heeft hoofdbestanddeel in snoep?",
            "answer": "Suiker",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt de saus genoemd die gebruikt wordt over een salade?",
            "answer": "Dressing",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welk merk ijs heeft onder andere de smaken double trouble, cookie dough en chunky monkey?",
            "answer": "Ben en Jerry’s",
            "category": "Eten en Drinken"
        },
        {
            "question": "Bij welke temperatuur kookt water?",
            "answer": "100 graden celcius",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt een dunne pannenkoek genoemd?",
            "answer": "Een flensje",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe heet het snoepgoed dat bestaat uit gehard suiker op een stokje?",
            "answer": "Een lolly",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt het spel genoemd waarbij men in de lucht hangende stukken ontbijtkoek zonder handen van het draad af moet happen?",
            "answer": "Koekhappen",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welk drinken wordt ook wel de witte motor genoemd?",
            "answer": "Melk",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welk snoepgoed wordt in het Frans Barbe á papa genoemd?",
            "answer": "Suikerspin",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat ontstaat wanneer suiker wordt verhit?",
            "answer": "Karamel",
            "category": "Eten en Drinken"
        },
        {
            "question": "welk diepvriesproduct wordt vaak belegd met nepkaas?",
            "answer": "Pizza",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt geroosterd brood met ham en kaas ertussen genoemd?",
            "answer": "Een tosti",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe heet een gevulde dubbelgevouwen pizza?",
            "answer": "Pizza Calzone",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke smaak proef je met de voorkant van de tong?",
            "answer": "Zoet",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat voor vlees zit er in een doorsnee kroket?",
            "answer": "Paardenvlees",
            "category": "Eten en Drinken"
        },
        {
            "question": "In welk deel van de sinaasappel zit de meeste vitamine C?",
            "answer": "In de schil",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt Brussels lof meestal genoemd?",
            "answer": "Witlof",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoeveel beschuitjes zitten er tegenwoordig meestal in een pak beschuit?",
            "answer": "13",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat is de bekendste Turkse broodsoort?",
            "answer": "Pide",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt het grillgerecht genoemd dat bestaat uit friet bedekt met shoarma en daar overheen een laag kaas?",
            "answer": "Een kapsalon",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat is het hoofdbestanddeel van mayonaise",
            "answer": "Olie",
            "category": "Eten en Drinken"
        },
        {
            "question": "Waar komt het drankje ouzo vandaan?",
            "answer": "Griekenland",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt een patatje met aan beide kanten een frikadel genoemd?",
            "answer": "Een patatje waterfiets",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat is een ander woord voor roerbakken?",
            "answer": "Wokken",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke kool werd vroeger gegeten om scheurbuik te voorkomen?",
            "answer": "Zuurkool",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke kleur heeft 30% van de M&M’s in een normale zak M&M’s?",
            "answer": "Bruin",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat is voor meer dan de helft van de wereldbevolking het belangrijkste voedsel?",
            "answer": "Rijst",
            "category": "Eten en Drinken"
        },
        {
            "question": "Van welk fruit is de krent afkomstig?",
            "answer": "Druif",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke koeken worden in Amsterdam ook wel moesselientjes genoemd?",
            "answer": "Roze koeken",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welk snoepgoed moet je en cola toevoegen om een fonteineffect te krijgen?",
            "answer": "Pepermunt",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat is het hoofdingrediënt van bier?",
            "answer": "Water",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke kaassoort zit tussen jong en oud in?",
            "answer": "Belegen kaas",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt de combinatie van limonadesiroop, yoghurt en vanillevla genoemd?",
            "answer": "Vlaflip",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke lekkernij wordt in het Engels \"Dutch Doughnut\" genoemd?",
            "answer": "De oliebol",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt hete chocolademelk met rum genoemd?",
            "answer": "Tote Tante",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt de salade van aardappelblokjes, rundvlees, appel en augurk genoemd?",
            "answer": "Huzarensalade",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welk europees snoepgoed wordt gemaakt van het wortelsap van de zoethoutplant?",
            "answer": "Drop",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke reep werd tot 1990 onder de naar \"Marathon\" verkocht?",
            "answer": "Snickers",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat is een ander woord voor karnemelk?",
            "answer": "Botermelk",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt een pilsje met een jonge jenever ernaast genoemd?",
            "answer": "Een kopstoot",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welk land is de grootste producent van rijst?",
            "answer": "China",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt de kooktechniek genoemd waarbij waterdamp het eten gaart?",
            "answer": "Stomen",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe noem je iemand die geen alcohol drinkt?",
            "answer": "Geheelonthouder",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke ziekte wordt veroorzaakt door een gebrek aan vitamine C?",
            "answer": "Scheurbuik",
            "category": "Eten en Drinken"
        },
        {
            "question": "47. Hoe wordt een tosti met ananas ertussen genoemd?",
            "answer": "Een tosti Hawaï",
            "category": "Eten en Drinken"
        },
        {
            "question": "Waarvoor staat de afkorting kJ, waarmee de voedingswaarde wordt uitgedrukt?",
            "answer": "KiloJoule",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe worden groenten genoemd die zonder verhitting gegeten kunnen worden?",
            "answer": "Rauwkost",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat zijn opperdoezers?",
            "answer": "Aardappels",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat is de verzamelnaam voor zetmeel en suikers?",
            "answer": "Koolhydraten",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat maakt pestosaus groen?",
            "answer": "Basilicum",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke vrucht wordt traditioneel gegeten op bloedworst?",
            "answer": "Appel",
            "category": "Eten en Drinken"
        },
        {
            "question": "Van welk vlees is saté ajam gemaakt?",
            "answer": "Kippenvlees",
            "category": "Eten en Drinken"
        },
        {
            "question": "Van welk merk is Fanta?",
            "answer": "Coca Cola",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt de eerste jonge haring die geschikt is voor consumptie in Nederland genoemd?",
            "answer": "Hollandse Nieuwe",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke room betekend letterlijk \"zure room\" ?",
            "answer": "Crème fraîche",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke peul wordt bij roti vaak vervangen door de lijkende maar goedkopere sperzieboon?",
            "answer": "Kousenband",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt witte wijn gemaakt van blauwe druiven genoemd?",
            "answer": "Blanc de noirs",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt het bedruipen van vlees met het braadvocht genoemd om uitdrogen te voorkomen?",
            "answer": "Arrosseren",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt het eetbare gedeelte van een vrucht genoemd?",
            "answer": "Vruchtvlees",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat zijn de 2 hoofdingrediënten van een Quiche Lorraine?",
            "answer": "Spek en kaas",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welk dessert betekend in het Italiaans letterlijk \"trek mij omhoog\"?",
            "answer": "Tiramisu",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat zijn minestrone, snert en borsjtsj?",
            "answer": "Soepen",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welk Italiaans nagerecht betekend letterlijk \"gekookte room\"?",
            "answer": "Panna cotta",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat wordt bij kaas aangegeven met het +getal?",
            "answer": "Het vetpercentage",
            "category": "Eten en Drinken"
        },
        {
            "question": "Van welke dieren is witvlees afkomstig?",
            "answer": "Gevogelte",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt een restje eten dat over is van de vorige dag genoemd?",
            "answer": "Een kliekje",
            "category": "Eten en Drinken"
        },
        {
            "question": "Bij welke kooktechniek wordt het voedsel kort gekookt en daarna in koud water gelegd zodat het kookproces wordt onderbroken?",
            "answer": "Blancheren",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat wordt bij Moules-frites bij de friet geserveerd?",
            "answer": "Mosselen",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat is het hoofdbestanddeel van Haagse bluf?",
            "answer": "Eiwit",
            "category": "Eten en Drinken"
        },
        {
            "question": "Een stamppot gemaakt van aardappelen, sperziebonen en witte bonen noemen we?",
            "answer": "Blote billetjes in het gras",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke alcohol wordt gebruikt in alcoholische dranken?",
            "answer": "Ethanol",
            "category": "Eten en Drinken"
        },
        {
            "question": "welk dieet is ontwikkeld doo voedingswetenschapper Alan Howard?",
            "answer": "Het Cambridgedieet",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt azijn dat minder dan 4% azijnzuur bezit genoemd?",
            "answer": "Edik",
            "category": "Eten en Drinken"
        },
        {
            "question": "Onder welke naam is ouwel beter bekend?",
            "answer": "Eetpapier",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe worden in de alcohol ingelegde rozijnen genoemd?",
            "answer": "Boerenjongens",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welk stofje komt vrij in je hersenen als je chocolade eet?",
            "answer": "Endorfine",
            "category": "Eten en Drinken"
        },
        {
            "question": "Van welke cactussoort wordt tequila gemaakt?",
            "answer": "Agave",
            "category": "Eten en Drinken"
        },
        {
            "question": "Op welk snoepgoed stond de allereerste streepjescode ooit?",
            "answer": "Kauwgom",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt de wittige uitslag die op chocolade kan zitten genoemd?",
            "answer": "Vetbloem",
            "category": "Eten en Drinken"
        },
        {
            "question": "Van welk Turks gerecht betekend de naam \"gebakken vlees\"?",
            "answer": "Kebab",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe worden Italiaanse bitterkoekjes genoemd?",
            "answer": "Amaretti",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke kleur hadden rijpe tomaten vroeger?",
            "answer": "Geel",
            "category": "Eten en Drinken"
        },
        {
            "question": "Uit welk land komen poffertjes oorspronkelijk?",
            "answer": "Frankrijk",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke in chocolade gedipte wafeltjes worden in New York verkocht als Dutch Moon Cookies?",
            "answer": "Stroopwafels",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat is het minimum alcoholgehalte bij likeur?",
            "answer": "15%",
            "category": "Eten en Drinken"
        },
        {
            "question": "Van welke inktvissen zijn Calamares afkomstig?",
            "answer": "Pijlinktvissen",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat is de benaming voor iemand die geen zoogdieren en vogels eet maar wel vis?",
            "answer": "Pescotariër",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoeveel Michelinsterren kan een restaurant maximaal krijgen?",
            "answer": "3",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat was het eerste voedsel dat met behulp van de magnetron is bereid?",
            "answer": "Popcorn",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoeveel procent vruchtensap moet er in een waterijsje verwerkt zijn om van vruchtenijs te kunnen spreken? ",
            "answer": "20% ",
            "category": "Eten en Drinken"
        },
        {
            "question": "Bij welke voedselbereidingtechniek wordt ook wel een kukusan gebruikt? ",
            "answer": "Stomen ",
            "category": "Eten en Drinken"
        },
        {
            "question": "Onder welke naam kennen we het gerecht lahmacun beter? ",
            "answer": "De Turkse pizza ",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt een stof genoemd die 2 stoffen helpt mengen die normaal niet of moeilijk mengen? ",
            "answer": "Een emulgator ",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke additieven worden aangegeven met de E-nummer 100 tot 180? ",
            "answer": "Kleurstoffen ",
            "category": "Eten en Drinken"
        },
        {
            "question": "In welke Belgische stad vind jaarlijks het chocoladefestival Choco-Laté plaats? ",
            "answer": "Brugge ",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt het serviesgoed aan boord van een schip ook wel genoemd? ",
            "answer": "komaliwant ",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat wordt bedoeld met vinificatie? ",
            "answer": "wijnbereiding ",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe heet het gereedschap waarmee je ronde bolletjes uit voedsel kunt halen? ",
            "answer": "Parisienneboor ",
            "category": "Eten en Drinken"
        },
        {
            "question": "Welke appel is de meeste geteelde appel in Nederland? ",
            "answer": "Elstar ",
            "category": "Eten en Drinken"
        },
        {
            "question": "Wat is de duurste koffie ter wereld? ",
            "answer": "Kopi Loewak of Civetkoffie ",
            "category": "Eten en Drinken"
        },
        {
            "question": "Hoe wordt het omhullen van ganache door een laagje gesmolten chocolade genoemd? ",
            "answer": "Enroberen",
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
        },
        {
            "question": "Hoe noem je een blunder die gemaakt wordt tijdens een tv-opname?",
            "answer": "Een blooper",
            "category": "Film en TV"
        },
        {
            "question": "Wie presenteert het programma \"Ik hou van Holland?\"",
            "answer": "Linda de Mol",
            "category": "Film en TV"
        },
        {
            "question": "Welke kleur is Bert van poppenduo Bert en Ernie?",
            "answer": "Geel",
            "category": "Film en TV"
        },
        {
            "question": "In welk tv-programma ruilen 2 jongeren 5 dagen van leven?",
            "answer": "Puberruil",
            "category": "Film en TV"
        },
        {
            "question": "Op welke zender is in Nederland de serie \"Glee\" te zien?",
            "answer": "RTL 5",
            "category": "Film en TV"
        },
        {
            "question": "Wie speelde rol van Captain Jack Sparrow in de films Pirates of the Caribbean",
            "answer": "Johnny Depp",
            "category": "Film en TV"
        },
        {
            "question": "In welke tv-serie had Will Smith zijn eerste grote rol?",
            "answer": "The Fresh prince of Bel-Air",
            "category": "Film en TV"
        },
        {
            "question": "Wat is de naam van het ruimteactiefiguur uit Toy Story?",
            "answer": "Buzz Lightyear",
            "category": "Film en TV"
        },
        {
            "question": "Hoe lang sliep Doornroosje?",
            "answer": "100 jaar",
            "category": "Film en TV"
        },
        {
            "question": "Wie is de meest bekende personage van Rowan Atkinson?",
            "answer": "Mr. Bean",
            "category": "Film en TV"
        },
        {
            "question": "Hoe noemt het hertje Bambi zijn vriendje het stinkdier?",
            "answer": "Bloempje",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heet de gorilla in de film King Kong?",
            "answer": "Kong",
            "category": "Film en TV"
        },
        {
            "question": "In welk programma was Pittige tijden, een persiflage op GTST te zien?",
            "answer": "Telekids",
            "category": "Film en TV"
        },
        {
            "question": "Wat is een ander woord voor praatprogramma?",
            "answer": "Talkshow",
            "category": "Film en TV"
        },
        {
            "question": "Wie presenteert het programma \"Boer zoekt vrouw\"?",
            "answer": "Yvon Jaspers",
            "category": "Film en TV"
        },
        {
            "question": "Waarvoor staat de afkorting EO bij de Nederlandse Publieke Omroep?",
            "answer": "Evangelische Omroep",
            "category": "Film en TV"
        },
        {
            "question": "In welk programma probeert Bert van Leeuwen ruzie tussen familieleden op te lossen?",
            "answer": "Het familiediner",
            "category": "Film en TV"
        },
        {
            "question": "In welke soap vind je de personages Rick Forrester, Pamela Douglas en Hope Logan?",
            "answer": "The Bold and the Beautiful",
            "category": "Film en TV"
        },
        {
            "question": "Welk bekend Japans typetje wordt door Wendy van Dijk gespeeld?",
            "answer": "Ushi",
            "category": "Film en TV"
        },
        {
            "question": "Wat is de achternaam van Ron in de films van Harry Potter?",
            "answer": "Wemel",
            "category": "Film en TV"
        },
        {
            "question": "Hoe wordt een film genoemd met als doel de kijker te laten lachen?",
            "answer": "Een komedie",
            "category": "Film en TV"
        },
        {
            "question": "Wie presenteerd het programma Help, mijn man is klusser?",
            "answer": "John Williams",
            "category": "Film en TV"
        },
        {
            "question": "Waaraan is Hippe Smurf te herkennen in de tekenfilmserie De Smurfen?",
            "answer": "De bloem op zijn muts",
            "category": "Film en TV"
        },
        {
            "question": "Wat is de naam van de pratende ezel uit Shrek?",
            "answer": "Donkey",
            "category": "Film en TV"
        },
        {
            "question": "Welke smurf begint zijn zin meestal met \"ik haat…\"?",
            "answer": "Moppersmurf",
            "category": "Film en TV"
        },
        {
            "question": "Wie is de grote vijand van Peter Pan?",
            "answer": "Kapitein Haak",
            "category": "Film en TV"
        },
        {
            "question": "Welke acteur is vooral bekend van de kaskrakers Rambo en Rocky?",
            "answer": "Sylvester Stallone",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heet de zoon van John de Mol en Willeke Alberti?",
            "answer": "Johnny de Mol",
            "category": "Film en TV"
        },
        {
            "question": "Welke presentator staat bekend om zijn spreuk \"Hier wordt ik niet vrolijk van",
            "answer": "Rob Geus",
            "category": "Film en TV"
        },
        {
            "question": "In welke animatieserie kom je Kenny, Stan, Kyle en Eric tegen?",
            "answer": "South Park",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heet het konijnenvriendje van Bambi?",
            "answer": "Stampertje",
            "category": "Film en TV"
        },
        {
            "question": "Door welke serie kreeg Reinout Oerlemans landelijke bekendheid?",
            "answer": "Goede tijden slechte tijden",
            "category": "Film en TV"
        },
        {
            "question": "In welk programma heb je als kandidaat 100 tegenspelers?",
            "answer": "1 tegen 100",
            "category": "Film en TV"
        },
        {
            "question": "In welk tv-programma kom je Tommy, Ienie Minie en Pino tegen?",
            "answer": "Sesamstraat",
            "category": "Film en TV"
        },
        {
            "question": "Welke sport staat centraal in de film Black Swan?",
            "answer": "Ballet",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heet de postbode uit de tvserie Zaai?",
            "answer": "Siemen Sietsema",
            "category": "Film en TV"
        },
        {
            "question": "Wat is de naam van de allereerste K3-film?",
            "answer": "K3 en het magische medaillon",
            "category": "Film en TV"
        },
        {
            "question": "Wat voor dier is Amika in de gelijknamige tv-serie?",
            "answer": "Een paard",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heet de robot uit de kinderserie Bassie en Adriaan?",
            "answer": "Robin",
            "category": "Film en TV"
        },
        {
            "question": "Wat is de naam van de reality soap rondom het gezin van Jean-Marie Pfaff?",
            "answer": "De Pfaffs",
            "category": "Film en TV"
        },
        {
            "question": "Wat is de opvolger van de analoge televisie?",
            "answer": "Digitale televisie",
            "category": "Film en TV"
        },
        {
            "question": "In welke serie komen de personages Vera Prins, Iris de Graaf en Ab Keizer voor?",
            "answer": "Baantjer",
            "category": "Film en TV"
        },
        {
            "question": "Wat roepen de Barbapapa’s vaak voordat ze van gedaante veranderen?",
            "answer": "Huub huub Barbatruc",
            "category": "Film en TV"
        },
        {
            "question": "In welk programma komt de rubriek de Jakhalzen voor?",
            "answer": "De wereld draait door",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heet de secretaresse van M in de James Bond-films?",
            "answer": "Miss Moneypenny",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heet de televisieprijs voor de beste reclamespot?",
            "answer": "De gouden Loekie",
            "category": "Film en TV"
        },
        {
            "question": "Welke actrice speelde Carry Bradshaw in de serie Sex and the city?",
            "answer": "Sarah Jessica Parker",
            "category": "Film en TV"
        },
        {
            "question": "Op welk boek is de film \"Cast Away\" uit 2000 gebaseerd?",
            "answer": "Robinson Crusoe",
            "category": "Film en TV"
        },
        {
            "question": "Wie zong de titel song voor de film Titanic",
            "answer": "Celine Dion",
            "category": "Film en TV"
        },
        {
            "question": "Wie speelt meneer Aart in de kinderserie Sesamstraat",
            "answer": "Aart Staartjes",
            "category": "Film en TV"
        },
        {
            "question": "Welk bedrijf maakte als eerst een volledige 3d-animatiefilm?",
            "answer": "Pixar",
            "category": "Film en TV"
        },
        {
            "question": "Wat kan de pinguïn Mumble uit de film Happy Feet erg goed?",
            "answer": "Tapdansen",
            "category": "Film en TV"
        },
        {
            "question": "Wat is de naam van de bewaker die bij de Jerry Springer Show gewelddadige gasten uit elkaar haalde?",
            "answer": "Steve (Wilkos)",
            "category": "Film en TV"
        },
        {
            "question": "Wat is de naam van de rode race-auto uit de animatiefilm \"Cars\"?",
            "answer": "Bliksem McQueen",
            "category": "Film en TV"
        },
        {
            "question": "Wat wordt bedoeld met de uitdrukking Hakuna Matata, bekend uit de Leeuwenkoning?",
            "answer": "Heb geen zorgen",
            "category": "Film en TV"
        },
        {
            "question": "Uit welk Noord-Brabants dorp kwamen de hangjongeren uit New Kids?",
            "answer": "Maaskantje",
            "category": "Film en TV"
        },
        {
            "question": "In wie veranderde Miley Stewart wanneer zij haar blonde pruik opzette?",
            "answer": "Hannah Montana",
            "category": "Film en TV"
        },
        {
            "question": "Wat is de naam van het tweede deel uit The Matrix trilogie?",
            "answer": "The Matrix Reloaded",
            "category": "Film en TV"
        },
        {
            "question": "Wat zijn bruivels, stoerders en vavels in de film The Lord of the Rings?",
            "answer": "Hobbits",
            "category": "Film en TV"
        },
        {
            "question": "Onder welke naam is de filmprijs Academy Award beter bekend?",
            "answer": "Oscar",
            "category": "Film en TV"
        },
        {
            "question": "Welke actrice speelde Lara Croft in de filmreeks van Tomb Raider?",
            "answer": "Angelina Jolie",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heet het meisje dat gevangen zat in de put bij de film The Ring?",
            "answer": "Samara Morgan",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heten de hoofdpersonages in de serie The King of Queens?",
            "answer": "Doug & Carrie Heffernan",
            "category": "Film en TV"
        },
        {
            "question": "Met wie vormt Rámon Verkoeijen een duo in het tv-programma Klusjesmannen?",
            "answer": "Sander Lantinga",
            "category": "Film en TV"
        },
        {
            "question": "Welke actrice speelde Monica Gellar in de serie Friends?",
            "answer": "Courteney Cox",
            "category": "Film en TV"
        },
        {
            "question": "Welke actrice speelt Eva van Dongen in de politieserie Flikken Maastricht?",
            "answer": "Angela Schijf",
            "category": "Film en TV"
        },
        {
            "question": "Wie presenteerde sinds 2011 de spelshow Lotto Weekend Miljonairs?",
            "answer": "Jeroen van der Boom",
            "category": "Film en TV"
        },
        {
            "question": "In welke Nederlandse soap heeft Lieke van Lexmond behalve GTST nog meer gespeeld?",
            "answer": "Goudkust",
            "category": "Film en TV"
        },
        {
            "question": "Wat is de naam van de hond in de tv-serie Family Guy?",
            "answer": "Brian",
            "category": "Film en TV"
        },
        {
            "question": "Wat was de naam van het kanaal Disney XD voor 2010?",
            "answer": "Jetix",
            "category": "Film en TV"
        },
        {
            "question": "In welke fictieve plaats speelt Goede Tijden Slechte Tijden zich af?",
            "answer": "Meerdijk",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heet de Hoofdinspecteur in de tvserie C.S.I Miami?",
            "answer": "Horatio Caine",
            "category": "Film en TV"
        },
        {
            "question": "Wie presenteert het datingprogramma Take me out?",
            "answer": "Eddy Zoëy",
            "category": "Film en TV"
        },
        {
            "question": "In welke dierentuin werd de serie Zoop opgenomen?",
            "answer": "Ouwehands Dierenpark",
            "category": "Film en TV"
        },
        {
            "question": "Tijdens de opnames van welke film sprong de vonk over tussen Angelina Jolie en Brad Pitt?",
            "answer": "Mr. & Mrs. Smith",
            "category": "Film en TV"
        },
        {
            "question": "Wat was de naam van de realityserie van Jan Smit?",
            "answer": "Gewoon Jan Smit",
            "category": "Film en TV"
        },
        {
            "question": "Door welk programma is Ben Saunders in 2011 bekend geworden?",
            "answer": "The Voice of Holland",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heet de rechter in het programma De rijdende rechter?",
            "answer": "Frank Visser",
            "category": "Film en TV"
        },
        {
            "question": "Hoeveel rollen vervuld Eddie Murphy in de film Norbit?",
            "answer": "3",
            "category": "Film en TV"
        },
        {
            "question": "Welke rol speelt Linda de Mol in de serie Gooische vrouwen?",
            "answer": "Cheryl Morero",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heet de zus van Phineas in de animatieserie Phineas en Ferb",
            "answer": "Candace",
            "category": "Film en TV"
        },
        {
            "question": "In welke stad wordt het filmfestival jaarlijks gehouden?",
            "answer": "Utrecht",
            "category": "Film en TV"
        },
        {
            "question": "Wat is de naam van de eerste Nederlandse 3D-film?",
            "answer": "Nova Zembla",
            "category": "Film en TV"
        },
        {
            "question": "Door welk tv serie zijn Mary-Kate en Ashley Oslen bekend geworden?",
            "answer": "Full House",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heet de reality-serie over Paris Hilton en Nicole Richie?",
            "answer": "The Simple Life",
            "category": "Film en TV"
        },
        {
            "question": "Welke grote filmprijs is te winnen bij het Nederlands Film Festival?",
            "answer": "De Gouden Kalf",
            "category": "Film en TV"
        },
        {
            "question": "Wie regisereerde de film Er komt een vrouw bij de dokter?",
            "answer": "Reinout Oerlemans",
            "category": "Film en TV"
        },
        {
            "question": "Welke cabaretier gaf optredens met de titels Freefight, Veni Vidi Vici en Most Wanted?",
            "answer": "Najib Amhali",
            "category": "Film en TV"
        },
        {
            "question": "Welke Nederlandse film betekend letterlijk \"Kijk kijk schatje\"?",
            "answer": "Shouf Shouf Habibi",
            "category": "Film en TV"
        },
        {
            "question": "Op welke dag in de week wordt het sportprogramma \"Studio Sport\" uitgezonden?",
            "answer": "Zondag",
            "category": "Film en TV"
        },
        {
            "question": "Hoe wordt de mysterieuze coureur in het programma Top Gear genoemd?",
            "answer": "The Stig",
            "category": "Film en TV"
        },
        {
            "question": "Wie leende tot 2005 zijn stem aan Samson, het hondje uit Samson en Gert",
            "answer": "Danny Verbiest",
            "category": "Film en TV"
        },
        {
            "question": "Voor welke inlichtingendienst was James Bond een werkzaam?",
            "answer": "MI6",
            "category": "Film en TV"
        },
        {
            "question": "Wat is de naam van de klokkenluider van de Notre dame in de gelijknamige Disneyfilm?",
            "answer": "Quasimodo",
            "category": "Film en TV"
        },
        {
            "question": "Hoe worden de humanoïde wezens op Pandora genoemd in de film Avatar?",
            "answer": "Na’vi",
            "category": "Film en TV"
        },
        {
            "question": "Welke serie speelt zich af in Wisteria Lane?",
            "answer": "Desperate Housewives",
            "category": "Film en TV"
        },
        {
            "question": "Van welk sprookje werd in 2010 een film met o.a. Johnny Depp uitgebracht?",
            "answer": "Alice in Wonderland",
            "category": "Film en TV"
        },
        {
            "question": "In welke film vind je de personages Will Turner en Elizabeth Swann?",
            "answer": "Pirates of the Caribbean",
            "category": "Film en TV"
        },
        {
            "question": "Wat zijn Meowth, Rattata en Bulbasaur?",
            "answer": "Pokémon",
            "category": "Film en TV"
        },
        {
            "question": "Wie presenteert het programma Undercover in Nederland?",
            "answer": "Alberto Stegeman",
            "category": "Film en TV"
        },
        {
            "question": "Wie presenteert het programma Recht Gezet?",
            "answer": "John van den Heuvel",
            "category": "Film en TV"
        },
        {
            "question": "In welk programma op MTV worden huizen en optrekjes van bekende Amerikanen bezichtigd?",
            "answer": "MTV Cribs",
            "category": "Film en TV"
        },
        {
            "question": "Welke kleur heeft de teletubbie Tinky Winky?",
            "answer": "Paars",
            "category": "Film en TV"
        },
        {
            "question": "Welk televisienetwerk begon als eerst met het non-stop uitzenden van videoclips?",
            "answer": "MTV",
            "category": "Film en TV"
        },
        {
            "question": "Waarvoor staat de afkorting NPO?",
            "answer": "Nederlandse Publieke Omroep",
            "category": "Film en TV"
        },
        {
            "question": "Wie speelde de typetjes Bob en Annie de Rooij in de film Filmpje?",
            "answer": "Paul de Leeuw",
            "category": "Film en TV"
        },
        {
            "question": "Wat was de eerste Nederlandse televisieomroep?",
            "answer": "De NTS",
            "category": "Film en TV"
        },
        {
            "question": "Wat is de naam van de dochter van Fred en Wilma Flintstone?",
            "answer": "Pebbles",
            "category": "Film en TV"
        },
        {
            "question": "In welke maand worden de Oscars uitgereikt?",
            "answer": "Februari",
            "category": "Film en TV"
        },
        {
            "question": "Waarvoor staat de afkorting BZT in het kinderprogramma de BZT-Show?",
            "answer": "Bloed, Zweet en Tranen",
            "category": "Film en TV"
        },
        {
            "question": "Wat is de naam van de rechter uit het programma de rijdende rechter?",
            "answer": "Mr. Frank Visser",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heet de radioversie van Studio Sport?",
            "answer": "NOS Langs de Lijn",
            "category": "Film en TV"
        },
        {
            "question": "Welke actrice speelde Patience Phillips en Catwoman in de film Catwoman?",
            "answer": "Halle Berry",
            "category": "Film en TV"
        },
        {
            "question": "Wat wordt bedoeld met 90210 in de tienersoap Beverly Hills, 90210?",
            "answer": "De postcode",
            "category": "Film en TV"
        },
        {
            "question": "In welke stad speelt de serie CSI: Crime Scene Investigation zich af?",
            "answer": "Las Vegas",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heet de moeder van Homer Simpson in de tv-serie the Simpsons?",
            "answer": "Mona Simpson",
            "category": "Film en TV"
        },
        {
            "question": "Uit welk materiaal bestaat een Oscar Award voor 92.5%?",
            "answer": "Tin",
            "category": "Film en TV"
        },
        {
            "question": "Wat was de allereerste Disneyfilm die langer dan een uur duurde?",
            "answer": "Sneeuwwitje",
            "category": "Film en TV"
        },
        {
            "question": "Welke technieken worden vaak afgekort met SFX of SPFX?",
            "answer": "Special Effects",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heeft de documentairefilm die in 2011 werd gemaakt over Justin Bieber?",
            "answer": "Never say never",
            "category": "Film en TV"
        },
        {
            "question": "In welke stadje spelen de horrorfilms van Scream zich af?",
            "answer": "Woodsboro",
            "category": "Film en TV"
        },
        {
            "question": "Aan wie is de animatiefilm Happy Feet opgedragen?",
            "answer": "Steve Irwin",
            "category": "Film en TV"
        },
        {
            "question": "Wat is de titel van de derde film van The Lord of the Rings die in 2003 uitkwam?",
            "answer": "The Lord of the Rings: The Return of the King",
            "category": "Film en TV"
        },
        {
            "question": "Sinds welk jaar is Goede Tijden Slechte Tijden op tv te zien?",
            "answer": "1990",
            "category": "Film en TV"
        },
        {
            "question": "Welke acteur is te zien als supermarktmanager in de commercials van Albert Heijn?",
            "answer": "Harry Piekema",
            "category": "Film en TV"
        },
        {
            "question": "Welk zinnetje zei \"Jessica\" vaak in Pittige Tijden?",
            "answer": "Wat een toestand",
            "category": "Film en TV"
        },
        {
            "question": "Welk programma is een kopie van het BBC-programma Antiques Roadshow",
            "answer": "Tussen Kunst & Kitsch",
            "category": "Film en TV"
        },
        {
            "question": "In welk land kwam Expeditie Robinson voor het eerst op tv",
            "answer": "Zweden",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heet het restaurant waar Judeska uit de Dino-show werkt?",
            "answer": "FC kip",
            "category": "Film en TV"
        },
        {
            "question": "In welk gebouw vind je onder andere juffrouw Tinie, Karin de Groot en Chantal van de Kerkhoff?",
            "answer": "Toren C",
            "category": "Film en TV"
        },
        {
            "question": "Waarvoor staat de afkorting BNN?",
            "answer": "Barts Neverending Network",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heet het nummer dat in de ziekenhuisserie House als titelsong wordt gebruikt?",
            "answer": "Teardrop",
            "category": "Film en TV"
        },
        {
            "question": "In welk jaar was de eerste aflevering van het NOS Jeugdjournaal op de tv te zien?",
            "answer": "1981",
            "category": "Film en TV"
        },
        {
            "question": "Waarvoor staat de afkorting \"RTL\", in o.a. RTL4 en RTL 5?",
            "answer": "Radio Television Luxembourg",
            "category": "Film en TV"
        },
        {
            "question": "Welke acteur won als eerst zowel de prijs voor slechtste acteur als voor slechtste actrice?",
            "answer": "Eddie Murphy (met de film Norbit)",
            "category": "Film en TV"
        },
        {
            "question": "Hoeveel delen van Jurassic Park werden geregisseerd door Steven Spielberg?",
            "answer": "2 (van de 3)",
            "category": "Film en TV"
        },
        {
            "question": "In welke film was Cameron Diaz voor het eerst te zien?",
            "answer": "The Mask",
            "category": "Film en TV"
        },
        {
            "question": "Hoeveel bezoekers moet een film naar de bioscoop trekken om de prijs Diamanten Film in de wacht te kunnen slepen?",
            "answer": "1 miljoen",
            "category": "Film en TV"
        },
        {
            "question": "Wie presenteerd sinds 2012 het programma Blik op de weg?",
            "answer": "Frits Sissing",
            "category": "Film en TV"
        },
        {
            "question": "Welke film is de enige Batman-film zonder het woord \"Batman\" in de titel?",
            "answer": "The Dark Knight",
            "category": "Film en TV"
        },
        {
            "question": "Wat is de naam van \"Mr. Big\" in de serie Sex and the City?",
            "answer": "John James Preston",
            "category": "Film en TV"
        },
        {
            "question": "Hoe wordt de Duitse variant op de filmprijs Gouden Kalf genoemd?",
            "answer": "De Gouden Beer",
            "category": "Film en TV"
        },
        {
            "question": "Wat was de naam van The Oprah Winfrey show toen deze begon in 1984",
            "answer": "AM Chicago",
            "category": "Film en TV"
        },
        {
            "question": "Wie bleek in 2002 en 2003 de zwarte stig in het programma Top Gear te zijn?",
            "answer": "Perry McCarthy",
            "category": "Film en TV"
        },
        {
            "question": "staat de afkorting O.C. in de gelijknamige Amerikaanse dramaserie?",
            "answer": "Orange County",
            "category": "Film en TV"
        },
        {
            "question": "In welk jaar is de KRO opgericht?",
            "answer": "1925",
            "category": "Film en TV"
        },
        {
            "question": "Waarvoor staat de afkorting MTV, het bekende televisienetwerk?",
            "answer": "Music Television",
            "category": "Film en TV"
        },
        {
            "question": "Wat was de echte naam van de orka die in de film Free Willy de rol van Willy speelde?",
            "answer": "Keiko",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heet de computer die Mieke veranderd in Mega Mindy?",
            "answer": "Computer Bliep",
            "category": "Film en TV"
        },
        {
            "question": "Wat is de naam van de derde bioscoopfilm van de serie Jackass?",
            "answer": "Jackass 3D",
            "category": "Film en TV"
        },
        {
            "question": "Wat is de titel van de eerste K3-film waar Josje Huisman in meespeelt?",
            "answer": "K3 Bengeltjes",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heet de clown uit de horrorserie It?",
            "answer": "Pennywise (the Dancing Clown)",
            "category": "Film en TV"
        },
        {
            "question": "Hoe zou de serie the Flintstones oorspronkelijk gaan heten?",
            "answer": "The Flagstones",
            "category": "Film en TV"
        },
        {
            "question": "Hoe heet de titelsong van de politieserie Baantjer?",
            "answer": "Circle of Smile",
            "category": "Film en TV"
        },
        {
            "question": "Welke serie is lichtelijk gebaseerd op de boeken van Kathie Reichs?",
            "answer": "Bones",
            "category": "Film en TV"
        },
        {
            "question": "Wat was de achternaam van de Franse politieke leider Napoleon?",
            "answer": "Bonaparte",
            "category": "Geschiedenis"
        },
        {
            "question": "Hoe wordt het politiek stelsel genoemd waarbij 1 persoon of 1 partij de macht heeft?",
            "answer": "Fascisme",
            "category": "Geschiedenis"
        },
        {
            "question": "Hoe wordt een gewapende strijd staten of volkeren genoemd?",
            "answer": "Oorlog",
            "category": "Geschiedenis"
        },
        {
            "question": "Aan de westoever van welke rivier liggen de meeste piramides?",
            "answer": "De Nijl",
            "category": "Geschiedenis"
        },
        {
            "question": "Ter ere van welke Grieks god werden de vroegere Olympische spelen in Griekenland gehouden?",
            "answer": "Zeus",
            "category": "Geschiedenis"
        },
        {
            "question": "Hoe wordt de grote oorlog ook wel genoemd?",
            "answer": "De eerste wereldoorlog",
            "category": "Geschiedenis"
        },
        {
            "question": "Hoe wordt de periode van het jaar 500 tot 1500 vaak genoemd?",
            "answer": "De middeleeuwen",
            "category": "Geschiedenis"
        },
        {
            "question": "Hoe wordt de periode waarin het goed ging met Nederland tussen 1600 – 1700 ook wel genoemd?",
            "answer": "De Gouden Eeuw",
            "category": "Geschiedenis"
        },
        {
            "question": "Welke titel gaven de Egyptenaren vroeger aan hun koning of koningin?",
            "answer": "Farao",
            "category": "Geschiedenis"
        },
        {
            "question": "In welk werelddeel vond de eerste wereldoorlog plaats?",
            "answer": "Europa",
            "category": "Geschiedenis"
        },
        {
            "question": "Welk politiek leider hield de bekende toespraak \"I have a dream\"?",
            "answer": "Martin Luther King",
            "category": "Geschiedenis"
        },
        {
            "question": "Wie schilderde De nachtwacht?",
            "answer": "Rembrandt van Rijn",
            "category": "Geschiedenis"
        },
        {
            "question": "Op wie was Anne Frank volgens haar dagboek verliefd?",
            "answer": "Peter",
            "category": "Geschiedenis"
        },
        {
            "question": "Wie heeft de Mona Lisa geschilderd?",
            "answer": "Leonardo da Vinci",
            "category": "Geschiedenis"
        },
        {
            "question": "Welke schilder sneed in 1888 een stuk van zijn oor af?",
            "answer": "Van Gogh",
            "category": "Geschiedenis"
        },
        {
            "question": "Wanneer eindigde de eerste wereldoorlog?",
            "answer": "1918",
            "category": "Geschiedenis"
        },
        {
            "question": "Hoe noem je het overblijfsel van een religieus voorwerp?",
            "answer": "Een relikwie",
            "category": "Geschiedenis"
        },
        {
            "question": "Hoe heette de vader van Anne Frank?",
            "answer": "Otto",
            "category": "Geschiedenis"
        },
        {
            "question": "Welk land stuurde de eerste mens de ruimte in?",
            "answer": "Sovjet-Unie",
            "category": "Geschiedenis"
        },
        {
            "question": "Wanneer begon de tweede wereldoorlog?",
            "answer": "1939",
            "category": "Geschiedenis"
        },
        {
            "question": "Hoe heette de zus van Anne Frank?",
            "answer": "Margot",
            "category": "Geschiedenis"
        },
        {
            "question": "In welk jaar overleed prins Bernhard?",
            "answer": "2004",
            "category": "Geschiedenis"
        },
        {
            "question": "Naar welk land vluchtte koningin Wilhelmina tijdens de tweede wereldoorlog?",
            "answer": "Engeland",
            "category": "Geschiedenis"
        },
        {
            "question": "Wat was het beroep van Frans Hals?",
            "answer": "Schilder",
            "category": "Geschiedenis"
        },
        {
            "question": "Welke dictator werd op 30 december 2006 in Bagdad geëxecuteerd?",
            "answer": "Saddam Hoessein",
            "category": "Geschiedenis"
        },
        {
            "question": "Uit welk land kwam de schrijver en filosoof Plato?",
            "answer": "Griekenland",
            "category": "Geschiedenis"
        },
        {
            "question": "Hoe worden Romeinen genoemd die in amfitheaters vochten als leedvermaak?",
            "answer": "Gladiatoren",
            "category": "Geschiedenis"
        },
        {
            "question": "Welk werelddeel werd ooit Nieuw-Holland genoemd?",
            "answer": "Australië",
            "category": "Geschiedenis"
        },
        {
            "question": "Waarvoor staat de afkorting VOC?",
            "answer": "Verenigde Oostindische Compagnie",
            "category": "Geschiedenis"
        },
        {
            "question": "Waarvan is het leger gemaakt dat staat bij het graf van Keizer Qin Shi Huangdi?",
            "answer": "Klei",
            "category": "Geschiedenis"
        },
        {
            "question": "Welk object liet keizer Qin Shi Huangdi bouwen om het Chinese keizerrijk te beschermen?",
            "answer": "De Chinese Muur",
            "category": "Geschiedenis"
        },
        {
            "question": "Onder welke naam is het Fravisch Amfitheater beter bekent?",
            "answer": "Het colosseum",
            "category": "Geschiedenis"
        },
        {
            "question": "Hoe werden de volgelingen van Calvijn en Luther, die hun eigen kerken vormden genoemd?",
            "answer": "De protestanten",
            "category": "Geschiedenis"
        },
        {
            "question": "Bij welke kunstenaar ging Gerrit (ook wel Gerard genoemd) Dou in de leer?",
            "answer": "Rembrandt",
            "category": "Geschiedenis"
        },
        {
            "question": "In welke bunker pleegde Adolf Hitler op 30 april 1945 zelfmoord?",
            "answer": "Führerbunker",
            "category": "Geschiedenis"
        },
        {
            "question": "In welke Griekse stad werden vroeger door de Grieken de Olympische spelen gehouden?",
            "answer": "Olympia",
            "category": "Geschiedenis"
        },
        {
            "question": "Waar dacht Christoffel Columbus dat hij was toen hij in 1492 Amerika ontdekte?",
            "answer": "India",
            "category": "Geschiedenis"
        },
        {
            "question": "Welk land werd vroeger \"Het land van het Midden\" genoemd omdat de bewoners dachten dat het het middelpunt op aarde was?",
            "answer": "China",
            "category": "Geschiedenis"
        },
        {
            "question": "Wie was de eerste vrouwelijke huisarts?",
            "answer": "Aletta Jacobs",
            "category": "Geschiedenis"
        },
        {
            "question": "Welke kleur haar had Vincent van Gogh?",
            "answer": "Rood",
            "category": "Geschiedenis"
        },
        {
            "question": "In welk jaar trouwde prinses Juliana met prins Bernhard?",
            "answer": "1937",
            "category": "Geschiedenis"
        },
        {
            "question": "Hoe heette de rechterhand van Fidel Castro tijdens de Cubaanse revolutie?",
            "answer": "Che Guevara",
            "category": "Geschiedenis"
        },
        {
            "question": "Wat is een ander woord voor veelgodendom, het geloof in meerdere goden?",
            "answer": "Polytheïsme",
            "category": "Geschiedenis"
        },
        {
            "question": "Aan welke god was het meest bezochte orakel, het Orakel van Delphi gewijd?",
            "answer": "Apollo",
            "category": "Geschiedenis"
        },
        {
            "question": "Wat was de grootste archeologische vondst van de 20e eeuw in China?",
            "answer": "Het terracottaleger",
            "category": "Geschiedenis"
        },
        {
            "question": "In welk jaar viel Napoleon Rusland tevergeefs binnen?",
            "answer": "1812",
            "category": "Geschiedenis"
        },
        {
            "question": "Voor welke oude sport was het Circus Maximus in Rome hoofdzakelijk bedoeld?",
            "answer": "Wagenrennen",
            "category": "Geschiedenis"
        },
        {
            "question": "Naar wie vernoemden de feministische groep De dolle Mina’s zich?",
            "answer": "Wilhelmina Drucker",
            "category": "Geschiedenis"
        },
        {
            "question": "Wat was de eerste sociale wet?",
            "answer": "Kinderwetje van Van Houten",
            "category": "Geschiedenis"
        },
        {
            "question": "Naar welk eiland werd Napoleon Bonaparte in 1814 verbannen",
            "answer": "Elba",
            "category": "Geschiedenis"
        },
        {
            "question": "Onder welke naam is spiritueel leider Siddharta Gautama beter bekend?",
            "answer": "Boeddha",
            "category": "Geschiedenis"
        },
        {
            "question": "Wanneer werden de eerste Olympische Spelen door de Grieken gehouden?",
            "answer": "776 v. Chr.",
            "category": "Geschiedenis"
        },
        {
            "question": "Welke genre muziek wordt er normaal bij line-dancen gespeeld?",
            "answer": "Country",
            "category": "Muziek"
        },
        {
            "question": "Wie zong het nummer \"als de morgen is gekomen\"?",
            "answer": "Jan Smit",
            "category": "Muziek"
        },
        {
            "question": "Via welke website is Justin Bieber ontdekt?",
            "answer": "Youtube",
            "category": "Muziek"
        },
        {
            "question": "In welke plaats woont Jan Smit?",
            "answer": "Volendam",
            "category": "Muziek"
        },
        {
            "question": "Wie verving Kathleen Aerts in de meidengroep K3?",
            "answer": "Josje Huisman",
            "category": "Muziek"
        },
        {
            "question": "Wie componeerde \"Fur Elise\"?",
            "answer": "Beethoven",
            "category": "Muziek"
        },
        {
            "question": "Hoe heet iemand die dansstukken bedenkt?",
            "answer": "Een choreograaf",
            "category": "Muziek"
        },
        {
            "question": "Welke zangeres wordt ook wel J-lo genoemd?",
            "answer": "Jennifer Lopez",
            "category": "Muziek"
        },
        {
            "question": "Welke Nederlandse zanger had onder andere de hits De vlieger en een beetje verliefd?",
            "answer": "André Hazes",
            "category": "Muziek"
        },
        {
            "question": "Welke zanger had in 1996 een hit met het nummer Banger hart?",
            "answer": "Rob de Nijs",
            "category": "Muziek"
        },
        {
            "question": "Hoe wordt het kunststof schijfje genoemd dat vaak gebruikt wordt bij het gitaar spelen?",
            "answer": "Een plectrum",
            "category": "Muziek"
        },
        {
            "question": "Wie staat bekend als The King of Reggae?",
            "answer": "Bob Marley",
            "category": "Muziek"
        },
        {
            "question": "Waarvan is DJ de afkorting?",
            "answer": "Disc jockey",
            "category": "Muziek"
        },
        {
            "question": "Hoe wordt een korte film op muziek genoemd?",
            "answer": "Een videoclip",
            "category": "Muziek"
        },
        {
            "question": "Hoe zouden de afscheidsconcerten van Michael Jackson heten?",
            "answer": "This is it",
            "category": "Muziek"
        },
        {
            "question": "Wat is de verzamelnaam voor populaire muziek?",
            "answer": "Popmuziek",
            "category": "Muziek"
        },
        {
            "question": "Hoeveel snaren heeft een gitaar gewoonlijk?",
            "answer": "6",
            "category": "Muziek"
        },
        {
            "question": "Met welk nummer brak zangeres Shakira in 2001 wereldwijd door?",
            "answer": "Whenever Wherever",
            "category": "Muziek"
        },
        {
            "question": "In welk jaar overleed de zanger Michael Jackson?",
            "answer": "2009",
            "category": "Muziek"
        },
        {
            "question": "Met welke boyband is Justin Timberlake doorgebroken?",
            "answer": "Nsync",
            "category": "Muziek"
        },
        {
            "question": "Bij welke popgroep zong Robbie Williams van 1990 – 1995?",
            "answer": "Take That",
            "category": "Muziek"
        },
        {
            "question": "In welke R&B-groep zong Beyonce Knowles voordat zij solo zong?",
            "answer": "Destiny’s Child",
            "category": "Muziek"
        },
        {
            "question": "Wat is een ander wordt voor toondichter?",
            "answer": "Een componist",
            "category": "Muziek"
        },
        {
            "question": "Wat is de bijnaam van zangeres Beyonce?",
            "answer": "Bee",
            "category": "Muziek"
        },
        {
            "question": "In welke taal zong Marco Borsato voordat hij doorbrak met Nederlandstalige nummers?",
            "answer": "Italiaans",
            "category": "Muziek"
        },
        {
            "question": "Hoe heette het eerste nummer van Britney Spears",
            "answer": "Baby one more time",
            "category": "Muziek"
        },
        {
            "question": "Welke actrice werd in 2011 de vriendin van zanger Justin Bieber?",
            "answer": "Selena Gomez",
            "category": "Muziek"
        },
        {
            "question": "In welk jaar overleed Whitney Houston?",
            "answer": "2012",
            "category": "Muziek"
        },
        {
            "question": "Hoeveel zwarte toetsen heeft een standaard piano?",
            "answer": "36",
            "category": "Muziek"
        },
        {
            "question": "Hoe heet het jongste zusje van Michael Jackson?",
            "answer": "Janet Jackson",
            "category": "Muziek"
        },
        {
            "question": "Hoe gaat het liedje verder: Oh, Oh Den Haag, mooie stad……?",
            "answer": "Achter de duinen",
            "category": "Muziek"
        },
        {
            "question": "Welke zangeres had als eerste hit Genie in a bottle?",
            "answer": "Christina Aguilera",
            "category": "Muziek"
        },
        {
            "question": "Van wie waren de hits Firestarter en Smack my Bitch up?",
            "answer": "The Prodigy",
            "category": "Muziek"
        },
        {
            "question": "Wie won in 2003 het eerste seizoen van Idols?",
            "answer": "Jamai",
            "category": "Muziek"
        },
        {
            "question": "Welke groep had een hit met het nummer Barbie Girl?",
            "answer": "Aqua",
            "category": "Muziek"
        },
        {
            "question": "Met welk nummer werd Lady Gaga in 2008 werelwijd bekend?",
            "answer": "Just Dance",
            "category": "Muziek"
        },
        {
            "question": "Welke zangeres is de dochter van Keith Allen?",
            "answer": "Lily Allen",
            "category": "Muziek"
        },
        {
            "question": "Welke zangeres heeft onder andere de bijnamen Queen of pop, Mo en Madge?",
            "answer": "Madonna",
            "category": "Muziek"
        },
        {
            "question": "Hoe wordt de bespeler van een orgel genoemd?",
            "answer": "Een organist",
            "category": "Muziek"
        },
        {
            "question": "Hoe wordt een vrouwelijk DJ ook wel genoemd?",
            "answer": "Een Djane",
            "category": "Muziek"
        },
        {
            "question": "In welke groep zongen Wyclef Jean, Lauryn Hill en Pras?",
            "answer": "De Fugees",
            "category": "Muziek"
        },
        {
            "question": "Waarvan is de artiestennaam LL Cool J de afkorting?",
            "answer": "Ladies love cool James",
            "category": "Muziek"
        },
        {
            "question": "Wie had een hit met het nummer Relax, take it easy?",
            "answer": "Mika",
            "category": "Muziek"
        },
        {
            "question": "Welk instrument betekend in het Hawaïaans \"springende vlo\"?",
            "answer": "Ukelele",
            "category": "Muziek"
        },
        {
            "question": "Van welke boyband maakte Nick Lachey deel uit?",
            "answer": "98 Degrees",
            "category": "Muziek"
        },
        {
            "question": "Hoe wordt het muziekgedeelte genoemd waarbij vaak een stuk muziek wordt herhaald?",
            "answer": "refrein",
            "category": "Muziek"
        },
        {
            "question": "Welke zangeres had onder andere hits met Dr. Beat, Bad boy en Rhythm is gonna get you?",
            "answer": "Gloria Estefan",
            "category": "Muziek"
        },
        {
            "question": "Waarvan is CD de afkorting?",
            "answer": "Compact disc",
            "category": "Muziek"
        },
        {
            "question": "Over welk lid van The Beatles gingen geruchten rond dat hij was overleden en dat een look-a-like zijn plaats innam?",
            "answer": "Paul McCartney",
            "category": "Muziek"
        },
        {
            "question": "Wie was de zanger in de band Volumia!?",
            "answer": "Xander de Buisonjé",
            "category": "Muziek"
        },
        {
            "question": "Wie zong het nummer Tears in Heaven nadat zijn zoontje was overleden?",
            "answer": "Eric Clapton",
            "category": "Muziek"
        },
        {
            "question": "Welke Britse band vormen Chris Martin, Jon Buckland, Will Champion en Guy Berryman?",
            "answer": "Coldplay",
            "category": "Muziek"
        },
        {
            "question": "Met welke artiest bracht zangeres Beyonce het nummer Baby Boy uit?",
            "answer": "Sean Paul",
            "category": "Muziek"
        },
        {
            "question": "Welke zangeres kan zichzelf naast Madonna ook Queen op pop noemen?",
            "answer": "Britney Spears",
            "category": "Muziek"
        },
        {
            "question": "Welke R&B-zangeres en actrice overleed in 2001 bij een vliegtuigongeluk?",
            "answer": "Aaliyah",
            "category": "Muziek"
        },
        {
            "question": "welke naam is de Amerikaanse rapper Cornell Haynes beter bekend?",
            "answer": "Nelly",
            "category": "Muziek"
        },
        {
            "question": "Wat was de naam van de eerste parfum die Jennifer Lopez uitbracht?",
            "answer": "Glow",
            "category": "Muziek"
        },
        {
            "question": "Onder welke naam is rapper Armando Christian Pérez beter bekend?",
            "answer": "Pitbull",
            "category": "Muziek"
        },
        {
            "question": "Hoe heet de dochter van Madonna?",
            "answer": "Lourdes",
            "category": "Muziek"
        },
        {
            "question": "Hoe oud was zangeres Amy Winehouse toen zij overleed?",
            "answer": "27",
            "category": "Muziek"
        },
        {
            "question": "Welke componist staat afgebeeld op de Oostenrijkse euromunt?",
            "answer": "Wolfgang Mozart",
            "category": "Muziek"
        },
        {
            "question": "Tijdens welk nummer pinkte Maxima tijdens haar huwelijk een traantje weg?",
            "answer": "Adios Nonino",
            "category": "Muziek"
        },
        {
            "question": "Welke componist heeft maar liefst 8 Oscars gewonnen voor de muziek voor Disneyfilms?",
            "answer": "Alan Menken",
            "category": "Muziek"
        },
        {
            "question": "In welk concert van Leroy Anderson werd een schrijfmachine als instrumentgebruikt?",
            "answer": "The Typewriter",
            "category": "Muziek"
        },
        {
            "question": "Van wie is Jo Calderone een alter-ego?",
            "answer": "Lady Gaga",
            "category": "Muziek"
        },
        {
            "question": "In welke band zingt zanger Will.i.am?",
            "answer": "Black Eyed Peas",
            "category": "Muziek"
        },
        {
            "question": "Van welke componist is de compositie Le Carnival des Animaux?",
            "answer": "Camille Saint-Saëns",
            "category": "Muziek"
        },
        {
            "question": "Wat is de echte voornaam van zangeres Rihanna?",
            "answer": "Robyn",
            "category": "Muziek"
        },
        {
            "question": "Welke sleutel wordt als enige gebruikt bij de klavarnotatie?",
            "answer": "De c-sleutel",
            "category": "Muziek"
        },
        {
            "question": "Welke dans wordt in een groep gedanst bij Rueda de Casino?",
            "answer": "Salsa",
            "category": "Muziek"
        },
        {
            "question": "Hoeveel minuten muziek konden er per kant op maximaal op een 12″ LP",
            "answer": "30 minuten",
            "category": "Muziek"
        },
        {
            "question": "Waarvan is MP3 de afkorting?",
            "answer": "MPEG-1 Layer 3",
            "category": "Muziek"
        },
        {
            "question": "Van wie is Sasha Fierce het alter ego?",
            "answer": "Beyonce",
            "category": "Muziek"
        },
        {
            "question": "Welke duo moest als enige ooit een Grammy Award weer inleveren?",
            "answer": "Milli Vanilli",
            "category": "Muziek"
        },
        {
            "question": "Onder welke naam kennen we Alecia Beth Moore beter?",
            "answer": "P!nk",
            "category": "Muziek"
        },
        {
            "question": "Welk nummer stond bij de eerste verschijning van de Nederlandse Top 40 op nummer één?",
            "answer": "I Feel Fine van de Beatles",
            "category": "Muziek"
        },
        {
            "question": "Wat is de natuurkundige eenheid van druk?",
            "answer": "Bar",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welke boor is naar een insect vernoemd?",
            "answer": "Vlinderboor",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welke materiaal is magnesium?",
            "answer": "Metaal",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Waar staat de afkorting HSS voor op een boortje?",
            "answer": "High Speed Steel",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoeveel is de wortel van 25 in het kwadraat?",
            "answer": "25",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe noem je het gedeelde van een slot waar je de sleutel insteekt?",
            "answer": "Cilinder",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welke steen kan door het lichaam worden gevormd?",
            "answer": "Niersteen",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Waar staat de afkorting EQ voor?",
            "answer": "Emotioneel quotiënt",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat krijg je als je cement en grind met elkaar mengt?",
            "answer": "Beton",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wie vond als eerst de telefoon uit?",
            "answer": "Antionio Meucci",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoeveel tanden en kiezen heeft een volwassen persoon?",
            "answer": "32",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welk metaal is als enige bij kamertemperatuur vloeibaar?",
            "answer": "Kwik",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe wordt een tweede keer volle maan in één maand genoemd?",
            "answer": "Een blauwe maan",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welke kleur is de middelste kleur van een regenboog?",
            "answer": "Groen",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoeveel kilometer is de omtrek van de aarde?",
            "answer": "40.000 km",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat zijn de eerste 3 priemgetallen?",
            "answer": "2,3 en 5",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "De vijf planeten die het dichtst bij ons zijn?",
            "answer": "Mercurius, Venus, Mars, Jupiter en Saturnus",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoeveel cc heeft de motorinhoud van een 2 liter motor?",
            "answer": "Ongeveer 2000cc",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welke lichtstraal heeft een tv afstandsbediening?",
            "answer": "Infra Rood",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Waar staat de afkorting SMS voor?",
            "answer": "Short Message Service",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoeveel kilobyte is 1 megabyte?",
            "answer": "1024",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat is de gemiddelde snelheid van een groot passagiers vliegtuig?",
            "answer": "1000km p/u",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Met welke snelheid knip je je vingers?",
            "answer": "Ongeveer 45km p/u",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat is kleiner dan een molecuul?",
            "answer": "Atoom",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat betekent de afkorting IR?",
            "answer": "Infra rood",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Op hoeveel volt werkt een USB aansluiting?",
            "answer": "5 Volt",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe heette vroeger de koelende vloeistof in een vriezer?",
            "answer": "Freon",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe heet het metaal dat in de scheikunde aangeduid wordt met Al?",
            "answer": "Aluminium",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat is de snelheid van geluid?",
            "answer": "340m per seconde",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Met welk gas wordt een ballon opgeblazen die kan zweven?",
            "answer": "Helium",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wie was de uitvinder van elektriciteit?",
            "answer": "Thomas Edison",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat is de codenaam van Android 4.1?",
            "answer": "Jelly Bean",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welke smartphone was de eerste telefoon met een Dualcore-processor?",
            "answer": "De LG Optimus 2x Speed",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Waarvoor staat de afkorting NFC?",
            "answer": "Near Field Communication",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Waarvoor staat de I in de afkorting HDMI?",
            "answer": "Interface",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Naar welk werelddeel is een van de manen van Jupiter vernoemd?",
            "answer": "Europa",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "In welk jaar is electronicabedrijf Apple (o.a. bekend van de Iphone) opgericht?",
            "answer": "1976",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welke codenaam heeft Android 2.3?",
            "answer": "Gingerbread",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welke spelcomputer stond eerder bekend onder de naam Nintendo Revolution?",
            "answer": "De Nintendo Wii",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "In welk jaar werd de allereerste sms verstuurd?",
            "answer": "1992",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "In welk jaar kwam de eerste Blackberry op de markt?",
            "answer": "1999",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe wordt een periode van 1 miljard jaar genoemd?",
            "answer": "Een Giga-annum",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "In welke maateenheid wordt een beeldscherm aangeduid?",
            "answer": "Inch",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welke toetsenbord indeling gebruiken we in Nederland?",
            "answer": "Qwerty",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe noemt men een kunststof colafles?",
            "answer": "Petfles",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat is een andere benaming voor sifon?",
            "answer": "Zwanenhals",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoeveel potloodbatterijen maken samen 4,5 volt?",
            "answer": "3",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat is de tegenhanger van gelijkspanning?",
            "answer": "Wisselspanning",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe noem je de lamp die als koplamp in de auto wordt gebruikt?",
            "answer": "Halogeen",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat geeft een gloeilamp het meest af?",
            "answer": "Warmte",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "In welke stad staat de Technische Universiteit (TU)?",
            "answer": "Delft",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe luidt de stelling van Pythagoras?",
            "answer": "a2+b2=c2",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welke plaats heeft de maand in de Amerikaanse tijdnotatie?",
            "answer": "Voorop, mm-dd-jj",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welk metaalsoort is een van de lichtste?",
            "answer": "Aluminium",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Met welke tol kun je dingen doormidden zagen?",
            "answer": "Slijptol",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welke kleur bloedlichaampjes kennen we?",
            "answer": "Rood en wit",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Vergeleken met de aarde is op de maan de zwaartekracht?",
            "answer": "Lager",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Waar staat de afkorting IQ voor?",
            "answer": "Intelligentie quotiënt",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat is de hardste steen op aarde?",
            "answer": "Diamant",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "In welk jaar was de eerste maanlanding?",
            "answer": "1969",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Waar staat de afkorting Hz voor?",
            "answer": "Hertz",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat duiden Kelvin en Fahrenheit aan?",
            "answer": "Temperatuur",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat was de naam van de man die als eerste een voet op de maan zette?",
            "answer": "Neil Armstrong",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Waar staat het getal 3,14 voor?",
            "answer": "Pi",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe wordt een 5 puntige ster ook wel genoemd?",
            "answer": "Pentagram",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoeveel bougies of gloeipluggen heeft een 6-cilinder?",
            "answer": "6",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welke letter staat voor 1000?",
            "answer": "K",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe wordt het mobile telefoon netwerk genoemd?",
            "answer": "GSM",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welk telefoonmerk had als populaire model 5100 en 5230?",
            "answer": "Nokia",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Op welke brandstof reed de eerste trein?",
            "answer": "Stoom",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe wordt een meteoor die de aarde bereikt genoemd?",
            "answer": "Meteoriet",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat is de eigenschap van metaal als het warm wordt?",
            "answer": "Het zet uit",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Waarmee kun je een uitvinding beschermen?",
            "answer": "Octrooi of patent",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat zijn de 3 primaire kleuren van een beeldpixel?",
            "answer": "Rood, groen en blauw",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe noem je de printvulling van een laserprint?",
            "answer": "Toner",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe noem je bougies voor een diesel auto?",
            "answer": "Gloeipluggen",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Waar staat de afkorting RVS voor?",
            "answer": "Roest vast staal",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Voor welke stof staat de afkorting h2o?",
            "answer": "Water",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Op welke schaal worden aardbevingen weergegeven?",
            "answer": "Richter",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wie is de bedenker van het internet?",
            "answer": "Bill Gates",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe heet het besturingssysteem van de Iphone?",
            "answer": "iOS",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe heet de camera voor de Xbox die het mogelijk maakt je lichaam als controller te gebruiken?",
            "answer": "Kinect",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welk bedrijf ontwikkelde de Blackberry?",
            "answer": "Research in Motion",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat is de naam van de extra grote variant van de Nintendo 3DS?",
            "answer": "De Nintendo 3DS XL",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Uit welk land komt Nokia?",
            "answer": "Finland",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Aan hoeveel pixels is 1 megapixel gelijk?",
            "answer": "1 miljoen",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat is de natuurkundige eenheid van druk?",
            "answer": "Bar",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welke boor is naar een insect vernoemd?",
            "answer": "Vlinderboor",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welke materiaal is magnesium?",
            "answer": "Metaal",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Waar staat de afkorting HSS voor op een boortje?",
            "answer": "High Speed Steel",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoeveel is de wortel van 25 in het kwadraat?",
            "answer": "25",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe noem je het gedeelde van een slot waar je de sleutel insteekt?",
            "answer": "Cilinder",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welke steen kan door het lichaam worden gevormd?",
            "answer": "Niersteen",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Waar staat de afkorting EQ voor?",
            "answer": "Emotioneel quotiënt",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat krijg je als je cement en grind met elkaar mengt?",
            "answer": "Beton",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wie vond als eerst de telefoon uit?",
            "answer": "Antionio Meucci",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoeveel tanden en kiezen heeft een volwassen persoon?",
            "answer": "32",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welk metaal is als enige bij kamertemperatuur vloeibaar?",
            "answer": "Kwik",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe wordt een tweede keer volle maan in één maand genoemd?",
            "answer": "Een blauwe maan",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welke kleur is de middelste kleur van een regenboog?",
            "answer": "Groen",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoeveel kilometer is de omtrek van de aarde?",
            "answer": "40.000 km",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat zijn de eerste 3 priemgetallen?",
            "answer": "2,3 en 5",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "De vijf planeten die het dichtst bij ons zijn?",
            "answer": "Mercurius, Venus, Mars, Jupiter en Saturnus",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoeveel cc heeft de motorinhoud van een 2 liter motor?",
            "answer": "Ongeveer 2000cc",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welke lichtstraal heeft een tv afstandsbediening?",
            "answer": "Infra Rood",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Waar staat de afkorting SMS voor?",
            "answer": "Short Message Service",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoeveel kilobyte is 1 megabyte?",
            "answer": "1024",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat is de gemiddelde snelheid van een groot passagiers vliegtuig?",
            "answer": "1000km p/u",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Met welke snelheid knip je je vingers?",
            "answer": "Ongeveer 45km p/u",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat is kleiner dan een molecuul?",
            "answer": "Atoom",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat betekent de afkorting IR?",
            "answer": "Infra rood",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Op hoeveel volt werkt een USB aansluiting?",
            "answer": "5 Volt",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe heette vroeger de koelende vloeistof in een vriezer?",
            "answer": "Freon",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe heet het metaal dat in de scheikunde aangeduid wordt met Al?",
            "answer": "Aluminium",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat is de snelheid van geluid?",
            "answer": "340m per seconde",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Met welk gas wordt een ballon opgeblazen die kan zweven?",
            "answer": "Helium",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wie was de uitvinder van elektriciteit?",
            "answer": "Thomas Edison",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Wat is de codenaam van Android 4.1?",
            "answer": "Jelly Bean",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welke smartphone was de eerste telefoon met een Dualcore-processor?",
            "answer": "De LG Optimus 2x Speed",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Waarvoor staat de afkorting NFC?",
            "answer": "Near Field Communication",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Waarvoor staat de I in de afkorting HDMI?",
            "answer": "Interface",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Naar welk werelddeel is een van de manen van Jupiter vernoemd?",
            "answer": "Europa",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "In welk jaar is electronicabedrijf Apple (o.a. bekend van de Iphone) opgericht?",
            "answer": "1976",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welke codenaam heeft Android 2.3?",
            "answer": "Gingerbread",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Welke spelcomputer stond eerder bekend onder de naam Nintendo Revolution?",
            "answer": "De Nintendo Wii",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "In welk jaar werd de allereerste sms verstuurd?",
            "answer": "1992",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "In welk jaar kwam de eerste Blackberry op de markt?",
            "answer": "1999",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe wordt een periode van 1 miljard jaar genoemd?",
            "answer": "Een Giga-annum",
            "category": "Wetenschap en Techniek"
        },
        {
            "question": "Hoe lang duurt een professionele voetbalwedstrijd?",
            "answer": "90 minuten",
            "category": "Sport"
        },
        {
            "question": "Hoe wordt een corner met een Nederlands woord ook wel genoemd?",
            "answer": "Hoekschop",
            "category": "Sport"
        },
        {
            "question": "Hoe noem je een vrouwelijke balletdanser?",
            "answer": "Ballerina",
            "category": "Sport"
        },
        {
            "question": "Bij welke sport horen de termen \"strike\" en \"spare\"?",
            "answer": "Bowlen",
            "category": "Sport"
        },
        {
            "question": "Hoe wordt de balsport genoemd waarbij men eigenlijk tikkertje speelt met de bal?",
            "answer": "Trefbal",
            "category": "Sport"
        },
        {
            "question": "Hoe wordt een doelverdediger bij voetbal genoemd?",
            "answer": "Een keeper",
            "category": "Sport"
        },
        {
            "question": "Hoe wordt een beoefenaar van judo genoemd?",
            "answer": "Een judoka",
            "category": "Sport"
        },
        {
            "question": "Welke kleur heeft de uitrusting van een schermer meestal?",
            "answer": "Wit",
            "category": "Sport"
        },
        {
            "question": "Bij welke sport horen de woorden cap en amazone?",
            "answer": "Paardensport",
            "category": "Sport"
        },
        {
            "question": "Hoe heet de Haagse voetbalclub?",
            "answer": "ADO Den Haag",
            "category": "Sport"
        },
        {
            "question": "Om de hoeveel jaar worden de Olympische zomerspelen gehouden?",
            "answer": "4",
            "category": "Sport"
        },
        {
            "question": "Hoe wordt een groep wielrenners ook wel genoemd?",
            "answer": "Een peloton",
            "category": "Sport"
        },
        {
            "question": "Hoe wordt bij basketbal het stuiteren van de bal genoemd om te kunnen lopen met de bal?",
            "answer": "Dribbelen",
            "category": "Sport"
        },
        {
            "question": "Hoe wordt een beoefenaar van de vechtkunst karate genoemd?",
            "answer": "Karateka",
            "category": "Sport"
        },
        {
            "question": "Wat wordt bij voetbal bedoeld met het Engelse \"offside\"?",
            "answer": "Buitenspel",
            "category": "Sport"
        },
        {
            "question": "Waarmee wordt een hole bij golf gemerkt?",
            "answer": "Vlaggenstok",
            "category": "Sport"
        },
        {
            "question": "Hoe heet het gedeelte van een berg dat geprepareerd is om te skiën?",
            "answer": "Piste",
            "category": "Sport"
        },
        {
            "question": "Welke sport wordt beoefend op de TT Assen",
            "answer": "Motorrace",
            "category": "Sport"
        },
        {
            "question": "Hoe wordt de watervariant van handbal genoemd?",
            "answer": "Waterpolo",
            "category": "Sport"
        },
        {
            "question": "Bij welke sport danst met op spitzen?",
            "answer": "Ballet",
            "category": "Sport"
        },
        {
            "question": "Hoe worden de stokken waarmee geslagen wordt bij golf genoemd?",
            "answer": "(golf)clubs",
            "category": "Sport"
        },
        {
            "question": "Welke sport staat centraal in de film Black Swan?",
            "answer": "Ballet",
            "category": "Sport"
        },
        {
            "question": "Welke voetbalclub heeft het grootste voetbalstadion van Nederland?",
            "answer": "Ajax",
            "category": "Sport"
        },
        {
            "question": "Welke sport wordt ook wel de \"moeder der sporten\" genoemd?",
            "answer": "Atletiek",
            "category": "Sport"
        },
        {
            "question": "Welk Engels woord gebruikt men voor opslag bij tennis en volleybal?",
            "answer": "Service",
            "category": "Sport"
        },
        {
            "question": "Bij welke sport horen de termen pancake, side-out en floater?",
            "answer": "Volleybal",
            "category": "Sport"
        },
        {
            "question": "Op welke ondergrond wordt getennist op wimbledon?",
            "answer": "Gras",
            "category": "Sport"
        },
        {
            "question": "Welke sport beoefent Ireen Wüst?",
            "answer": "Schaatsen",
            "category": "Sport"
        },
        {
            "question": "Hoe worden de kegels bij het bowlen genoemd?",
            "answer": "Pins",
            "category": "Sport"
        },
        {
            "question": "Welke kleur begint altijd bij het schaken?",
            "answer": "Wit",
            "category": "Sport"
        },
        {
            "question": "Bij welk racketspel sla je de bal tegen de muur?",
            "answer": "Squash",
            "category": "Sport"
        },
        {
            "question": "Wat wordt gezien als de hoogste autosportklasse?",
            "answer": "Formule 1",
            "category": "Sport"
        },
        {
            "question": "Welke sport heeft de onderdelen speerwerken, horden en verspringen?",
            "answer": "Atletiek",
            "category": "Sport"
        },
        {
            "question": "Welke sport staat centraal tijdens het zwarte crossfestival?",
            "answer": "Motorsport",
            "category": "Sport"
        },
        {
            "question": "Welke sport wordt in het Engels baseball genoemd?",
            "answer": "Honkbal",
            "category": "Sport"
        },
        {
            "question": "Bij welke watersport springt met zo mooi mogelijk vanaf een plank in het water?",
            "answer": "Schoonspringen",
            "category": "Sport"
        },
        {
            "question": "Welke trui mag de wereldkampioen wielrennen dragen?",
            "answer": "De regenboogtrui",
            "category": "Sport"
        },
        {
            "question": "Hoe wordt de platte schijf genoemd waarmee men bij ijshockey dient te scoren?",
            "answer": "Puck",
            "category": "Sport"
        },
        {
            "question": "Wat is het oudste tennistoernooi ter wereld?",
            "answer": "Wimbledon",
            "category": "Sport"
        },
        {
            "question": "Hoe wordt bij tennis een winnende opslag genoemd waarbij de tegenstander de bal niet raakt?\"",
            "answer": "Ace",
            "category": "Sport"
        },
        {
            "question": "Welke Argentijnse voetballer wordt de kleine Maradonna genoemd?",
            "answer": "Lionel Messi",
            "category": "Sport"
        },
        {
            "question": "Welk land mag in 2022 het WK voetbal organiseren?",
            "answer": "Qatar",
            "category": "Sport"
        },
        {
            "question": "Welke sport wordt ook wel kunstzwemmen of waterballet genoemd?",
            "answer": "Synchroonzwemmen",
            "category": "Sport"
        },
        {
            "question": "Welk turnonderdeel is geen Olympische sport voor vrouwen?",
            "answer": "Ringen",
            "category": "Sport"
        },
        {
            "question": "Wat is de start en aankomstplaats van de Elfstedentocht?",
            "answer": "Leeuwarden",
            "category": "Sport"
        },
        {
            "question": "Welke sport kent de termen freeze, windmill en headspin?",
            "answer": "Breakdance",
            "category": "Sport"
        },
        {
            "question": "Hoe wordt de vorm van surfen genoemd waarbij de surfplank minimaal 233 cm lang is?",
            "answer": "Long(board)surfen",
            "category": "Sport"
        },
        {
            "question": "Hoe wordt het surfen genoemd waarbij men zich laat voort trekken door een vlieger?",
            "answer": "Kitesurfen",
            "category": "Sport"
        },
        {
            "question": "Hoe wordt de afslagplaats bij golf genoemd?",
            "answer": "Tee",
            "category": "Sport"
        },
        {
            "question": "Hoe wordt het turnen op een bewegend paard genoemd?",
            "answer": "Voltige",
            "category": "Sport"
        },
        {
            "question": "Hoe wordt een dumbbell genoemd met een lang halter voor het gebruik met 2 handen?",
            "answer": "Barbell",
            "category": "Sport"
        },
        {
            "question": "Uit hoeveel veldspelers bestaat een waterpoloteam?",
            "answer": "6",
            "category": "Sport"
        },
        {
            "question": "Welke sport kent de termen bunkerslag, putten en chip?",
            "answer": "Golf",
            "category": "Sport"
        },
        {
            "question": "Op de laatste zaterdag van welke maand worden de TT Assen gehouden?",
            "answer": "Juni",
            "category": "Sport"
        },
        {
            "question": "Welke Italiaanse voetbalclub wordt vergeleken met een oude dame?",
            "answer": "Juventus",
            "category": "Sport"
        },
        {
            "question": "In welke stad brandde het Olympische vuur voor het eerst?",
            "answer": "Amsterdam",
            "category": "Sport"
        },
        {
            "question": "Van welk atletiek onderdeel heeft Mike Powell sinds 1991 het record op zijn naam staan?",
            "answer": "Verspringen",
            "category": "Sport"
        },
        {
            "question": "Uit welk onderdeel bestaat een originele triatlon naast zwemmen en fietsen nog meer?",
            "answer": "Hardlopen",
            "category": "Sport"
        },
        {
            "question": "Welke Nederlandse gemeente heeft als enige geen voetbalvereniging?",
            "answer": "Vlieland",
            "category": "Sport"
        },
        {
            "question": "In welk jaar werd het Feyenoord stadion geopend?",
            "answer": "1937",
            "category": "Sport"
        },
        {
            "question": "Hoe wordt het scorebord bij kaatsen genoemd?",
            "answer": "Telegraaf",
            "category": "Sport"
        },
        {
            "question": "Sinds welk jaar is ijshockey een Olympische sport?",
            "answer": "1920",
            "category": "Sport"
        },
        {
            "question": "Hoeveel kilo weegt een discus voor vrouwen bij het discuswerpen?",
            "answer": "1 Kilo",
            "category": "Sport"
        },
        {
            "question": "Hoe worden bij het bowlen 3 strikes achter elkaar genoemd?",
            "answer": "Turkey",
            "category": "Sport"
        },
        {
            "question": "Bij welke sport hoort het lied \"Take me out to the Ball Game\"?",
            "answer": "Honkbal",
            "category": "Sport"
        },
        {
            "question": "Welke sport is onder te verdelen in de categorieën cross country, downhill, dirt jumping, enduro en freeride?",
            "answer": "Mountainbiken",
            "category": "Sport"
        },
        {
            "question": "Welke sport betekend in het Japans \"zachte weg\"?",
            "answer": "Judo",
            "category": "Sport"
        },
        {
            "question": "Om de hoeveel jaar wordt het wereldkampioenschap cricket gehouden?",
            "answer": "Om de 4 jaar",
            "category": "Sport"
        },
        {
            "question": "Welke sport wordt beoefend bij biatlon?",
            "answer": "Skisport",
            "category": "Sport"
        },
        {
            "question": "Bij welke sport kan men de titel Mr. Olympia behalen?",
            "answer": "Bodybuilding",
            "category": "Sport"
        },
        {
            "question": "Hoe worden de aangepaste skistokken genoemd die worden gebruikt bij nordic walking?",
            "answer": "Poles",
            "category": "Sport"
        },
        {
            "question": "Bij welke sport heb je te maken met een loodgordel, een buddylijn en een manometer?",
            "answer": "Duiksport",
            "category": "Sport"
        },
        {
            "question": "Hoe heet de uitgezette route voor langlaufers?",
            "answer": "Een loipe",
            "category": "Sport"
        },
        {
            "question": "Welke sport is ontstaan toen een groep duikers op zoek was naar een manier om in de winter hun conditie op peil te houden?",
            "answer": "Onderwaterhockey",
            "category": "Sport"
        },
        {
            "question": "Hoe wordt het bij snowboarden genoemd wanneer je met je rechtervoet voorop het board staat?",
            "answer": "Goofy",
            "category": "Sport"
        },
        {
            "question": "Welke extreme vorm van surfen begint pas bij golven van 8 meter hoog?",
            "answer": "Big Wave Surfing",
            "category": "Sport"
        },
        {
            "question": "Van welke 2 sporten is duatlon een combinatie?",
            "answer": "Wielrennen en hardlopen",
            "category": "Sport"
        }
    ])
}



