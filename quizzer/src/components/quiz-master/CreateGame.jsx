import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

class CreateGame extends React.Component {

    handleOnclick = e => {
        e.preventDefault();
        console.log("hoi")
    };

    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <Col md={{span: 8, offset: 2}}>
                        <h1 className="text-center display-1">Quizzer Night</h1>
                    </Col>
                    <Col md={{span: 4, offset: 4}} className="h-100">
                        <Form onSubmit={this.handleOnclick}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label column="2">Vul hier de game room naam in</Form.Label>
                                <Form.Control type="text" placeholder="Game room naam"/>
                            </Form.Group>
                            <Link to="/teamsBeheren">
                                <Button variant="primary" type="submit">
                                    Spel aanmaken
                                </Button>
                            </Link>
                            <Link to="/" className="btn btn-link">Annuleren</Link>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CreateGame
