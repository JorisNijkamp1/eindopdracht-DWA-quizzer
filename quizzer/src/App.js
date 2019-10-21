import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function App() {
  return (
      <Card style={{ width: '18rem' }}>
        <Card.Header>Quizzer</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Quiz master</ListGroup.Item>
          <ListGroup.Item>Player</ListGroup.Item>
          <ListGroup.Item>Beamer</ListGroup.Item>
        </ListGroup>
      </Card>
  );
}

export default App;
