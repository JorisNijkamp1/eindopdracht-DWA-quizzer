import React from "react";
import * as ReactRedux from "react-redux";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import {getGameRoomTeamsAction} from "../../action-reducers/createGame-actionReducer";
import {openWebSocket} from "../../serverCommunication";

class TeamsBeherenUI extends React.Component {

    webSocketCall = () => {
        const url = `http://localhost:3001/api/games/${this.props.gameRoom}/teams`;

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
                this.props.gameRoomTeamsActionRoom(data.teams)
            });
        }).catch(err => {
            console.log(err);
        })
    };

    getTeams() {
        return (
            this.props.gameRoomTeams.map((teamName, i) => {
                    console.log('Teamnaam is: ' + teamName);
                    return (
                        <Col key={teamName} md={{span: 6}}>
                            <Card>
                                <Card.Body>
                                    <Card.Title className="text-center">{teamName}</Card.Title>
                                    <Card.Text className="text-center">Team accepteren?</Card.Text>
                                    <Button variant="success" className={"float-left"} type="submit">
                                        Ja
                                    </Button>
                                    <Button variant="danger" className={"float-right"} type="submit">
                                        Nee
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            )
        )
    }

    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <Col md={{span: 8, offset: 2}}>
                        <h1 className="text-center display-1">Quizzer Night</h1>
                    </Col>
                    <Col className={"text-center"} md={{span: 4, offset: 4}}>
                        <Link to="/categorieen">
                            <Button variant="primary" type="submit">
                                Start de ronde
                            </Button>
                        </Link>
                    </Col>
                    <Col className={"text-center"} md={{span: 4, offset: 4}}>
                        <Button variant="primary" onClick={this.webSocketCall}>
                            ws call
                        </Button>
                    </Col>
                    {this.getTeams()}
                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        gameRoom: state.createGame.gameRoom,
        gameRoomTeams: state.createGame.gameRoomTeams
    }
}

function mapDispatchToProps(dispatch) {
    return {
        gameRoomTeamsActionRoom: (gameRoomTeams) => dispatch(getGameRoomTeamsAction(gameRoomTeams)),
    }
}

export const TeamsBeheren = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TeamsBeherenUI);
