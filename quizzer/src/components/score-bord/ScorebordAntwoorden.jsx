import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Card} from "react-bootstrap";
import HeaderTitel from "../HeaderTitel";

class ScorebordAntwoorden extends React.Component {

    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <HeaderTitel/>
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
                                <Card.Text className={"text-center"}>Nog niet geantwoord</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className={"text-center display-4"}>Teamnaam 2</Card.Title>
                                <Card.Text className={"text-center"}>Nog niet geantwoord</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{span: 4}}>
                        <Card>
                            <Card.Body>
                                <Card.Title className={"text-center display-4"}>Teamnaam 3</Card.Title>
                                <Card.Text className={"text-center"}>Geantwoord!</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ScorebordAntwoorden
