import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Redirect} from "react-router-dom";
import {createTeamStatusAction} from "../../action-reducers/createTeam-actionReducer";
import * as ReactRedux from "react-redux";

class TeamAanmakenUI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameRoomName: '',
            teamName: '',
        };
    }

    onChangeGameRoomName = (e) => {
        this.setState({
            gameRoomName: e.target.value,
        })
    };

    onChangeTeamName = (e) => {
        this.setState({
            teamName: e.target.value,
        })
    };

    handleSubmit = e => {
        e.preventDefault();

        const url = 'http://localhost:3001/api/team';
        let data = {
            gameRoomName: this.state.gameRoomName,
            teamName: this.state.teamName,
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
                    if (data.gameRoomAccepted === true) {
                        this.props.doChangeStatus("success")
                    } else if (data.gameRoomAccepted === false) {
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

    //ToDo
    ifSuccess() {
        if (this.props.status === "success") {
            console.log('Team geaccepteerd!');
            //return <Redirect to="/teamsbeheren"/>
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
                                <Form.Control type="text"
                                              value={this.state.gameRoomName}
                                              onChange={this.onChangeGameRoomName}
                                              className={this.errorMessage()}
                                              placeholder="Game room naam"/>
                                <div className="invalid-feedback">Deze gameroom bestaat niet!</div>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Vul hier uw team naam in.</Form.Label>
                                <Form.Control type="text"
                                              value={this.state.teamName}
                                              onChange={this.onChangeTeamName}
                                              placeholder="team naam"/>
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

function mapStateToProps(state) {
    return {
        status: state.createTeam.status,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        doChangeStatus: (status) => dispatch(createTeamStatusAction(status)),
    }
}

export const TeamAanmaken = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TeamAanmakenUI);
