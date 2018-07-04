import React from 'react';
import {Component} from 'react';
import './login.css';
import vzLogo from './images/vz.png'
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import ApplyButton from './ApplyButton';
import Submit from './Submit';
import DesignationDetails from "./DesignationDetails";
import App from "./App";


class Upload extends Component {
    render() {
        return(
            <HashRouter>
                <form>
                    <div className="form-group">
                        Upload Resume  <input type="file"/>
                    </div>
                    <div><button type="submit" className="btn btn-success"><NavLink to="/Submit" class="bg-inverse text-white">Submit </NavLink></button>
                        <button type="submit" className="btn btn-danger"><NavLink to="/ApplyButton" class="bg-inverse text-white">Back </NavLink></button>
                        <Route exact path="/ApplyButton" component={ApplyButton}/>
                    <Route exact path="/Submit" component={Submit}/></div>
            </form>
            </HashRouter>

        );
    }
}
export default Upload;