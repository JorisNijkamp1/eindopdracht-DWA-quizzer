import {theStore} from './index'
import {getGameRoomTeamsAction} from "./action-reducers/createGame-actionReducer";

let theSocket;
export function openWebSocket() {
    if (theSocket) {
        theSocket.onerror = null;
        theSocket.onopen = null;
        theSocket.onclose = null;
        theSocket.close();
    }
    console.log("Opening socket for", `ws://localhost:3001`);
    theSocket = new WebSocket(`ws://localhost:3001`);

    // this method is not in the official API, but it's very useful.
    theSocket.sendJSON = function (data) {
        this.send(JSON.stringify(data));
    };

    theSocket.onmessage = function (eventInfo) {
        var message = JSON.parse(eventInfo.data);

        switch (message.messageType) {
            case "NEW PLAYER":
                console.log(message.serverMessage);
                break;

            case "NEW TEAM":
                console.log('Nieuw team aangemaakt');
                getTeams()
                break;

            default:
                console.log("Unknown messageType:", message);
        }
    };

    return theSocket;
}

export function createTeam() {
    theSocket.onopen = function (eventInfo) {
        let message = {
            messageType: "NEW TEAM",
        };

        theSocket.sendJSON(message);
    };
}

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
            console.log(data.teams)
            // this.props.gameRoomTeamsActionRoom(data.teams)
            theStore.dispatch(getGameRoomTeamsAction(data.teams))
        });
    }).catch(err => {
        console.log(err);
    })
}


