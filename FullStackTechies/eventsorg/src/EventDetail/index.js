import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Jumbotron, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import Topbar from '../Components/Topbar';
import './EventDetail.css';

class EventDetail extends Component {
	constructor(props){
		super(props)
		this.state = { bannerImg : ''}
	}
	
	componentWillMount(){
		this.setState({bannerImg:this.props.match.params.id})
	}


    render() {
    	const bannerImg = this.state.bannerImg
    	console.log(bannerImg)
        return (
            <div>
            	<img id="banner" src={ `../images/${bannerImg}.jpg` } alt="banner"/>
            	<Row className="show-grid">
            		<Col xs={12}>
            		<Jumbotron>
            		<Row className="show-grid">
	            		<Col xs={12} md={8}>
							  <h2>Hello, Welcome  </h2>
							  <p>
							    This is a Hackathon Event
							    extra attention to featured content or information.
							  </p>
							  <p>
							    <Button bsStyle="primary">Enroll </Button>
							  </p>
						 	
						  </Col>
						  	<Col xs={12} md={4}>
						  		<h4> Leading Members </h4>
						   		<ul>
						   			<li> Test </li>
						   		</ul>
						   	</Col>
					  </Row>
				   		</Jumbotron>
				   	</Col>
				   
    			</Row>
            </div>
        )
    }
}

export default EventDetail