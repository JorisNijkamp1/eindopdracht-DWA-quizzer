import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {ListGroup} from "react-bootstrap";
import HeaderTitel from "../HeaderTitel";

class Vragen extends React.Component {
    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <HeaderTitel/>
                    <Col className={"text-center"} md={{span: 6, offset: 3}}>
                        <Link to="/vragen-beheren">
                            <Button variant="primary" type="submit">
                                Gekozen vraag kiezen
                            </Button>
                        </Link>
                    </Col>
                    <ListGroup style={{width: '100%'}}>
                        <ListGroup.Item>Vraag 1</ListGroup.Item>
                        <ListGroup.Item>Vraag 2</ListGroup.Item>
                        <ListGroup.Item>Vraag 3</ListGroup.Item>
                        <ListGroup.Item>Vraag 4</ListGroup.Item>
                        <ListGroup.Item>Vraag 5</ListGroup.Item>
                    </ListGroup>
                </Row>
            </Container>
        )
    }
}

export default Vragen
