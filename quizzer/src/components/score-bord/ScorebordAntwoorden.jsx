import React from "react";
import * as ReactRedux from "react-redux";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Card} from "react-bootstrap";
import HeaderTitel from "../HeaderTitel";


class ScorebordAntwoordUI extends React.Component {

    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <HeaderTitel/>
                    <Col md={{span: 6, offset: 3}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className={"text-center display-4"}>Wetenschappelijk</Card.Title>
                                <Card.Title className={"text-center"}>Wat betekentd h2o?</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className={"text-center display-4"}>Teamnaam 1</Card.Title>
                                <Card.Text className={"text-center"}>Nog niet geantwoord</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className={"text-center display-4"}>Teamnaam 2</Card.Title>
                                <Card.Text className={"text-center"}>Nog niet geantwoord</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className={"text-center display-4"}>Teamnaam 3</Card.Title>
                                <Card.Text className={"text-center"}>Geantwoord!</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentQuestion: state.createGame.currentQuestion,
        currentQuestionCategory: state.createGame.currentQuestionCategory,

        gameRoomName: state.createTeam.gameRoomName,
        teamRoomName: state.createTeam.teamRoomName,
        roundNumber: state.createGame.roundNumber,
        questionNumber: state.createGame.questionNumber
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // Nog niks nodig? Eventueel later
    }
}

export const ScorebordAntwoorden = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(ScorebordAntwoordUI);
