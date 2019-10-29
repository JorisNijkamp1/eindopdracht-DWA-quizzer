import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {ListGroup} from "react-bootstrap";
import HeaderTitel from "../HeaderTitel";
import {createGameQuestionsAction} from "../../action-reducers/createGame-actionReducer";
import * as ReactRedux from "react-redux";

class VragenUI extends React.Component {
    componentDidMount() {
        const url = `http://localhost:3001/api/game/${this.props.gameRoom}/ronde/0/questions`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            mode: 'cors'
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                    if (data.success === true) {
                        console.log(data);
                        this.props.doChangeQuestions(data.questions);
                    } else {
                        console.log('Vragen kunnen niet worden opgehaald.')
                    }
                }
            );
    }

    selectQuestion(){

    }

    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <HeaderTitel/>
                    <Col className={"text-center"} md={{span: 6, offset: 3}}>
                        <Link to="/vragen-beheren">
                            <Button variant="danger" type="submit">
                                Gekozen vraag kiezen
                            </Button>
                        </Link>
                    </Col>
                    <ListGroup style={{width: '100%'}}>
                        <ListGroup.Item onClick={() => {this.selectQuestion()}}>Vraag 1</ListGroup.Item>
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

function mapStateToProps(state) {
    return {
        gameRoom: state.createGame.gameRoom,
        questions: state.createGame.questions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        doChangeQuestions: (categories) => dispatch(createGameQuestionsAction(categories))
    }
}

export const Vragen = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(VragenUI);
