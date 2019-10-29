import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import HeaderTitel from "../HeaderTitel";

class VragenBeheren extends React.Component {
    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <HeaderTitel/>
                    <Col md={{span: 6}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">Teamnaam 1</Card.Title>
                                <Card.Text className="text-center">Antwoord</Card.Text>
                                <Button variant="success" className={"float-left"} type="submit">
                                    Goed
                                </Button>
                                <Button variant="danger" className={"float-right"} type="submit">
                                    Fout
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 6}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">Teamnaam 2</Card.Title>
                                <Card.Text className="text-center">Antwoord</Card.Text>
                                <Button variant="success" className={"float-left"} type="submit">
                                    Goed
                                </Button>
                                <Button variant="danger" className={"float-right"} type="submit">
                                    Fout
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className={"text-center"} md={{span: 3, offset: 2}}>
                        <Link to="/vragen-beheren">
                            <Button variant="danger" type="submit">
                                Vraag sluiten
                            </Button>
                        </Link>
                    </Col>
                    <Col className={"text-center"} md={{span: 3, offset: 2}}>
                        <Link to="/vragen">
                            <Button variant="success" type="submit">
                                Volgende vraag
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default VragenBeheren
