import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {ListGroup} from "react-bootstrap";
import HeaderTitel from "../HeaderTitel";
import {createGameQuestionsAction} from "../../action-reducers/createGame-actionReducer";
import * as ReactRedux from "react-redux";
import {startQuestion} from "../../websocket";

class VragenUI extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            selectedQuestion: null,
        })
    }

    componentDidMount() {
        const url = `http://localhost:3001/api/game/${this.props.gameRoom}/ronde/${this.props.roundNumber}/questions`;
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

    selectQuestion(questionName) {
        this.setState({
            selectedQuestion: questionName,
        })
    }

    getQuestions() {
        return (
            this.props.questions.map((question, key) => {
                let isSelected;
                if (this.state.selectedQuestion === question) {
                    isSelected = "isSelected";
                }
                return (
                    <ListGroup.Item
                        key={key}
                        onClick={() => {
                            this.selectQuestion(question)
                        }}
                        className={isSelected}>
                        {question.question}
                    </ListGroup.Item>
                )
            })
        )
    }

    render() {
        let startQuestionButton;
        if (this.state.selectedQuestion) {
            startQuestionButton = (
                <Button variant="danger" type="submit" onClick={() => {
                    startQuestion(this.props.gameRoom, this.props.roundNumber, this.state.selectedQuestion)
                }}>
                    Start vraag
                </Button>
            )
        }
        return (
            <Container>
                <Row className="min-vh-100">
                    <HeaderTitel/>
                    <Col className={"text-center"} md={{span: 6, offset: 3}}>
                        {startQuestionButton}
                    </Col>
                    <ListGroup style={{width: '100%'}}>
                        {this.getQuestions()}
                    </ListGroup>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        gameRoom: state.createGame.gameRoom,
        questions: state.createGame.questions,
        roundNumber: state.createGame.roundNumber
    }
}

function mapDispatchToProps(dispatch) {
    return {
        doChangeQuestions: (categories) => dispatch(createGameQuestionsAction(categories))
    }
}

export const Vragen = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(VragenUI);
