import React from 'react';
import {Component} from 'react';
import './login.css';

class SignIn extends Component {
    render() {
        return (
       <form>
        <div className="form-group" class="col-md-6">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>

        <button type="submit" className="btn btn-success">Submit</button>
        <i>New User?</i><button type="button" className="btn btn-link">Sign Up</button>
        <a href="doodlers-react/src/components/SignUp.jsx" class="btn btn-link" role="button">Sign Up</a>
        </form>

    );
    }
}

export default SignIn;