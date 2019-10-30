import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import {
    createGameRoomStatusAction,
    createTeamNameStatusAction,
    getTeamNameAction,
    getGameNameAction
} from "../../action-reducers/createTeam-actionReducer";
import * as ReactRedux from "react-redux";
import {openWebSocket, sendNewTeamMSG} from "../../websocket";
import {PropagateLoader} from 'react-spinners';
import {Link} from "react-router-dom";
import 'react-notifications-component/dist/theme.css'
import {store} from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import TeamCategory from "./TeamCategory";
import Card from "react-bootstrap/Card";
import Menu from "../Menu";
import HeaderTitel from "../HeaderTitel";
import TeamQuestions from "./TeamQuestions";
import {TeamAnswerQuestion} from "./TeamAnswerQuestion";

class TeamAanmakenUI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameRoomName: '',
            teamName: '',
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.teamNameStatus === 'deleted') {
            store.addNotification({
                title: 'Quizzer',
                message: 'Je bent uit de game gekickt 😂',
                type: 'danger',                          // 'default', 'success', 'info', 'warning'
                container: 'top-right',                  // where to position the notifications
                animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                dismiss: {
                    duration: 3000
                }
            })
        }
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
                        this.props.doChangeGameRoomStatus(data.gameRoomAccepted);
                        if (data.teamNameStatus === 'pending') {
                            this.props.doChangeTeamNameStatus(data.teamNameStatus);
                            this.props.doChangeTeamName(data.teamName);
                            this.props.doChangeGameRoom(data.gameRoomName);
                            openWebSocket();    //open websocket connection
                            sendNewTeamMSG();       //send message createTeam
                        } else if (data.teamNameStatus === 'error') {
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

    // Deze fucntie wordt in geladen als team status pending is
    loadingAnimation() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <Col xs={{span: 12}}>
                        <div className="d-flex align-items-center justify-content-center h-100">
                            <PropagateLoader
                                sizeUnit={"px"}
                                size={30}
                                color={'#123abc'}
                                loading="true"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

    // Deze fucntie wordt in geladen als team status niet geset is
    joinGameForm() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <HeaderTitel/>
                    <Col md={{span: 8, offset: 2}} className="h-100">
                        <Card bg="dark" border="danger" text="white">
                            <Card.Header>Join een bestaande Quizzer</Card.Header>
                            <Card.Body>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group>
                                        <Form.Label>Vul hier een bestaande game room in</Form.Label>
                                        <Form.Control type="text"
                                                      value={this.state.gameRoomName}
                                                      onChange={this.onChangeGameRoomName}
                                                      className={this.gameRoomError()}
                                                      placeholder="Game room naam"
                                                      autoComplete="off"/>
                                        <div className="invalid-feedback">
                                            Huh, deze game room bestaat niet
                                            <span role={"img"} aria-label={""}>😨</span>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Vul hier uw team naam in.</Form.Label>
                                        <Form.Control type="text"
                                                      value={this.state.teamName}
                                                      onChange={this.onChangeTeamName}
                                                      className={this.teamNameError()}
                                                      placeholder="team naam"
                                                      autoComplete="off"/>
                                        <div className="invalid-feedback">
                                            Huh, deze team naam is bezet
                                            <span role={"img"} aria-label={""}>😪</span>
                                        </div>
                                    </Form.Group>
                                    <Button variant="danger" type="submit">Bevestigen</Button>
                                    <Link to="/" className="btn btn-link">Annuleren</Link>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }

    // Deze fucntie wordt in geladen als team status success is
    teamAccepted() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <HeaderTitel/>
                    <Alert className={"h-25 d-inline-block w-100"} variant="success">
                        <Alert.Heading className={"text-center"}><strong>{this.props.teamRoomName}</strong> is
                            geaccepteerd!!</Alert.Heading>
                        <p className={"text-center"}>
                            Wacht totdat de Quizz Master van <strong>{this.props.gameRoomName}</strong> het spel gaat
                            starten!
                        </p>
                    </Alert>
                </Row>
            </Container>
        )
    }

    checkTeamNameStatus() {
        if (this.props.currentGameStatus === 'choose_categories' && this.props.teamNameStatus === 'success') {
            return <TeamCategory/>
        }
        if (this.props.currentGameStatus === 'choose_question' && this.props.teamNameStatus === 'success') {
            return <TeamQuestions/>
        }
        if (this.props.currentGameStatus === 'asking_question' && this.props.teamNameStatus === 'success') {
            return <TeamAnswerQuestion/>
        }

        if (this.props.teamNameStatus === 'pending') {
            return this.loadingAnimation();
        } else if (this.props.teamNameStatus === 'success') {
            return this.teamAccepted();
        } else {
            return this.joinGameForm();
        }
    }

    render() {
        return (
            <div>
                <Menu/>
                {this.checkTeamNameStatus()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        gameRoomAccepted: state.createTeam.gameRoomAccepted,
        teamNameStatus: state.createTeam.teamNameStatus,
        teamRoomName: state.createTeam.teamRoomName,
        gameRoomName: state.createTeam.gameRoomName,
        currentGameStatus: state.createGame.currentGameStatus
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

export const TeamAanmaken = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TeamAanmakenUI);
