import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class TeamAanmaken extends React.Component {
    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <Col md={{span: 8, offset: 2}}>
                        <h1 className="text-center display-1">Quizzer Night</h1>
                    </Col>
                    <Col md={{span: 4, offset: 4}} className="h-100">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Vul hier de game room naam in</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Game room naam"
                                              required/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Vul hier uw team naam in.</Form.Label>
                                <Form.Control type="text"
                                              placeholder="team naam"
                                              required/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Bevestigen
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default TeamAanmaken
