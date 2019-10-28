import React from "react";
import {Link} from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faUsers, faDesktop} from '@fortawesome/free-solid-svg-icons'


class GameMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuClass: '',
        };
    }

    toggleClass() {
        if (this.state.menuClass === 'close') {
            return this.setState({
                menuClass: ''
            })
        } else {
            return this.setState({
                menuClass: 'close'
            })
        }
    };

    render() {
        return (
            <div>
                <div className={`base ${this.state.menuClass}`} onClick={() => {
                    this.toggleClass()
                }}>
                    <div className="menu">
                        <div className="icon">
                            <div className="bar"></div>
                        </div>
                    </div>
                    <div className="icons">
                        <FontAwesomeIcon icon={faUser} aria-hidden="true"/>
                        <FontAwesomeIcon icon={faUsers} aria-hidden="true"/>
                        <FontAwesomeIcon icon={faDesktop} aria-hidden="true"/>
                    </div>
                    <div className="section">
                        <div className="cover1">
                            <div className="cover2">
                                <Link to="/new-team" className="content"></Link>
                            </div>
                        </div>
                    </div>
                    <Link to="/quiz-master" className="section-static top"></Link>
                    <Link to="/scorebord" className="section-static bottom"></Link>
                </div>
                <div className="h-100 row align-items-center vh-100">
                    <h1 className="col-12 text-center display-2" style={{color: "white"}}>
                        <b>Pub Game</b>
                        <br/>
                        <span className="display-3">Quizzer Night</span>
                    </h1>
                </div>
            </div>
        )
    }
}

export default GameMenu
