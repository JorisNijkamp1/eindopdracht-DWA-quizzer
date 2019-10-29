import React from "react";
import * as ReactRedux from "react-redux";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Card} from "react-bootstrap";
import {createGameQuestionCategoriesAction} from "../../action-reducers/createGame-actionReducer";
import HeaderTitel from "../HeaderTitel";
import {startRound} from "../../websocket";

class CategorieenUI extends React.Component {

    constructor(props) {
        super(props)
        this.state = ({
            selectedCategories: []
        })
    }

    componentDidMount() {
        const url = 'http://localhost:3001/api/questions/categories';
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
                        this.props.doChangeQuestionCategories(data.categories)
                    } else {
                        console.log('Categorieën kunnen niet worden opgehaald.')
                    }
                }
            );
    }

    selectCategory(categoryName) {
        let categories = this.state.selectedCategories;

        if (categories.length < 3 && !categories.includes(categoryName)) {
            categories.push(categoryName) //add new category
            this.setState({
                selectedCategories: categories
            })
        } else if (!categories.includes(categoryName)) {
            categories.shift(); //delete the oldest category
            categories.push(categoryName) //add new category
            this.setState({
                selectedCategories: categories
            })
        }
    }

    getCategories() {
        return (
            this.props.questionCategories.map((categoryName) => {
                    let isSelected;
                    if (this.state.selectedCategories.includes(categoryName)) {
                        isSelected = "isSelected";
                    }
                    return (
                        <Col
                            key={categoryName}
                            md={{span: 4}}
                            onClick={() => {
                                this.selectCategory(categoryName)
                            }}>
                            <Card className={isSelected}>
                                <Card.Body>
                                    <Card.Title className="text-center">
                                        {categoryName}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            )
        )
    }

    render() {
        let startRoundButton;
        if (this.state.selectedCategories.length === 3) {
            startRoundButton = (
                <Button variant="danger" type="submit" onClick={() => {
                    startRound(this.props.gameRoom, this.state.selectedCategories)
                }}>
                    Start ronde
                </Button>
            )
        }
        return (
            <Container>
                <Row className="min-vh-100">
                    <HeaderTitel/>
                    <Col className={"text-center"} md={{span: 6, offset: 3}}>
                        {startRoundButton}
                    </Col>
                    {this.getCategories()}
                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        gameRoom: state.createGame.gameRoom,
        questionCategories: state.createGame.questionCategories,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        doChangeQuestionCategories: (categories) => dispatch(createGameQuestionCategoriesAction(categories))
    }
}

export const Categorieen = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(CategorieenUI);
