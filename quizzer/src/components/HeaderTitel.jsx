import React from "react";
import Col from "react-bootstrap/Col";

export class HeaderTitel extends React.Component {
    render() {
        return (
            <Col md={{span: 8, offset: 2}}>
                <h1 className="text-center display-3">Quizzer Night</h1>
            </Col>
        )
    }
}

export default HeaderTitel