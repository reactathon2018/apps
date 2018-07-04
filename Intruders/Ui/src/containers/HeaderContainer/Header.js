import React, { Component }  from 'react';
import classes from './Header.css'

import Hackathon from '../Hackathons'
import LeadershipBoard from '../Leadershipboard'
import ManagementViews from '../Managementviews'

// import Login from ' Login';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import {browserHistory} from 'react-router';
import ReactDOM from 'react-dom';

class Header extends Component {
    
    constructor(props){
        super(props);
        this.state={
          userName: props.userName,
          showHackathonPanelDiv : false,
          showLeadershipboardPanelDiv : false,
          showManagementViewsPanelDiv : false,
          hackathonFocussed : '',
          leadershipFocussed : '',
          managementViewsFocussed: '',
          eventListdata: props.eventListdata
        }
    }

    onClick(e){
        if (e.target.innerHTML == 'Hackathons') {
            this.setState( {
                showHackathonPanelDiv: true,
                showLeadershipboardPanelDiv: false,
                showManagementViewsPanelDiv: false,
                hackathonFocussed : 'focused',
                leadershipFocussed : '',
                managementViewsFocussed: ''
            })

            ReactDOM.render(<Hackathon EventList = {this.props.eventListData}/>, document.getElementById('HackathonPanel'));            
        }
        else if (e.target.innerHTML == 'Leadership Board') {
            this.setState( {
                showHackathonPanelDiv: false,
                showLeadershipboardPanelDiv: true,
                showManagementViewsPanelDiv: false,
                hackathonFocussed : '',
                leadershipFocussed : 'focused',
                managementViewsFocussed: ''
            })

            ReactDOM.render(<LeadershipBoard />, document.getElementById('LeadershipboardPanel'));
        }
        else if (e.target.innerHTML == 'Management Views') {
            this.setState( {
                showHackathonPanelDiv: false,
                showLeadershipboardPanelDiv: false,
                showManagementViewsPanelDiv: true,
                hackathonFocussed : '',
                leadershipFocussed : '',
                managementViewsFocussed: 'focused'
            })

            ReactDOM.render(<ManagementViews />, document.getElementById('ManagementViewsPanel'));
        }
    }
    
    render() {
        return(
            
    <div>  
        <div style={{ textAlign: 'right' }}>
            <h3>Logged in :  {this.props.uName}    </h3>            
        </div>  
        <div style={{ textAlign: 'right' }}>            
            <p><h4><a href="">Signout</a></h4></p>
        </div>        
          
        <h1>Events</h1>
        <br />
        
        <ul>            
        <li onClick={ this.onClick.bind(this) } className = { this.state.hackathonFocussed }>Hackathons</li>
        <li onClick={ this.onClick.bind(this) } className = { this.state.leadershipFocussed }>Leadership Board</li>
        <li onClick={ this.onClick.bind(this) } className = { this.state.managementViewsFocussed }>Management Views</li>            
        </ul>

        <br /><br /><br />

          <div id="HackathonPanel" style={{display: this.state.showHackathonPanelDiv ? 'block' : 'none' }}>
          </div>
          <div id="LeadershipboardPanel" style={{display: this.state.showLeadershipboardPanelDiv ? 'block' : 'none' }}>
          </div>
          <div id="ManagementViewsPanel" style={{display: this.state.showManagementViewsPanelDiv ? 'block' : 'none' }}>
          </div>
                  
          
        </div>
        )
    }
}

// const Header = (props) => {
//     handleClick = () => {
//         console.log("Clicked");
//     }
//     return(        

//         <div>
//           <h1>Reactathon</h1>
//           <ul>
//             <li>Home</li>
//             <li class="focused" onClick={handleClick}>Hackathons</li>
//             <li>Leadership Board</li>
//             <li>Management Views</li>
//             <li>Contact Us</li>
//           </ul>

//           <p> Natarajan </p>
//           <p> Natarajan </p>
//           <p> Natarajan </p>

//             <p> Natarajan </p>
//           <p> Natarajan </p>
//           <p> Natarajan </p>
//           <p> Natarajan </p>
//           <p> Natarajan </p>
//           <p> Natarajan </p>


        


          
          
//         </div>
//     );
// }


export default Header