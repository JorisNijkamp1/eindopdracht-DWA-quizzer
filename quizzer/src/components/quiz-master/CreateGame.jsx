import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

import {openWebSocket} from '../../serverCommunication';
import {Redirect} from "react-router-dom";

class CreateGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameRoomName: '',
            status: false,
        };
    }

    onChangeGameRoomName = (e) => {
        this.setState({
            gameRoomName: e.target.value
        })
    };

    onOpenSocket = () => {
        console.log("onOpenSocket");
        let ws = openWebSocket();
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.gameRoomName);

        const url = 'http://localhost:3001/api/game';
        let data = {
            gameRoomName: this.state.gameRoomName
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            mode: 'cors'
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                    if (data.gameRoomNameAccepted === true) {
                        return this.setState({
                            status: "success"
                        })
                    } else if (data.gameRoomNameAccepted === false) {
                        this.setState({status: 'error'});
                    }
                }
            );
    };

    errorMessage() {
        if (this.state.status === "error") {
            return "is-invalid"
        }
    }

    ifSuccess() {
        if (this.state.status === "success") {
            return <Redirect to="/teamsbeheren" />
        }
    }

    render() {
        return (
            <Container>
                {this.ifSuccess()}
                <Row className="min-vh-100">
                    <Col md={{span: 8, offset: 2}}>
                        <h1 className="text-center display-1">Quizzer Night</h1>
                    </Col>
                    <Col md={{span: 4, offset: 4}} className="h-100">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Vul hier de game room naam in</Form.Label>
                                <Form.Control value={this.state.gameRoomName}
                                              onChange={this.onChangeGameRoomName}
                                              type="text"
                                              placeholder="Game room naam"
                                              className={this.errorMessage()}
                                              required/>
                                <div className="invalid-feedback">Deze gameroom bestaat al!</div>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Spel aanmaken
                            </Button>
                            <Link to="/" className="btn btn-link">Annuleren</Link>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CreateGame
