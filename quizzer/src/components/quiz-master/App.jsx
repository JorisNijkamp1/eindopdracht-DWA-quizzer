import React from "react";
import * as ReactRedux from 'react-redux';
import {createGameStatusAction, createGameRoomAction} from '../../action-reducers/createGame-actionReducer';

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

class CreateGameUI extends React.Component {

    render() {
        return
    }
}

function mapStateToProps(state) {
    return {
        status: state.createGame.status,
        gameRoom: state.createGame.gameRoom,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        doChangeStatus: (status) => dispatch(createGameStatusAction(status)),
        doChangeGameRoom: (gameRoom) => dispatch(createGameRoomAction(gameRoom)),
    }
}

export const CreateGame = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(CreateGameUI);
