import React from "react";
import * as ReactRedux from "react-redux";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import {ScorebordOverzichtScore} from "./ScorebordOverzichtScore";
import {createScorebordStatusAction} from '../../action-reducers/createScorebord-actionReducer'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import Menu from "../Menu";
import HeaderTitel from "../HeaderTitel";

class ScorebordJoinTeamUI extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            gameRoomName: '',
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.gameRoomName);

        const url = `http://localhost:3001/api/games/${this.state.gameRoomName}/scorebord`;

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            mode: 'cors'
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                    if (data.success) {
                        // openWebSocket();
                        console.log("De game bestaat");
                        this.props.doChangeStatus("succes");
                    } else {
                        console.log("De game bestaat niet");
                        this.props.doChangeStatus("error");
                    }
                }
            );
    };

    errorMessage() {
        if (this.props.formValidation === "error") {
            return "is-invalid"
        }
    }

    onChangeGameRoomName = (e) => {
        this.setState({
            gameRoomName: e.target.value,
        })
    };

    createScoreBord() {
        if (this.props.formValidation === "succes") {
            return <ScorebordOverzichtScore/>
        } else {
            return (
                <Container>
                    <Row className="min-vh-100">
                        <HeaderTitel/>
                        <Col md={{span: 8, offset: 2}} className="h-100">
                            <Form onSubmit={this.handleSubmit}>
                                <Card bg="dark" border="danger" text="white">
                                    <Card.Header>Maak een nieuwe Quizzer aan</Card.Header>
                                    <Card.Body>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Vul hier de game room naam in van de game die je wilt
                                                zien!</Form.Label>
                                            <Form.Control type="text"
                                                          onChange={this.onChangeGameRoomName}
                                                          placeholder="Game room naam"
                                                          className={this.errorMessage()}
                                                          autoComplete="off"/>
                                            <div className="invalid-feedback">Deze gameroom bestaat niet!</div>
                                        </Form.Group>
                                        <Button variant="danger" type="submit">
                                            Ga naar scorebord overzicht
                                        </Button>
                                        <Link to="/" className="btn btn-link">Annuleren</Link>
                                    </Card.Body>
                                </Card>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }

    render() {
        return (
            <div>
                <Menu/>
                {this.createScoreBord()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        formValidation: state.createScorebord.formValidation,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        doChangeStatus: (formValidation) => dispatch(createScorebordStatusAction(formValidation))
    }
}

export const ScorebordJoinTeam = ReactRedux.connect(mapStateToProps,
    mapDispatchToProps)(ScorebordJoinTeamUI);
