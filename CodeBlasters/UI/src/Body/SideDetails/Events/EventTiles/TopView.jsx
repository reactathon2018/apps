import React from 'react';
import {Row, Col} from 'react-bootstrap';

class TopView extends React.Component {

    render(){
        return (
            <Col xs={12} id="topView">
                <Row>
                    <Col xs={12}>
                        <h3>Title</h3>
                    </Col>
                    <Col xs={12}>
                        <p>Description</p>
                    </Col>
                </Row>
            </Col>
        );
    }

}
export default TopView;