import React from "react";
import * as ReactRedux from "react-redux";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Card} from "react-bootstrap";

class ScorebordBeoordeling extends React.Component {

    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <Col md={{span: 8, offset: 2}}>
                        <h1 className="text-center display-1">Quizzer Night</h1>
                    </Col>
                    <Col md={{span: 6, offset: 3}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className={"text-center display-4"}>Wetenschappelijk</Card.Title>
                                <Card.Title className={"text-center"}>Wat betekentd h2o?</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className={"text-center display-4"}>Teamnaam 1</Card.Title>
                                <Card.Text className={"text-center danger"}>Fout</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className={"text-center display-4"}>Teamnaam 2</Card.Title>
                                <Card.Text className={"text-center success"}>Goed</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className={"text-center display-4"}>Teamnaam 3</Card.Title>
                                <Card.Text className={"text-center success"}>Goed</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ScorebordBeoordeling