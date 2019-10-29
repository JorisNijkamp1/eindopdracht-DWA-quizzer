import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import HeaderTitel from "../HeaderTitel";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class TeamAnswerQuestion extends React.Component {

    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <HeaderTitel/>
                    <Col md={{span: 8, offset: 2}}>
                        <h1 className="text-center display-5">Huidige vraag!</h1>
                    </Col>
                    <Col md={{span: 8, offset: 2}}>
                        <Card bg="dark" border="danger" text="white">
                            <Card.Header>Beantwoord hier de vraag!</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>U kunt uw antwoord wijzigen totdat de Quizz Master de vraag
                                            sluit!</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Uw antwoord"
                                                      autoComplete="off"/>
                                        <div className="invalid-feedback">
                                            Huh, deze game room bestaat niet
                                            <span role={"img"} aria-label={""}>😨</span>
                                        </div>
                                    </Form.Group>
                                    <Button variant="danger" type="submit">Uw antwoord verzenden!</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default TeamAnswerQuestion
