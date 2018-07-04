import React from 'react';
import AdminComponent from '../components/AdminComponent';

export default class AdminDashboard extends React.Component {

    componentDidMount() {
        console.log("inside component did mount");
        
    }
    render() {
        console.log("Inside admin container");
        return (
            <div>
                <AdminComponent/>
            </div>
        )
    }
}