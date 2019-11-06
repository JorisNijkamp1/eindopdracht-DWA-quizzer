import React from "react";
import * as ReactRedux from "react-redux";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Card} from "react-bootstrap";
import HeaderTitel from "../HeaderTitel";

class ScorebordEndgameUI extends React.Component {
    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <HeaderTitel subTitle={"Eindscore van de Quizzer Night"}/>
                    <Col md={{span: 12}} className={"text-white text-center"}>
                        <Card text="dark">
                            <Card.Body className={"text-center"}>
                                <h1 className={"display-2"}>🥇Teamh han🥇</h1>
                                <h1 className={"display-3"}>🥈Team sjon🥈</h1>
                                <h1 className={"display-4"}>🥉Team p#t🥉</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export const ScorebordEndgame = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(ScorebordEndgameUI);
