import {theStore} from './index'
import {
    createCurrentCategoryAction, createCurrentQuestionAction, createCurrentQuestionAnswerAction,
    getGameRoomTeamsAction,
    increaseGameRoundNumberAction, increaseQuestionNumberAction
} from "./action-reducers/createGame-actionReducer";
import {createTeamNameStatusAction} from "./action-reducers/createTeam-actionReducer"
import {createCurrentGameStatusAction, addTeamQuestionAnswerAction} from "./action-reducers/createGame-actionReducer";

const port = 3001;
const serverHostname = `${window.location.hostname}:${port}`;
let theSocket;

export function openWebSocket() {

    const store = theStore.getState();

    if (theSocket) {
        theSocket.onerror = null;
        theSocket.onopen = null;
        theSocket.onclose = null;
        theSocket.close();
    }
    theSocket = new WebSocket(`ws://${serverHostname}`);

    // this method is not in the official API, but it's very useful.
    theSocket.sendJSON = function (data) {
        this.send(JSON.stringify(data));
    };

    theSocket.onmessage = function (eventInfo) {
        var message = JSON.parse(eventInfo.data);

        switch (message.messageType) {
            case "NEW TEAM":
                getTeams();
                console.log('NEW TEAM');
                break;

            case "TEAM DELETED":
                theStore.dispatch(createTeamNameStatusAction('deleted'));
                console.log('TEAM DELETED');
                break;

            case "TEAM ACCEPTED":
                theStore.dispatch(createTeamNameStatusAction('success'));
                console.log('TEAM ACCEPTED');
                break;

            case "CHOOSE CATEGORIES":
                theStore.dispatch(createCurrentGameStatusAction('choose_categories'));
                let roundNumber = store.createGame.roundNumber;
                if (roundNumber) {
                    theStore.dispatch(increaseGameRoundNumberAction(roundNumber + 1))
                } else {
                    theStore.dispatch(increaseGameRoundNumberAction(1))
                }
                console.log('CHOOSE CATEGORIES');
                break;

            case "CHOOSE QUESTION":
                theStore.dispatch(createCurrentGameStatusAction('choose_question'));
                console.log('CHOOSE QUESTION');
                break;

            case "ASKING QUESTION":
                theStore.dispatch(createCurrentGameStatusAction('asking_question'));
                theStore.dispatch(createCurrentQuestionAction(message.question));
                theStore.dispatch(createCurrentCategoryAction(message.category));
                if (store.createGame.questionNumber) {
                    theStore.dispatch(increaseQuestionNumberAction(store.createGame.questionNumber + 1))
                } else {
                    theStore.dispatch(increaseQuestionNumberAction(1))
                }

                console.log('ASKING QUESTION');
                break;

            case "CORRECT QUESTION ANSWER":
                theStore.dispatch(createCurrentQuestionAnswerAction(message.answer));
                console.log('CORRECT QUESTION ANSWER');
                break;

            case "GET QUESTION ANSWERS":
                getQuestionAnswers(message.gameRoomName, message.roundNumber, message.questionNumber);
                console.log("GET QUESTION ANSWERS");
                break;

            default:
                console.log("Unknown messageType:", message);
        }
    };

    return theSocket;
}

/*========================================
| Websocket send NEW TEAM
*/
export function sendNewTeamMSG() {
    theSocket.onopen = function (eventInfo) {
        let message = {
            messageType: "NEW TEAM",
        };

        theSocket.sendJSON(message);
    };
}

/*========================================
| delete Team from a Gameroom (for Quizmaster)
*/
export function deleteTeam(gameRoom, teamName) {
    if (gameRoom && teamName) {
        const url = `http://localhost:3001/api/games/${gameRoom}/team/${teamName}`;

        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            mode: 'cors'
        };

        return fetch(url, options).then(response => {
            if (response.status !== 200) console.log("Er gaat iets fout" + response.status);
            response.json().then(data => {
                if (data.success) {
                    getTeams().then(r => sendTeamDeletedMSG(teamName));

                }
            });
        }).catch(err => console.log(err))
    }
}

/*========================================
| Websocket send TEAM DELETED
*/
function sendTeamDeletedMSG(teamName) {
    let message = {
        messageType: "TEAM DELETED",
        teamName: teamName
    };

    theSocket.sendJSON(message);
}

/*========================================
| Get all current teams from a Gameroom (For quizmaster)
*/
function getTeams() {
    const store = theStore.getState();
    let gameRoom = store.createGame.gameRoom;

    const url = `http://localhost:3001/api/games/${gameRoom}/teams`;

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        mode: 'cors'
    };

    return fetch(url, options).then(response => {
        if (response.status !== 200) {
            console.log("Er gaat iets fout" + response.status);
        }
        response.json().then(data => {
            if (data.success) {
                theStore.dispatch(getGameRoomTeamsAction(data.teams))
            }
        });
    }).catch(err => {
        console.log(err);
    })
}

/*========================================
| Accept a team in a Gameroom (for Quizmaster)
*/
export function acceptTeam(gameRoom, teamName) {
    if (gameRoom && teamName) {
        const url = `http://localhost:3001/api/games/${gameRoom}/team/${teamName}`;

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            mode: 'cors'
        };

        return fetch(url, options).then(response => {
            if (response.status !== 200) console.log("Er gaat iets fout" + response.status);
            response.json().then(data => {
                if (data.success) {
                    getTeams().then(r => sendTeamAcceptMSG(teamName));
                }
            });
        }).catch(err => console.log(err))
    }
}

/*========================================
| Websocket send TEAM ACCEPT
*/
function sendTeamAcceptMSG(teamName) {
    let message = {
        messageType: "TEAM ACCEPTED",
        teamName: teamName
    };

    theSocket.sendJSON(message);
}

/*========================================
| Starting a NEW game (for Quizmaster)
*/
export function startGame(gameRoom) {
    if (gameRoom) {
        const url = `http://localhost:3001/api/games/${gameRoom}`;

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            mode: 'cors'
        };

        return fetch(url, options).then(response => {
            if (response.status !== 200) console.log("Er gaat iets fout" + response.status);
            response.json().then(data => {
                if (data.success) {
                    sendChooseCategoriesMSG()
                }
            });
        }).catch(err => console.log(err))
    }
}

/*========================================
| Websocket send TEAM ACCEPT
*/
function sendChooseCategoriesMSG() {
    let message = {
        messageType: "CHOOSE CATEGORIES",
    };

    theSocket.sendJSON(message);
}

/*========================================
| Starting a NEW round (for Quizmaster)
*/
export function startRound(gameRoom, categories) {
    if (gameRoom) {
        const url = `http://localhost:3001/api/games/${gameRoom}/ronde`;
        let data = {
            roundCategories: categories
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            mode: 'cors'
        };

        return fetch(url, options).then(response => {
            if (response.status !== 200) console.log("Er gaat iets fout" + response.status);
            response.json().then(data => {
                if (data.success) {
                    sendChooseQuestionsMSG()
                }
            });
        }).catch(err => console.log(err))
    }
}

/*========================================
| Websocket send CHOOSE QUESTION
*/
function sendChooseQuestionsMSG() {
    let message = {
        messageType: "CHOOSE QUESTION",
    };

    theSocket.sendJSON(message);
}

/*========================================
| Starting a NEW question (for Quizmaster)
*/
export function startQuestion(gameRoom, rondeID, question) {
    if (gameRoom) {
        const url = `http://localhost:3001/api/game/${gameRoom}/ronde/${rondeID}/question`;
        let data = {
            question: question
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            mode: 'cors'
        };

        return fetch(url, options).then(response => {
            if (response.status !== 200) console.log("Er gaat iets fout" + response.status);
            response.json().then(data => {
                if (data.success) {
                    console.log(data)
                    sendAskingQuestionsMSG(data.question, data.category, data.answer)
                }
            });
        }).catch(err => console.log(err))
    }
}

/*========================================
| Websocket send ASKING QUESTION
*/
function sendAskingQuestionsMSG(question, category, answer) {
    let message = {
        messageType: "ASKING QUESTION",
        question: question,
        category: category,
        answer: answer
    };

    theSocket.sendJSON(message);
}

/*========================================
| Get al answers from a question (for Quizmaster)
*/
export function getQuestionAnswers(gameRoom, rondeID, question) {
    if (gameRoom && rondeID && question) {

        const url = `http://localhost:3001/api/game/${gameRoom}/ronde/${rondeID}/question/${question}/answers`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            mode: 'cors'
        };

        return fetch(url, options).then(response => {
            if (response.status !== 200) console.log("Er gaat iets fout" + response.status);
            response.json().then(data => {
                if (data.success) {
                    theStore.dispatch(addTeamQuestionAnswerAction(data.answers));
                }
            });
        }).catch(err => console.log(err))
    }
}

/*========================================
| Websocket send GET QUESTION ANSWERS
*/
export function sendGetQuestionAnswersMSG(gameRoomName, roundNumber, questionNumber) {
    let message = {
        messageType: "GET QUESTION ANSWERS",
        gameRoomName: gameRoomName,
        roundNumber: roundNumber,
        questionNumber: questionNumber
    };

    theSocket.sendJSON(message);
}
