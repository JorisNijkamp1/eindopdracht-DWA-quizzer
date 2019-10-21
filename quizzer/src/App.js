import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

function App() {
    return (
        <Container>
            <Row className="min-vh-100">
                <Col md={{span: 8, offset: 2}} fluid>
                    <h1 className="text-center display-1">Quizzer Night</h1>
                </Col>
                <Col md={{span: 4, offset: 4}} fluid>
                    <Nav defaultActiveKey="/home" className="flex-column text-center justify-content-center">
                        <Nav.Link eventKey="link-1" className="btn btn-outline-primary">Quiz master</Nav.Link>
                        <Nav.Link eventKey="link-2" className="btn btn-outline-success">Team</Nav.Link>
                        <Nav.Link eventKey="link-3" className="btn btn-outline-info">Scoreboard</Nav.Link>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
