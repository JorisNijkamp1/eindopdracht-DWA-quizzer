import {theStore} from './index'
import {getGameRoomTeamsAction} from "./action-reducers/createGame-actionReducer";
import {createTeamNameStatusAction} from "./action-reducers/createTeam-actionReducer"

const port = 3001;
const serverHostname = `${window.location.hostname}:${port}`;
let theSocket;

export function openWebSocket() {
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
                //Do something
                console.log('CHOOSE CATEGORIES');
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
    let store = theStore.getState();
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
            theStore.dispatch(getGameRoomTeamsAction(data.teams))
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
                    sendChooseCategoriesMSG(gameRoom)
                }
            });
        }).catch(err => console.log(err))
    }
}

/*========================================
| Websocket send TEAM ACCEPT
*/
function sendChooseCategoriesMSG(gameRoom) {
    let message = {
        messageType: "CHOOSE CATEGORIES",
        gameRoom: gameRoom
    };

    theSocket.sendJSON(message);
}