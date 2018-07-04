import React from "react";
import ReactDOM from 'react-dom';
import { Carousel, Row, Col, Button } from 'react-bootstrap';

export default () => (
  <Carousel>
	  <Carousel.Item>
	    <img alt="900x500" src="images/1.jpg" />
	    <Carousel.Caption>
	    <p>If you want to participate.</p>
	      <Button bsStyle="primary"> Enroll </Button>
	    </Carousel.Caption>
	  </Carousel.Item>
	  <Carousel.Item>
	    <img alt="900x500" src="images/3.jpg" />
	    <Carousel.Caption>
	      
	      <p>If you want to participate.</p>
	      <Button bsStyle="primary"> Enroll </Button>
	    </Carousel.Caption>
	  </Carousel.Item>
	</Carousel>

);
