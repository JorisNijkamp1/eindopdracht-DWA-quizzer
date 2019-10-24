import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {createGameRoomStatusAction, createTeamNameStatusAction} from "../../action-reducers/createTeam-actionReducer";
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
                        this.props.doChangeGameRoomStatus(data.gameRoomAccepted)
                        if (data.teamNameStatus === 'pending') {
                            this.props.doChangeTeamNameStatus(data.teamNameStatus)
                        }else if (data.teamNameStatus === 'error') {
                            this.props.doChangeTeamNameStatus(data.teamNameStatus)
                        }
                    } else if (data.gameRoomAccepted === false) {
                        this.props.doChangeGameRoomStatus(data.gameRoomAccepted)
                    }
                }
            );
    };

    gameRoomError() {
        if (this.props.gameRoomAccepted === false) {
            return "is-invalid"
        }
    }

    teamNameError() {
        if (this.props.teamNameStatus === 'error') {
            return "is-invalid"
        }
    }

    isPending() {
        if (this.props.teamNameStatus === 'pending') {
            console.log('Team verstuurd naar Quizmaster!');
            return <p>Team aanvraag verstuurd, wacht op de quizz-master</p>
        } else {
            return <Button variant="primary" type="submit">Bevestigen</Button>
        }
    }

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
                                              value={this.state.gameRoomName}
                                              onChange={this.onChangeGameRoomName}
                                              className={this.gameRoomError()}
                                              placeholder="Game room naam"/>
                                <div className="invalid-feedback">Deze gameroom bestaat niet!</div>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Vul hier uw team naam in.</Form.Label>
                                <Form.Control type="text"
                                              value={this.state.teamName}
                                              onChange={this.onChangeTeamName}
                                              className={this.teamNameError()}
                                              placeholder="team naam"/>
                                <div className="invalid-feedback">Deze teamnaam bestaat al!</div>
                            </Form.Group>
                            {this.isPending()}
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        gameRoomAccepted: state.createTeam.gameRoomAccepted,
        teamNameStatus: state.createTeam.teamNameStatus
    }
}

function mapDispatchToProps(dispatch) {
    return {
        doChangeGameRoomStatus: (gameRoomAccepted) => dispatch(createGameRoomStatusAction(gameRoomAccepted)),
        doChangeTeamNameStatus: (teamNameStatus) => dispatch(createTeamNameStatusAction(teamNameStatus)),
    }
}

export const TeamAanmaken = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TeamAanmakenUI);
