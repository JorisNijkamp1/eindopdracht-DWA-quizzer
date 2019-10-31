import React from "react";
import * as ReactRedux from "react-redux";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {closeCurrentQuestion, teamAnswerIsCorrect} from "../../websocket";

class VragenBeherenUI extends React.Component {

    teamOphalen() {
        return (
            this.props.gameRoomTeams.map(teamName => {
                return this.props.allQuestionAnswers.map(teamAnswer => {
                    let answer = (teamName._id === teamAnswer.team_naam) ? teamAnswer.gegeven_antwoord : 'Nog geen antwoord gegeven..';

                    const currentGameStatus = this.props.currentGameStatus;
                    const currentTeamName = teamName._id;
                    const correct = teamAnswer.correct;

                    let questionStatus;
                    if (currentGameStatus === 'question_closed' && currentTeamName === teamAnswer.team_naam && correct === true) {
                        questionStatus =
                            <p className={"text-center"} style={{color: '#28a745'}}><i>Antwoord is goedgekeurd</i></p>;
                    } else if (currentGameStatus === 'question_closed' && currentTeamName === teamAnswer.team_naam && correct === false) {
                        questionStatus =
                            <p className={"text-center"} style={{color: '#dc3545'}}><i>Antwoord is afgewezen</i></p>;
                    } else if (currentGameStatus === 'question_closed' && currentTeamName === teamAnswer.team_naam) {
                        questionStatus = (
                            <div>
                                <Button variant="success" className={"float-left"} type="submit" onClick={() => {
                                    teamAnswerIsCorrect(this.props.gameRoom, this.props.roundNumber, this.props.questionNumber, currentTeamName, true)
                                }}>
                                    <FontAwesomeIcon icon={faCheck} aria-hidden="true"/>
                                </Button>
                                <Button variant="danger" className={"float-right"} type="submit" onClick={() => {
                                    teamAnswerIsCorrect(this.props.gameRoom, this.props.roundNumber, this.props.questionNumber, currentTeamName, false)
                                }}>
                                    <FontAwesomeIcon icon={faTimes} aria-hidden="true"/>
                                </Button>
                            </div>
                        )
                    }

                    if (currentTeamName === teamAnswer.team_naam) {
                        return (
                            <Col key={teamName._id} className={"pb-4"}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title className="text-center">{teamName._id}</Card.Title>
                                        <Card.Text className="text-center"><i>{answer}</i></Card.Text>
                                        {questionStatus}
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                })
            })
        )
    }

    render() {
        return (
            <div className="container-fluid px-md-5">
                <Row className="row py-5 text-white">
                    <Col lg={9} className={"mx-auto text-center"}>
                        <h1 className="display-3">Quizzer Night</h1>
                        <p className="lead mb-0">Beheer hier de status van de huidige vraag.</p>
                    </Col>
                </Row>

                <div className="rounded">
                    <Row>
                        <Col lg={4} className={"mb-4 mb-lg-0"}>
                            <div className="nav flex-column bg-white shadow-sm font-italic rounded p-3 text-center">
                                <h3 className={"text-center m-0"}>Quiz info</h3>
                                <hr/>
                                <p><b>Gameroom naam:</b><br/>{this.props.gameRoom}</p>
                                <p><b>Ronde:</b><br/>{this.props.roundNumber}</p>
                                <p><b>Vraag nr.:</b><br/>{this.props.questionNumber} / 10</p>

                                <Button variant="danger" type="submit" onClick={() => {
                                    closeCurrentQuestion(this.props.gameRoom, this.props.roundNumber)
                                }}>
                                    Vraag sluiten
                                </Button>
                            </div>
                        </Col>

                        <Col lg={8} className={"mb-5"}>
                            <div className="p-5 bg-white d-flex align-items-center shadow-sm rounded h-100">
                                <div className="demo-content">
                                    <h5>{this.props.currentQuestion}</h5>
                                    <p className="lead font-italic"><b>- Correcte
                                        antwoord:</b> {this.props.currentQuestionAnswer}</p>
                                    <Row>
                                        {this.teamOphalen()}
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        gameRoomTeams: state.createGame.gameRoomTeams,
        allQuestionAnswers: state.createGame.allQuestionAnswers,
        gameRoom: state.createGame.gameRoom,
        roundNumber: state.createGame.roundNumber,
        questionNumber: state.createGame.questionNumber,
        currentQuestion: state.createGame.currentQuestion,
        currentQuestionAnswer: state.createGame.currentQuestionAnswer,
        currentGameStatus: state.createGame.currentGameStatus
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export const VragenBeheren = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(VragenBeherenUI);
