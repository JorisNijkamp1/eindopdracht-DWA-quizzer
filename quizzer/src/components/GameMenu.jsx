import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";

class GameMenu extends React.Component {
    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <Col md={{span: 8, offset: 2}}>
                        <h1 className="text-center display-1">Quizzer Night</h1>
                    </Col>
                    <Col md={{span: 4, offset: 4}}>
                        <Nav defaultActiveKey="/home" className="flex-column text-center justify-content-center">
                            <Link to="/quiz-master" className="btn btn-outline-primary">Quiz master</Link>
                            <Link to="/new-team" className="btn btn-outline-success">Team</Link>
                            <Link to="/scoreboard" className="btn btn-outline-info">Scoreboard</Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default GameMenu
