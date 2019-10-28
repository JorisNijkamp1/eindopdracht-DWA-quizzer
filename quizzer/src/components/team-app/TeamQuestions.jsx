import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

export class TeamQuestions extends React.Component {
    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <Col md={{span: 8, offset: 2}}>
                        <h1 className="text-center display-3">Quizzer Night</h1>
                    </Col>
                    <Alert className={"h-25 d-inline-block w-100"} variant="success">
                        <Alert.Heading className={"text-center"}>De Quiz Master is een vraag aan het
                            kiezen.</Alert.Heading>
                        <p className={"text-center"}>
                            Nog even geduld.
                        </p>
                    </Alert>
                </Row>
            </Container>
        )
    }
}

export default TeamQuestions
