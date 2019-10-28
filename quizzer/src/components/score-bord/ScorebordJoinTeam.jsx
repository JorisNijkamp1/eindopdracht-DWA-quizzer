import React from "react";
import * as ReactRedux from "react-redux";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import {
    createGameRoomStatusAction,
    createTeamNameStatusAction, getGameNameAction,
    getTeamNameAction
} from "../../action-reducers/createTeam-actionReducer";
import Button from "react-bootstrap/Button";

class ScorebordJoinTeamUI extends React.Component {


    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <Col md={{span: 8, offset: 2}}>
                        <h1 className="text-center display-1">Quizzer Night</h1>
                    </Col>

                    <Col md={{span: 8, offset: 2}} className="h-100">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Vul hier de game room naam in van de game die je wilt zien!</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Game room naam"
                                              autoComplete="off"/>
                                <div className="invalid-feedback">Deze gameroom bestaat niet!</div>
                            </Form.Group>
                            <Button className={"w-100"} variant="primary" type="submit">
                                Ga naar scorebord overzicht
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
        gameRoomAccepted: state.createTeam.gameRoomAccepted,
        teamNameStatus: state.createTeam.teamNameStatus,
        teamRoomName: state.createTeam.teamRoomName,
        gameRoomName: state.createTeam.gameRoomName,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        doChangeGameRoomStatus: (gameRoomAccepted) => dispatch(createGameRoomStatusAction(gameRoomAccepted)),
        doChangeTeamNameStatus: (teamNameStatus) => dispatch(createTeamNameStatusAction(teamNameStatus)),
        doChangeTeamName: (teamName) => dispatch(getTeamNameAction(teamName)),
        doChangeGameRoom: (gameRoomName) => dispatch(getGameNameAction(gameRoomName))
    }
}

export const ScorebordJoinTeam = ReactRedux.connect(mapStateToProps,
    mapDispatchToProps)(ScorebordJoinTeamUI);