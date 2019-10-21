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
          <Row>
              <Col md={{ span: 4, offset: 4 }} fluid>
                  <Nav defaultActiveKey="/home" className="flex-column text-center">
                      <Nav.Link className="btn btn-outline-primary">Quiz master</Nav.Link>
                      <Nav.Link eventKey="link-1" className="btn btn-outline-success">Team</Nav.Link>
                      <Nav.Link eventKey="link-2" className="btn btn-outline-info">Scoreboard</Nav.Link>
                  </Nav>
              </Col>
          </Row>
      </Container>
  );
}

export default App;
