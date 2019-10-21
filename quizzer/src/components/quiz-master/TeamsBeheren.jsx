import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";

class TeamsBeheren extends React.Component {
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
                    <Col md={{span: 6}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">Teamnaam 1</Card.Title>
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
                    <Col md={{span: 6}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">Teamnaam 1</Card.Title>
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
                </Row>
            </Container>
        )
    }
}

export default TeamsBeheren
