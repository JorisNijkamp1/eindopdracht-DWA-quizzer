const port = 3001;
const serverHostname = `${window.location.hostname}:${port}`
const serverFetchBase = `${window.location.protocol}//${serverHostname}`

let theSocket;

export function openWebSocket() {
    if (theSocket) {
        theSocket.onerror = null;
        theSocket.onopen = null;
        theSocket.onclose = null;
        theSocket.close();
    }
    console.log("Opening socket for", `ws://${serverHostname}`);
    theSocket = new WebSocket(`ws://${serverHostname}`);

    // this method is not in the official API, but it's very useful.
    theSocket.sendJSON = function (data) {
        this.send(JSON.stringify(data));
    };

    // on open send a websocket message
    theSocket.onopen = function (eventInfo) {
        let message = {
            messageType: "NEW CONNECTION",
        };

        theSocket.sendJSON(message);
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

export function onMessage() {
    theSocket.onmessage = function (eventInfo) {
        var message = JSON.parse(eventInfo.data);

        switch (message.messageType) {
            case "NEW PLAYER":
                console.log(message.serverMessage);
                break;

            case "NEW TEAM":
                console.log(message);
                console.log('Nieuw team aangemaakt');
                break;

            default:
                console.log("Unknown messageType:", message);
        }
    };
}

function checkFetchError( response ) {
    return response.ok
        ? response.json()
        : Promise.reject(new Error('Unexpected response'));
}

