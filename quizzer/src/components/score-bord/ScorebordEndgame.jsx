import React from "react";
import * as ReactRedux from "react-redux";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Card} from "react-bootstrap";

class ScorebordEndgameUI extends React.Component {
    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <Col md={{span: 8, offset: 2}} className={"text-white text-center"}>
                        <h1 className="display-3">Quizzer Night</h1>
                        <h1 className="py-2 display-5">De winnaar van de Quiz is:</h1>
                        <Card text="success">
                            <Card.Header className={"text-center display-1"}><strong>Team han</strong></Card.Header>
                        </Card>
                    </Col>
                    <Col md={{span: 12, offset: 0}}>
                        <h2 className="text-center">De nummer 2 is:</h2>
                        <h2 className="text-center">Team2</h2>
                        <h3 className="text-center">De nummer 3 is:</h3>
                        <h3 className="text-center">Team3</h3>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export const ScorebordEndgame = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(ScorebordEndgameUI);
