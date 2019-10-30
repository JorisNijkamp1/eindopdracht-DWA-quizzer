import React from "react";
import * as ReactRedux from "react-redux";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import HeaderTitel from "../HeaderTitel";


class VragenBeherenUI extends React.Component {
    teamNaamOphalen() {
        return (
            this.props.gameRoomTeams.map(teamName => {
                return (
                    <Col md={{span: 6}} key={teamName._id}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">{teamName._id}</Card.Title>
                                <Card.Text className="text-center">Antwoord</Card.Text>
                                <Button variant="success" className={"float-left"} type="submit">
                                    Goed
                                </Button>
                                <Button variant="danger" className={"float-right"} type="submit">
                                    Fout
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })
        )
    }

    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <HeaderTitel/>
                    {this.teamNaamOphalen()}
                    <Col className={"text-center"} md={{span: 3, offset: 2}}>
                        <Link to="/vragen-beheren">
                            <Button variant="danger" type="submit">
                                Vraag sluiten
                            </Button>
                        </Link>
                    </Col>
                    <Col className={"text-center"} md={{span: 3, offset: 2}}>
                        <Link to="/vragen">
                            <Button variant="success" type="submit">
                                Volgende vraag
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        gameRoomTeams: state.createGame.gameRoomTeams,
        allQuestionAnswers: state.createGame.allQuestionAnswers
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export const VragenBeheren = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(VragenBeherenUI);
