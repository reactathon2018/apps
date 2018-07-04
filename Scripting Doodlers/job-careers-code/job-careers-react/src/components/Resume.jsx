import React from 'react';
import {Component} from 'react';
//import './login.css';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import vzLogo from './images/vz.png';
import ApplyButton from './ApplyButton';
import Submit from './Submit';

class Resume extends Component {
    render() {
        return (
            <form>

                <div>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>First Name:</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text"  id="usr" className="form-control" id="sel1" class ="col-sm-2"/>

                </div>
                <div>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Last Name:</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text"  id="usr" className="form-control" id="sel1" class ="col-sm-2"/>
                </div>
                <div>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Email</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text"  id="usr" className="form-control" id="sel1" class ="col-sm-2"/>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select className="form-control" id="sel1" className="col-sm-2">
                        <option>gmail.com</option>
                        <option>yahoo.com</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sel1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Country</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select className="form-control" id="sel1" class ="col-sm-2">
                        <option>Ind</option>
                        <option>US</option>
                        <option>China</option>
                        <option>Japan</option>
                    </select>
                </div>
                <div>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Zip Code</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text"  id="usr"/>
                </div>
                <div>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>City</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text"  id="usr" className="form-control" id="sel1" class ="col-sm-2"/>
                </div>
                <div>
                    <label htmlFor="sel1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>State</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select className="form-control" id="sel1" className="form-control" id="sel1" class ="col-sm-2">
                        <option>Ind</option>
                        <option>US</option>
                        <option>China</option>
                        <option>Japan</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sel1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Work Experience</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select className="form-control" id="sel1" className="form-control" id="sel1" class ="col-sm-2">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Employer</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text"  id="usr"/>
                </div>
                <div>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Job Title</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text"  id="usr"/>
                </div>
                <div>
                    <label htmlFor="sel1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Start Year</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select className="form-control" id="sel1" className="form-control" id="sel1" class ="col-sm-2">
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                        <option>2015</option>
                        <option>2014</option>
                        <option>2013</option>
                        <option>2012</option>
                        <option>2011</option>
                        <option>2010</option>
                        <option>2009</option>
                        <option>2008</option>
                        <option>2007</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sel1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Start Month</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select className="form-control" id="sel1" className="form-control" id="sel1" class ="col-sm-2">
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                </div>
                <div>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>End Month</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select className="form-control" id="sel1" className="form-control" id="sel1" className="col-sm-2">
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                </div>
                <div>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>End Year</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select className="form-control" id="sel1" className="form-control" id="sel1" className="col-sm-2">
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                        <option>2015</option>
                        <option>2014</option>
                        <option>2013</option>
                        <option>2012</option>
                        <option>2011</option>
                        <option>2010</option>
                        <option>2009</option>
                        <option>2008</option>
                        <option>2007</option>
                    </select>
                </div>
                <div>
                    <label for="comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Responbilities</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <textarea className="form-control" rows="5" id="comment" className="col-sm-2"></textarea>
                </div>
                <div>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Education</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text"  id="usr"/>
                </div>
                <div>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Degree Status</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text "  id="usr"/>
                </div>
                <div>
                    <label htmlFor="comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Additional Info</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <textarea className="form-control" rows="5" id="comment" className="col-sm-2"></textarea>
                </div>
                <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" className="btn btn-danger"><NavLink to="/ApplyButton" class="bg-inverse text-white">Back </NavLink></button>
                    <Route exact path="/ApplyButton" component={ApplyButton}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button type="submit" className="btn btn-info"><b>Save As Draft</b></button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" className="btn btn-success"><b><NavLink to="/Submit" class="bg-inverse text-white">Submit </NavLink></b></button>
                    <div><Route exact path="/Submit" component={Submit}/></div>
                </div>

            </form>

        );
    }
}
export default Resume;