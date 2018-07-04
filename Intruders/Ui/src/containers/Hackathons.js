import React, { Component } from 'react';
import PropTypes from 'prop-types';
import card from '../containers/cards.css'
import axios from 'axios';
import Registration from './Registration';
import ReactDOM from 'react-dom';
import EventList from './EventList'
import { createApolloFetch } from 'apollo-fetch';

function makeApiCall() {

    let self = this;

    const fetch = createApolloFetch({
        uri: 'http://localhost:4000/reactathon',
      });
      const q = `{
        getEventDetails{
            id
            eventName
            eventShortDescription
            eventLongDescription
            eventStatus
            venue
            startDate
            endDate
            eventType
            techStack
        }
      }`
      fetch({
        query: q,              
      }).then(response => {
            if (response && response.data) {                    
                this.setState({eventListdata: response.data});
            }
            else {
        
            
            }
        }).catch(function (error) {
            console.log(error);
        });
}

function onClick(e) {
    this.setState({
        showPanelDiv: false,
    })
    ReactDOM.render(<Registration />, document.getElementById('RegistrationPanel'));
}

class Hackathons extends Component {
    constructor(props) {
        super(props);
        let eventDetails = [];
        this.state = {
            showPanelDiv: true,
            eventDetails: [],
            eventListdata: props.EventList
                // {
                //     id: 1,
                //     eventName: "Reactathon",
                //     eventDescription: "Build an Reusable Application using React NoSQL and GraphQl",
                //     btnText: "More Options",
                //     eventStatus: "inProgress",
                //     venue: "Chennai & Hyderbad",
                //     startDate: "06/27/2018",
                //     endDate: "06/29/2018",
                //     eventType: "Technical",
                //     techStack: "Any Technology"
                // },
                // {
                //     id: 2,
                //     eventName: "Hackathon",
                //     eventDescription: "An Oppurtunity to enhance your idea or your colleague idea to ease the client partner experience on data to day work",
                //     btnText: "More Options",
                //     eventStatus: "completed",
                //     venue: "Chennai & Hyderbad",
                //     startDate: "07/02/2018",
                //     endDate: "07/04/2018",
                //     eventType: "Technical",
                //     techStack: "React, NodeJs, graphQL, express, NoSQL"
                // },
                // {
                //     id: 3,
                //     eventName: "Speedathon",
                //     eventDescription: "An Oppurtunity to work on Real time experience",
                //     btnText: "More Options",
                //     eventStatus: "completed",
                //     venue: "Chennai & Hyderbad",
                //     startDate: "08/02/2018",
                //     endDate: "08/04/2018",
                //     eventType: "Technical",
                //     techStack: "Angular, Node, Spring"
                // }
            //]
        }
    }

    componentWillMount() {
        //makeApiCall();
        // let self = this;

        // var apiBaseUrl = "http://localhost:5000/api/getEvents";

        // axios.get(apiBaseUrl, {
        // }).then(function (response) {
        //     console.log(response);
        //     if (response && response.data) {
        //         self.setState({
        //             eventDetails: response.data
        //         })
        //     }
        // }).then(
        //     //eventDetails => this.setState({ eventDetails })            
        // )

        //     .catch(function (error) {
        //         console.log(error);
        //     });


    }

    // render() {
    //     var events = this.state.eventDetails.map(function(_events) {
    //         <div className="card card-align" style={{display: this.state.showPanelDiv ? 'block' : 'none' }}
    //             key={_events.Id}>{_events.Title}
    //         </div> 
    //     });
    //         return(
    //             <div>{ events }</div>
    //         )        
    // }

    
    render() {
        return (
            <div>
                {/* <div className="card card-align" style={{display: this.state.showPanelDiv ? 'block' : 'none' }}>
                <div className="card-body">
                    <h5 className="card-title">Reactathon <i className="far fa-calendar-alt fa-icon-inprogress"></i></h5>                    
                    <p className="card-text">Build an Reusable Application using React NoSQL and GraphQl</p>
                    <a href="#" className="card-link" onClick={ onClick.bind(this) }>Enroll</a>
                    <a href="#" className="card-link">Update</a>
                </div>
            </div>
            <div className="card card-align" style={{display: this.state.showPanelDiv ? 'block' : 'none' }}>
                <div className="card-body">
                    <h5 className="card-title"> Hackathon <i class="far fa-calendar-check fa-icon-completed"></i></h5>                    
                    <p className="card-text">An Oppurtunity to enhance your idea or your colleague idea to ease the client partner experience on data to day work</p>
                    <a href="#" className="card-link" onClick={ onClick.bind(this) }>Enroll</a>
                    <a href="#" className="card-link">Update</a>
                </div>
            </div>
            <div className="card card-align" style={{display: this.state.showPanelDiv ? 'block' : 'none' }}>
                <div className="card-body">
                    <h5 className="card-title"> Speeathon <i class="far fa-calendar-check fa-icon-completed"></i></h5>                    
                    <p className="card-text">Build an Angular Application</p>
                    <a href="#" className="card-link" onClick={ onClick.bind(this) }>Enroll</a>
                    <a href="#" className="card-link">Update</a>
                </div>
            </div> */}
                <EventList events={this.props.EventList} />
                <div id="RegistrationPanel"> </div>
            </div>

        )
    }
}

// const Hackathons = (props) => {

//     makeApiCall();
//     return (
//         <div className = { props.shouldHide ? 'hidden' : '' }>
//             <div className="card card-align">
//                 <div className="card-body">
//                     <h5 className="card-title">Reactathon <i className="far fa-calendar-alt fa-icon-inprogress"></i></h5>                    
//                     <p className="card-text">Build an Reusable Application using React NoSQL and GraphQl</p>
//                     <a href="#" className="card-link" onClick={ onClick.bind(this) }>Enroll</a>
//                     <a href="#" className="card-link">Update</a>
//                 </div>
//             </div>
//             <div className="card card-align">
//                 <div className="card-body">
//                     <h5 className="card-title"> Hackathon <i class="far fa-calendar-check fa-icon-completed"></i></h5>                    
//                     <p className="card-text">An Oppurtunity to enhance your idea or your colleague idea to ease the client partner experience on data to day work</p>
//                     <a href="#" className="card-link" onClick={ onClick.bind(this) }>Enroll</a>
//                     <a href="#" className="card-link">Update</a>
//                 </div>
//             </div>

//             <div id="RegistrationPanel"> </div>
//         </div>


//     );
// }

Hackathons.propTypes = {
    notes: PropTypes.array,
    onDeleteNote: PropTypes.func,
    onOpenEditNoteModal: PropTypes.func
};

export default Hackathons