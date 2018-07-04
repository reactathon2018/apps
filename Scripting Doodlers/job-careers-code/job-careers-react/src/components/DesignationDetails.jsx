import React from 'react';
import {Component} from 'react';
import './login.css';
import vzLogo from './images/vz.png';
import SignI from './SignI';
import {
    Route,
    NavLink,
    HashRouter, Link, BrowserRouter, Switch
} from "react-router-dom";
import MyDashboard from "./MyDashboard";
import Designation from "./Designation";
class DesignationDetails extends Component {
    render() {
        return (
            <form>
                <div class ="padding-bottom" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Associate Member Tech Staff</b></div>

                <div><b>Job ID</b>:123456</div>
                <div><b>Job Description</b> : Techies who can transform the way we work on the inside to improve the experience we deliver on the outside</div>
                <div>A great technology company is powered by great technology, and by great people who push the boundaries,</div>
                <div>create solutions from scratch and turn big data into smart insights. Be the face of the digital world.</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" className="btn btn-success"><b><NavLink to="/SignI" class="bg-inverse text-white">Apply</NavLink></b></button>
                    <Route  path="/SignI" component={SignI}/>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button type="button" className="btn btn-danger"><NavLink to="/Designation" class="bg-inverse text-white">Back </NavLink></button>
                 <Route exact path="/Designation" component={Designation}/></div>
            </form>



        );
    }
}
export default DesignationDetails;

