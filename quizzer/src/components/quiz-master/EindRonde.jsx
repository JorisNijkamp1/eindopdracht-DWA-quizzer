import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import HeaderTitel from "../HeaderTitel";

class EindRonde extends React.Component {
    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <HeaderTitel/>
                    <Col className={"text-center"} md={{span: 3, offset: 2}}>
                        <Link to="/">
                            <Button variant="danger" type="submit">
                                Quizzer afsluiten
                            </Button>
                        </Link>
                    </Col>
                    <Col className={"text-center"} md={{span: 3, offset: 2}}>
                        <Link to="/categorieen">
                            <Button variant="success" type="submit">
                                Nog een ronde spelen
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default EindRonde
