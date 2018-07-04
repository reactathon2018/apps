import React from 'react';
import {Component} from 'react';
import './login.css';
import vzLogo from './images/vz.png'
import Resume from './Resume';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import Upload from "./Upload";
import DesignationDetails from "./DesignationDetails";
import App from "./App";


class ApplyButton extends Component {
    render() {
        return(
            <HashRouter>
                <form>
                    <div>
                        <table cellspacing="100" className="table">
                            <thead>
                            <tr>
                                <th scope="col">Resume</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><a className="nav-link" href="#"> <NavLink to="/Upload">Upload Resume </NavLink></a></td>
                            </tr>
                            <tr>
                                <td><a className="nav-link" href="#"> <NavLink to="/Resume">Create Resume </NavLink></a></td>
                            </tr>
                            </tbody>
                        </table>
                        <switch>
                            <Route  path="/Upload" component={Upload}/>
                            <Route  path="/Resume" component={Resume}/>
                        </switch>
                    </div>
                </form>
            </HashRouter>

    );
}
}
export default ApplyButton;