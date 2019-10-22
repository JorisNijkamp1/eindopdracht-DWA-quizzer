import React from "react";
import * as ReactRedux from 'react-redux';
import {createGameStatusAction} from '../../action-reducers/createGame-actionReducer';

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

import {openWebSocket} from '../../serverCommunication';
import {Redirect} from "react-router-dom";

class CreateGameUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameRoomName: '',
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
                        this.props.doChangeStatus("success")
                    } else if (data.gameRoomNameAccepted === false) {
                        this.props.doChangeStatus("error")
                    }
                }
            );
    };

    errorMessage() {
        if (this.props.status === "error") {
            return "is-invalid"
        }
    }

    ifSuccess() {
        if (this.props.status === "success") {
            return <Redirect to="/teamsbeheren"/>
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

function mapStateToProps(state) {
    return {
        status: state.createGame.status,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        doChangeStatus: (status) => dispatch(createGameStatusAction(status)),
    }
}

export const CreateGame = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(CreateGameUI);
