import React from "react";
import * as ReactRedux from "react-redux";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Card} from "react-bootstrap";
import HeaderTitel from "../HeaderTitel";

class ScorebordOverzichtScoreUI extends React.Component {

    test() {
        console.log(this.props.currentTeamsScoreboard);
    }

    getTeams() {
        return (
            this.props.currentTeamsScoreboard.map(teamName => {
                return (
                    <Col md={{span: 6}} key={teamName._id}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{teamName._id}</Card.Title>
                                <Card.Text>{teamName.team_score}</Card.Text>
                                <Card.Text>Round 1: 10/12</Card.Text>
                                <Card.Text>Round2: 8/12</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })
        )
    }

    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <HeaderTitel/>
                    {this.test()}
                    <Col md={{span: 6, offset: 3}}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Ronde: 2</Card.Title>
                                <Card.Title>Vraag: 2/12</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    {this.getTeams()}
                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        // currentQuestion: state.createGame.currentQuestion,
        // currentQuestionCategory: state.createGame.currentQuestionCategory,

        // roundNumber: state.createGame.roundNumber,
        // questionNumber: state.createGame.questionNumber,
        gameRoomTeams: state.createGame.gameRoomTeams,
        currentTeamsScoreboard: state.createScoreboard.currentTeamsScoreboard
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //Do something
    }
}

export const ScorebordOverzichtScore = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(ScorebordOverzichtScoreUI);
