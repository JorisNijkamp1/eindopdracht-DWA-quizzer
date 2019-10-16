# The Quizzer

## Functionaliteiten

 - [ ] Het spel word gespeeld in **teams**. Dus eigenlijk is 1 team gewoon 1 speler (maar in het echt is het dus 3 tot 8 spelers maar dat maakt voor ons niets uit).
 - [ ] *A Quizz Night* bestaat meestal al uit **2 tot 6 teams**.
 - [ ] *A Quizz Night* bestaat uit **meerdere rondes**. Met elke **ronde 12 vragen**. Gekozen uit **drie categorieën**.
 - [ ] Naast de teams is er ook een Quizz Master die de vragen selecteert. Ook bepaalt de Quizz Master of de gegeven antwoorden goed of fout zijn.
 - [ ] Elke team deelt een tafel en 1 team lid die stuurt de antwoordden op naar de Quiz Master.
 - [ ] De Quiz Master gebruik een tablet om het spel te beheren.
 - [ ] Een groot scherm (beamer) wordt gebruikt om de scores van alle teams te laten zien, de huidige vraag en de team die de vraag beantwoord hebben.
 - [ ] De Quizzer vragen bestaan uit korte antwoordden. Bijvoorbeeld: "Wat is de hoofdstad van Nederland". Antwoord: "Amsterdam".
 - [ ] De Quiz Master beslist wanneer Quizz Night voorbij is. Wanneer het voorbij is wordt de winnaar geselecteerd op basis van de resultaten van alle gespeelde rondes.


## Ontwerp

### 1. De Team app functionaliteiten
*De Team app runt op een smartphone van een speler.*
 - [ ] Een speler moet zich als een team kunnen aanmelden, daarbij moeten ze een teamnaam kunnen invoeren. De teamnaam moet worden goedgekeurd of afgewezen door de Quizmaster.
 - [ ] De Team app toont de huidige vraag waarbij het team een antwoord kan invoeren.

### 2. The Quizz Master app functionaliteiten

*Deze master app wordt beheert door de Quizz Master en kan de volgende taken uitvoeren:*
 - [ ] De Quizz Night beginnen en het open voor spelers en teams (applications).
 - [ ] Teams accepteren en weigeren.
 - [ ] De quizz beginnen met alle teams die mee doen.
 - [ ] Quinzz Round (met 12 vragen) en drie categorieën selecteren en dan "Start round" klikken om te beginnen.
 - [ ] Na een Quizz Round beslissen om nog een ronde te spelen of om te stoppen met de Quizz Night.
 - [ ] De volgende vraag selecteren. Dit is een interessant scherm.
 - [ ] Start de geselecteerde vraag door op een knop te drukken. Nadat dit is gebeurt laat de Score Board en het Team App de vraag zien. En kunnen de teams hun antwoord invullen. Teams kunnen de vraag beantwoordden tot dat de Quizz Master de vraagt sluiten door op een knop te drukken.
 - [ ] De antwoordden van de teams lezen en bepalen of het antwoord goed of fout is.
 
 ### 3. De Score Board app functionaliteiten
 *De Score Board app runt op een groot scherm, bijvoorbeeld een beamer. Verder heeft deze app geen interactie, maar toont het volgende in realtime:*
  - [ ] De voortgang: **hoeveel rondes zijn er gespeeld, hoeveel vragen zijn er in een ronde.**
  - [ ] De teamnamen met hun scores in **ronde punten (RP's)** en het **aantal correct beantwoorde vragen per ronde**.
 	- Ronde punten worden als volgt toegekend: na elke ronde van twaalf vragen krijgt het team met de meeste juiste antwoorden 4 ronde punten (RP's).
 	- Het tweede team krijgt 2 RP's en het derde team krijgt 1 RP. Alle andere teams ontvangen 0,1 RP's voor hun inzet.
  - [ ] Wanneer een quizvraag aan de gang is (deze quizvraag is aan de gang en dus nog niet gesloten door de Quizmaster) wordt de volgende informatie weergegeven:
 	 - De vraag;
 	 - De categorie van de vraag;
 	 - Welke teams een antwoord hebben gegeven, maar niet het antwoord zelf;
 - [ ] Wanneer de huidige quizvraag wordt gesloten, worden alle teamantwoorden weergegeven. Zodra een antwoord is goedgekeurd of afgewezen wordt dit ook weergegeven en worden de teamscores bijgewerkt.
 
 ## HINT
1. Recommended WebSocket architecture Deciding which part of the communication should be implemented using WebSockets and which part    using plain old HTTP is by no means trivial. In theory you could    build your entire application using only WebSockets.  The recommended approach is to implement all communication involving  Quizzer data using HTTP. Whenever the server has new data, use  WebSockets to notify the clients and let the client make an HTTP  request to fetch the data. 
    1.1 This architecture is by no means the most efficient solution, but it makes it much easier to structure your app. Exclusively using WebSockets can easily lead to a nasty mess.  
2. Cooperation and merge conflicts When working together on a shared code base, merge conflicts are a part of life. You can mitigate the risk of this annoyance by defining clearly separated chunks of functionality and avoid working on the same chunk at the same time. An example of two chunks is the React- and the Express-part (but you could also define smaller chunks).  
    2.1 Try to merge your work often (at least daily). If you postpone merging until the end, you won’t suffer any conflicts until the final day. However, the merge conflict you’ll face then will probably be too big to solve before the deadline. 
 
 ## EXTRA FEATURES
When you’re confident that you’ve implemented all of the aspects mentioned in this document you can consider adding a few extra features. We award bonus points for these extra features, granted that your application would get a passing mark without them. Feel	free	to	add	your	own	functionalities	or	rules.	Here	are	a	few	ideas:		
 
 • The team selfie — Use the HTML5 API to access the phone’s camera and allow the team to take a selfie that they can send with their team application. The photo can then be shown on the score board.  
 
 • PhoneGap — It’s a lot easier than you think to wrap the client side part of an SPA in a native Android or iOS app. A tool that is often used for this purpose is called ‘PhoneGap’. 
 
 • Funny badges — Allow the Quizz Master to send funny or encouraging badges to teams whenever he or she wants. Examples of this could be badges saying “Funny answer”, “Awkward typo”, “Fast and furious”, etc. The badges don’t need to count towards the final score. 
 
 • Thinking time — Instead of having the Quizz Master manually close a question, you could implement a clock that starts counting down as soon as the question has started and closes the question when it reaches zero. The scoreboard could show this clock in real time. 
 
 • History — The app remembers the teams, allowing competition and rivalry that spans multiple Quizz Nights. 
 
 • Automated test – Mongoose models and/or Express routes are automatically tested by test scripts that make use of Mocha (or any other framework). 
