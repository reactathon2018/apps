import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, ListGroupItem, Panel, Glyphicon, Button} from 'react-bootstrap';
import axios from 'axios'
import Carousel from '../Components/Carousel';
import {Barchart} from '../Components/Barchart';

class Dashboard extends Component {

    constructor(props){
        super(props)
        this.state = { "topRatedList" :[
            {'id':'1', 'eventName': 'Hackathon'},
            {'id':'2', 'eventName': 'Reactathon'},
            {'id':'3', 'eventName': 'Code Warrior'},
            {'id':'4', 'eventName': 'NG cross function'}
        ], "topParticipants" : [
            {'id':'1', 'name': 'john'},
            {'id':'2', 'name': 'doe'},
            {'id':'3', 'name': 'Code lorem'},
            {'id':'4', 'name': 'Ipsum'}
        ], "chartData": [], "allEvents":[]}
        const thisDuplicate = this;
       axios.get('http://localhost:3200/api/v1/events/')
          .then(function (response) {
            console.log(response.data)
            thisDuplicate.setState({"allEvents": response.data});
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
    }



    

    ComponentWillMount(){
        const topRatedApi = 'http://localhost:3200/api/v1/events'
        const topParticipantsApi = 'http://localhost:3200/api/v1/events'
        const ChartApi = 'http://localhost:3200/api/v1/events'
        const EventsApi = 'http://localhost:3200/api/v1/events/'
        axios.get(topRatedApi)
          .then(function (response) {
            console.log(response);
            this.setState({"topRatedList": response.data})
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });

         axios.get(topParticipantsApi)
          .then(function (response) {
            console.log(response);
            this.setState({"topParticipants": response.data})
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });

          axios.get(ChartApi)
          .then(function (response) {
            console.log(response);
            this.setState({"chartData": response.data})
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });


    }

    render() {



        

        const topListItems = this.state.topRatedList.map((top, index)=> 
            <ListGroupItem key={top.id}> 
                <span className="inline-block p-80 left"> {top.eventName} </span>
                <span className="inline-block p-10 right"> {5 - index} <Glyphicon glyph="star" />  </span>
            </ListGroupItem>
        );

        const participantsList = this.state.topParticipants.map((top, index)=> 
            <ListGroupItem key={top.id}> 
                <span className="inline-block p-80 left"> {top.name} </span>
                <span className="inline-block p-10 right"> {5 - index} <Glyphicon glyph="star" />  </span>
            </ListGroupItem>
        );

        const EventList = this.state.allEvents.map((top, index)=> 
            <ListGroupItem header={top.eventName} key={ `${index}-eventslist` }> 
                <span className="inline-block p-80"> {top.eventDescription}  </span>
                <Link className="btn btn-info" to={ `/event-details/${top.eventId}` }> Learn More </Link>
            </ListGroupItem>
        );

        

        return (
            <div>
                <Carousel/>  

                <Row className="show-grid panels">
                    <Col xs={12} md={4}>
                        <div className="custom-panel"> 
                            <h3 className="border-bottom">  
                                <Glyphicon glyph="star" /> 
                                <span className="bold">Top Rated</span>
                            </h3>
                            <ListGroup>
                                {topListItems}
                            </ListGroup>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="custom-panel"> 
                            <h3 className="border-bottom">  
                                <Glyphicon glyph="user" /> 
                                <span className="bold">Top  Participants </span>
                            </h3>
                            <ListGroup>
                                {participantsList}
                            </ListGroup>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="custom-panel"> 
                            <h3 className="border-bottom">  
                                <Glyphicon glyph="screenshot" /> 
                                <span className="bold"> Participation Graph </span>
                            </h3>
                            <Barchart/>
                        </div>
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col xs={12} md={6}>
                        <Panel bsStyle="primary">
                            <Panel.Heading>
                              <Panel.Title componentClass="h3" className="bold"> Past Events </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <ListGroup>
                                    {EventList}
                                </ListGroup>
                            </Panel.Body>
                          </Panel>
                    </Col>
                    <Col xs={12} md={6}>
                        <Panel bsStyle="success">
                        <Panel.Heading>
                          <Panel.Title componentClass="h3" className="bold"> UpComing Events </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <ListGroup>
                                {EventList}
                            </ListGroup>
                        </Panel.Body>
                      </Panel>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard;