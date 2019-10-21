import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";

class Categorieen extends React.Component {
    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <Col md={{span: 8, offset: 2}}>
                        <h1 className="text-center display-1">Quizzer Night</h1>
                    </Col>
                    <Col className={"text-center"} md={{span: 6, offset: 3}}>
                        <Link to="/vragen">
                            <Button variant="primary" type="submit">
                                Gekozen categorieën kiezen
                            </Button>
                        </Link>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">Algemeen</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">Wijn</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">Wetenschap</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">Bier</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">Wetenschap</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">Bier</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">Wetenschap</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">Bier</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">Wetenschap</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">Bier</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">Wetenschap</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">Bier</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Categorieen
