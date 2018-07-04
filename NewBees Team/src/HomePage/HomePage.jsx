import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-10 col-md-offset-0">
                <h1>Hi {user.firstName}!</h1>
                <p><strong>You're logged to the Verizon Careers!!</strong></p>
            
                <div className="col-md-15 col-md-offset-5">
                <h3>Lead Python Engineer - Django</h3>
                <h6><strong>Job Description - Lead Python Engineer - Django/Flask </strong></h6>

                <br>
                </br>

                <h3>Lead Automation Engineer - Selenium</h3>
                <h6><strong>Job Description - Lead Automation Engineer - Selenium & Cucumber Framework </strong></h6>
                <br>
                </br>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };