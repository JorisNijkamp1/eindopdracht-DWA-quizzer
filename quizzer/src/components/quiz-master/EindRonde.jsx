import React from "react";
import * as ReactRedux from "react-redux";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import HeaderTitel from "../HeaderTitel";
import {startRound} from "../../websocket";

class EindRondeUI extends React.Component {
    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <HeaderTitel/>
                    <Col className={"text-center"} md={{span: 3, offset: 2}}>
                        <Button variant="danger" type="submit">
                            Quizzer afsluiten
                        </Button>
                    </Col>
                    <Col className={"text-center"} md={{span: 3, offset: 2}}>
                        <Button variant="success" type="submit" onClick={() => {
                            startRound(this.props.gameRoom)
                        }}>
                            Nog een ronde spelen
                        </Button>
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
        //Here some dispatches
    }
}

export const EindRonde = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(EindRondeUI);
