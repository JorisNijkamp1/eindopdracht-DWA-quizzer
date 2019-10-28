import React from "react";
import * as ReactRedux from "react-redux";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Card} from "react-bootstrap";
import {getGameRoomTeamsAction} from "../../action-reducers/createGame-actionReducer";
import {acceptTeam, deleteTeam, startGame} from "../../websocket";
import Badge from "react-bootstrap/Badge";
import Categorieen from "./Categorieen";
import TeamCategory from "../team-app/TeamCategory";
import {getGameNameAction} from "../../action-reducers/createTeam-actionReducer";

class TeamsBeherenUI extends React.Component {

    getTeams() {
        return (
            this.props.gameRoomTeams.map((teamName, i) => {
                    let teamStatus;
                    if (teamName['approved']) {
                        teamStatus = (
                            <div className="text-center">
                                <Badge pill variant="success">
                                    Geaccepteerd
                                </Badge>
                            </div>
                        )
                    } else {
                        teamStatus = (
                            <div>
                                <Card.Text className="text-center">Team accepteren?</Card.Text>
                                <Button variant="success" className={"float-left"} onClick={() => {
                                    acceptTeam(this.props.gameRoom, teamName['_id'])
                                }}>
                                    Ja
                                </Button>
                                <Button variant="danger" className={"float-right"} onClick={() => {
                                    deleteTeam(this.props.gameRoom, teamName['_id'])
                                }}>
                                    Nee
                                </Button>
                            </div>
                        )
                    }

                    return (
                        <Col key={teamName['_id']} md={{span: 6}}>
                            <Card>
                                <Card.Body>
                                    <Card.Title className="text-center">{teamName['_id']}</Card.Title>
                                    {teamStatus}
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            )
        )
    }

    startGameButton() {
        let button = null;
        if (this.props.gameRoomTeams.length > 0) {
            this.props.gameRoomTeams.map((teamName, i) => {
                if (teamName['approved']) {
                    button = (
                        <Button variant="outline-success" type="submit" onClick={() => {
                            startGame(this.props.gameRoom)
                        }}>
                            Start quiz
                        </Button>
                    )
                }
            })
        }
        return button
    }

    checkGameStatus() {
        if (this.props.currentGameStatus === 'choose_categories') {
            return <Categorieen/>
        }else {
            return (
                <Container>
                    <Row className="min-vh-100">
                        <Col md={{span: 8, offset: 2}}>
                            <h1 className="text-center display-3">Quizzer Night</h1>
                            <h3 className="text-center">Welkom Quiz master!</h3>
                            <h5 className={"text-center"}>
                                <b>Gameroom naam:</b>
                                <br/>
                                <u>
                                    {this.props.gameRoom}
                                </u>
                            </h5>
                            <div className={"justify-content-center align-items-center"}>
                                <div className="row h-100 justify-content-center align-items-center">
                                    {this.startGameButton()}
                                </div>
                            </div>
                        </Col>
                        <Col className={"text-center"}>

                        </Col>
                        {this.getTeams()}
                    </Row>
                </Container>
            )
        }
    }

    render() {
        return this.checkGameStatus()
    }
}

function mapStateToProps(state) {
    return {
        gameRoom: state.createGame.gameRoom,
        gameRoomTeams: state.createGame.gameRoomTeams,
        currentGameStatus: state.createGame.currentGameStatus
    }
}

function mapDispatchToProps(dispatch) {
    return {
        doChangeGameRoom: (gameRoomName) => dispatch(getGameNameAction(gameRoomName))
    }
}

export const TeamsBeheren = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TeamsBeherenUI);
