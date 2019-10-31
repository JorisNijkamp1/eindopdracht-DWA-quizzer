import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import HeaderTitel from "../HeaderTitel";

export class TeamQuestions extends React.Component {
    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <HeaderTitel/>
                    <Alert className={"h-25 d-inline-block w-100"} variant="dark">
                        <Alert.Heading className={"text-center"}>De Quiz Master heeft de vraag gesloten.</Alert.Heading>
                        <p className={"text-center"}>
                            Bekijk op het scorebord het gegeven antwoord corred was.
                        </p>
                    </Alert>
                </Row>
            </Container>
        )
    }
}

export default TeamQuestions