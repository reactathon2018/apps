import React, {Component} from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from 'react-router-dom/Route';
import DetailsComp from './heackathonDetailsComp';
import ManagementView from '../components/managementView/managemenComp';

class MenuBar extends Component {
  render(){
    return (
      <div>
         <Router>
            <div>
               <div className="ui secondary pointing menu"  style={{background:'white'}}>                 
                  <NavLink className="item" to="/" style={{fontSize:'12pt',fontFamily:'arial'}}>Home</NavLink>                
                  <NavLink className="item" to="/mgView" style={{fontSize:'12pt',fontFamily:'arial'}}> Management View</NavLink>                 
                  <div className="right menu">
                     <a className="ui item" style={{fontSize:'12pt',fontFamily:'arial'}}>
                       Logout
                     </a>
                   </div>
               </div>
               <div>
                 <Route exact strict path="/" component={DetailsComp} />                
              
                 <Route exact strict path="/mgView" render = {
                    () =>{
                      return (<ManagementView />)
                    }
                  } />
              </div>
           </div>
        </Router>
      </div>
    )
  }
}

export default MenuBar;
