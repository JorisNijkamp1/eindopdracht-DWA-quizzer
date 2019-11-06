import React from "react";
import * as ReactRedux from "react-redux";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Card} from "react-bootstrap";
import HeaderTitel from "../HeaderTitel";

class ScorebordEndgameUI extends React.Component {
    getTop3Teams() {
        const allTeams = this.props.currentTeamsScoreboard;

        allTeams.sort((a, b) => (a.team_score < b.team_score) ? 1 : -1);

        const firstPlace = (allTeams[0] ? '🥇' + allTeams[0]._id + '🥇' : '');
        const secondPlace = (allTeams[1] ? '🥈' + allTeams[1]._id + '🥈' : '');
        const thirdPlace = (allTeams[2] ? '🥉' + allTeams[2]._id + '🥉' : '');

        return (
            <div>
                <h1 className={"display-2 titel-1"}>{firstPlace}</h1>
                <h1 className={"display-3 titel-2"}>{secondPlace}</h1>
                <h1 className={"display-4 titel-3"}>{thirdPlace}</h1>
            </div>
        )
    }

    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <HeaderTitel subTitle={"Eindscore van de Quizzer Night"}/>
                    <Col md={{span: 12}} className={"text-white text-center"}>
                        <Card text="dark">
                            <Card.Body className={"text-center"}>
                                {this.getTop3Teams()}
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
        currentTeamsScoreboard: state.createScoreboard.currentTeamsScoreboard
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export const ScorebordEndgame = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(ScorebordEndgameUI);
