import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import {ListGroup} from "react-bootstrap";

class Vragen extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{span: 8, offset: 2}}>
                        <h1 className="text-center display-1">Quizzer Night</h1>
                    </Col>
                    <Col className={"text-center"} md={{span: 6, offset: 3}}>
                        <Link to="/vragen">
                            <Button variant="primary" type="submit">
                                Gekozen vraag kiezen
                            </Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Card style={{width: '100%'}}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Vraag 1</ListGroup.Item>
                            <ListGroup.Item>Vraag 2</ListGroup.Item>
                            <ListGroup.Item>Vraag 3</ListGroup.Item>
                            <ListGroup.Item>Vraag 4</ListGroup.Item>
                            <ListGroup.Item>Vraag 5</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Row>
            </Container>
        )
    }
}

export default Vragen
