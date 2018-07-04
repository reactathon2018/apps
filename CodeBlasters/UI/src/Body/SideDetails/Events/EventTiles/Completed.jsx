import React from 'react';
import {Col} from 'react-bootstrap';

class Completed extends React.Component {

    render(){
        return (
            <Col xs={12} className ="sliderWrapper">
                <div className="leftArrow">
                    <i className="glyphicon glyphicon-chevron-left"></i>
                </div>
                <div className="sliderList">
                </div>
                <div  className="rightArrow">
                    <i className="glyphicon glyphicon-chevron-right"></i>
                </div>
            </Col>
        );
    }

}
export default Completed;