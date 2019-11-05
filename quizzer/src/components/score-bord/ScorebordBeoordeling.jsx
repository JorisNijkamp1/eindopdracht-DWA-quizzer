import React from "react";
import * as ReactRedux from "react-redux";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Card} from "react-bootstrap";
import HeaderTitel from "../HeaderTitel";

class ScorebordBeoordelingUI extends React.Component {

    getTeams() {
        return (
            this.props.teamAnswers.map(teamName => {
                let correctOrWrong = "";
                if (teamName.correct) {
                    correctOrWrong = (
                        <p className={"text-center"} style={{color: '#28a745'}}><i>U heeft het juiste antwoord
                            gegeven!</i></p>
                    )
                } else if (teamName.correct === null) {
                    correctOrWrong = ""
                } else if (!teamName.correct) {
                    correctOrWrong = (
                        <p className={"text-center"} style={{color: '#dc3545'}}><i>U heeft het verkeerde antwoord
                            gegeven!</i></p>
                    )
                }
                return (
                    <Col md={{span: 4}} key={teamName._id}>
                        <Card>
                            <Card.Body>
                                <Card.Title className={"text-center display-4"}>{teamName.team_naam}</Card.Title>
                                <Card.Text
                                    className={"text-center success"}><strong>{teamName.gegeven_antwoord}</strong></Card.Text>
                                <Card.Text
                                    className={"text-center success"}><strong>{correctOrWrong}</strong></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })
        )
    }

    render() {
        console.log(this.props.teamAnswers);
        return (
            <Container>
                <Row className="min-vh-100">
                    <HeaderTitel/>
                    <Col md={{span: 6, offset: 3}}>
                        <Card>
                            <Card.Body>
                                <Card.Title
                                    className={"text-center display-4"}>{this.props.currentQuestionCategory}</Card.Title>
                                <Card.Title className={"text-center"}>{this.props.currentQuestion}</Card.Title>
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
        currentQuestion: state.createGame.currentQuestion,
        currentQuestionCategory: state.createGame.currentQuestionCategory,
        currentTeamsScoreboard: state.createScoreboard.currentTeamsScoreboard,
        teamAnswers: state.createScoreboard.teamAnswers
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export const ScorebordBeoordeling = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(ScorebordBeoordelingUI);
