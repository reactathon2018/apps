import React from 'react';
import {Component} from 'react';
import './login.css';
import {
    Route,
    NavLink,
    HashRouter, Link, BrowserRouter, Switch
} from "react-router-dom";
import Jobid from "./JobId";
import Feedback from "./Feedback";
import Upload from "./Upload";
import Resume from "./Resume";
class MyDashboard extends Component {
    render() {
        return (
            <HashRouter>
                <form>
                    <div>
                        <table cellspacing="100" className="table">
                            <thead>
                            <tr>
                                <th scope="col">Details</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><a className="nav-link" href="#"><NavLink to="/Jobid">Applied Jobs</NavLink></a></td>
                            </tr>
                            <tr>
                                <td><a className="nav-link" href="#"> <NavLink to="/Feedback">Feedback</NavLink></a></td>
                            </tr>
                            </tbody>
                        </table>
                        <switch>
                            <Route  path="/Jobid" component={Jobid}/>
                            <Route  path="/Feedback" component={Feedback}/>
                        </switch>
                    </div>
                </form>
            </HashRouter>

        );
    }
}
export default MyDashboard;