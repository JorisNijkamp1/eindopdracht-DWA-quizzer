import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Card} from "react-bootstrap";

class ScorebordOverzichtScore extends React.Component {

    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <Col md={{span: 8, offset: 2}}>
                        <h1 className="text-center display-3">Quizzer Night</h1>
                    </Col>
                    <Col md={{span: 6, offset: 3}}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Ronde: 2</Card.Title>
                                <Card.Title>Vraag: 2/12</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Teamnaam 1</Card.Title>
                                <Card.Text>RP: 12</Card.Text>
                                <Card.Text>Round 1: 10/12</Card.Text>
                                <Card.Text>Round2: 8/12</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Teamnaam 2</Card.Title>
                                <Card.Text>RP: 12</Card.Text>
                                <Card.Text>Round 1: 10/12</Card.Text>
                                <Card.Text>Round2: 8/12</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Teamnaam 3</Card.Title>
                                <Card.Text>RP: 12</Card.Text>
                                <Card.Text>Round 1: 10/12</Card.Text>
                                <Card.Text>Round2: 8/12</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ScorebordOverzichtScore
