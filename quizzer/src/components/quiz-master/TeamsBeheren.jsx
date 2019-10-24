import React from "react";
import * as ReactRedux from "react-redux";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import {createGameRoomAction} from "../../action-reducers/createGame-actionReducer";

class TeamsBeherenUI extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        const url = `http://localhost:3001/api/games/${this.props.gameRoom}/teams`;
        console.log(url)
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            mode: 'cors'
        };

        fetch(url, options).then(response => {
            if (response.status !== 200) {
                console.log("Er gaat iets fout" + response.status);
            }
            response.json().then(data => {
                console.log(data)
            });
        }).catch(err => {
            console.log(err);
        })
    };

    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <Col md={{span: 8, offset: 2}}>
                        <h1 className="text-center display-1">Quizzer Night</h1>
                    </Col>
                    <Col className={"text-center"} md={{span: 4, offset: 4}}>
                        <Link to="/categorieen">
                            <Button variant="primary" type="submit">
                                Start de ronde
                            </Button>
                        </Link>
                    </Col>
                    <Col className={"text-center"} md={{span: 4, offset: 4}}>
                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                            ws call
                        </Button>
                    </Col>
                    <Col md={{span: 6}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">Teamnaam 1</Card.Title>
                                <Card.Text className="text-center">Team accepteren?</Card.Text>
                                <Button variant="success" className={"float-left"} type="submit">
                                    Ja
                                </Button>
                                <Button variant="danger" className={"float-right"} type="submit">
                                    Nee
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        gameRoom: state.createGame.gameRoom,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        doChangeGameRoom: (gameRoom) => dispatch(createGameRoomAction(gameRoom)),
    }
}

export const TeamsBeheren = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TeamsBeherenUI);