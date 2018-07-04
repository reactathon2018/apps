import React from 'react';
import {Component} from 'react';
import './login.css';
import {
    Route,
    NavLink,
    HashRouter, Link, BrowserRouter, Switch
} from "react-router-dom";
import Designation from "./Designation";
import MyDashboard from "./MyDashboard";
import ApplyButton from "./ApplyButton";

class AppliedJobs extends Component {
    render() {
        return (
            <HashRouter>
                <form>
                    <button type="submit" className="btn btn-default"><b><NavLink to="/Designation">Applied Jobs</NavLink></b></button>
                    <button type="submit" className="btn btn-default"><b><NavLink to="/Designation">Feedback</NavLink></b></button>

                    <Route exact path="/Designation" component={Designation}/>
                </form>


            </HashRouter>

        );
    }
}
export default AppliedJobs;