import React from 'react';
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../components/header';
import Banner from '../components/banner';
import axios from 'axios';
import LoginPage from '../LoginPage/LoginPage';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                fistname: '',
                lastname: '',
                dateofbirth:'',
                emailid: '',
                mobilenumber:'',
                password: '',
                uploadresume:''

            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        //const { dispatch } = this.props;
        if (user.fistname && user.lastname && user.dateofbirth && user.emailid && user.password && user.mobilenumber&& user.uploadresume) {
            console.log(user);
            var firstn= user.fistname;
            var lastn = user.lastname;
            var dateof = user.dateofbirth;
            var emailid = user.emailid;
            var password= user.password;
            var mobileno= user.mobilenumber;
            var uploadr=user.uploadresume;
            axios.post(`http://10.74.19.207:9004/careers/adduser`, {firstn,lastn,dateof,emailid,password, mobileno,uploadr})
            .then(res => {
                console.log(res);
                console.log(res.data);
      })
        }
    }

    render() {
        const { user, submitted } = this.state;
        return (
            <div>
            <Header />
            <Banner />
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.fistname ? ' has-error' : '')}>
                        <label htmlFor="fistname">First Name</label>
                        <input type="text" className="form-control" name="fistname" value={user.fistname} onChange={this.handleChange} />
                        {submitted && !user.fistname &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.lastname ? ' has-error' : '')}>
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" className="form-control" name="lastname" value={user.lastname} onChange={this.handleChange} />
                        {submitted && !user.lastname &&
                            <div className="help-block">Last Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.dateofbirth ? ' has-error' : '')}>
                        <label htmlFor="dateofbirth">Date of Birth</label>
                        <input type="text" className="form-control" name="dateofbirth" value={user.dateofbirth} onChange={this.handleChange} />
                        {submitted && !user.dateofbirth &&
                            <div className="help-block">Date of Birth is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.emailid ? ' has-error' : '')}>
                        <label htmlFor="emailid">E-mail Id</label>
                        <input type="email" className="form-control" name="emailid" value={user.emailid} onChange={this.handleChange} />
                        {submitted && !user.emailid &&
                            <div className="help-block">Email id is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.mobilenumber ? ' has-error' : '')}>
                        <label htmlFor="mobilenumber">Mobile Number</label>
                        <input type="number" className="form-control" name="mobilenumber" value={user.mobilenumber} onChange={this.handleChange} />
                        {submitted && !user.mobilenumber &&
                            <div className="help-block">Mobile number is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.uploadresume ? ' has-error' : '')}>
                        <label htmlFor="uploadresume">Resume upload</label>
                        <input type="file" className="form-control" name="uploadresume" value={user.uploadresume} onChange={this.handleChange} />
                        {submitted && !user.uploadresume &&
                            <div className="help-block">Please upload Resume</div>
                        }
                    </div>
                    
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>  
                    </div>
                    <div>
                    Already a user? Please click here to  <Link to="/login" className=" btn-link"><b>Login</b></Link>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

/*function mapStateToProps(state) {
     <Router>
                      <div>   
                     <Link to="/login" className="btn btn-link">login</Link>
                     <Route path="/login" component={LoginPage}/>   
                     </div>                  
                    </Router>
    <Link to="/login" className="btn btn-link">Cancel</Link>
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);*/
export default RegisterPage ;