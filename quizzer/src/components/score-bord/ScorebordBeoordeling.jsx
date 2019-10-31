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
            this.props.currentTeamsScoreboard.map(teamName => {
                return (
                    <Col md={{span: 4}} key={teamName._id}>
                        <Card>
                            <Card.Body>
                                <Card.Title className={"text-center display-4"}>{teamName._id}</Card.Title>
                                <Card.Text className={"text-center success"}>Goed</Card.Text>
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
        currentTeamsScoreboard: state.createScoreboard.currentTeamsScoreboard
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export const ScorebordBeoordeling = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(ScorebordBeoordelingUI);
