import React from 'react';
import {Component} from 'react';
import './login.css';
import vzLogo from './images/vz.png';
import DesignationDetails from './DesignationDetails';
import DesignSW from './DesignSW';
import DesignAn from './DesignAn';
import DesignSp from './DesignSp';
import {
    Route,
    NavLink,
    HashRouter, Link, BrowserRouter, Switch, Router
} from "react-router-dom";
import history from './history';
class Designation extends Component {
    render() {
        return (
            <HashRouter>
            <form>


                <div>
                    <table cellspacing="100" className="table">
                        <thead>
                        <tr>
                            <th scope="col">Designation</th>
                            <th scope="col">Location</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><a className="nav-link" href="#"><NavLink to="/DesignationDetails">Associate Member Tech Staff</NavLink></a></td>
                            <td>Chennai</td>
                        </tr>
                        <tr>
                            <td><a className="nav-link" href="#"> <NavLink to="/DesignSW">Software Engineer </NavLink></a></td>
                            <td>Hyberabad</td>
                        </tr>
                        <tr>
                            <td><a className="nav-link" href="#"> <NavLink to="/DesignAn">Analyst </NavLink></a></td>
                            <td>Bangalore</td>
                        </tr>
                        <tr>
                            <td><a className="nav-link" href="#"> <NavLink to="/DesignSp">Specialist </NavLink></a></td>
                            <td>United States</td>
                        </tr>
                        </tbody>
                    </table>
                    <switch>
                    <Route  path="/DesignationDetails" component={DesignationDetails}/>
                    <Route  path="/DesignSW" component={DesignSW}/>
                    <Route  path="/DesignAn" component={DesignAn}/>
                    <Route  path="/DesignSp" component={DesignSp}/>
                    </switch>
                </div>
            </form>
            </HashRouter>
        );
    }
}



export default Designation;