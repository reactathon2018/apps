import React from 'react';
import axios from 'axios';
import Dashboard from '../components/Dashboard';
import dataQuery from '../../queries/dataqueries';
import ChatModel from '../../chatModel/ChatModel';
import {connect} from 'react-redux';

export class DashboardContainer extends React.Component {
    constructor(){
        super();
        this.state = {data:[]};        
    }

    componentDidMount(){
        this.fetchHackathonsUser();
    }

    fetchHackathonsUser(){
        return axios({
            url: 'https://vzhackathon-backend.herokuapp.com/graphql',
            method: 'post',
            data: {
                query: dataQuery.getHackathons()
            }
        })
            .then(response => {
                this.update(response.data);
            })
            .catch(errors => {
                console.log(errors);
            })
    }

    update(res) {
        this.setState({ data: res.data });
    }

    render(){
        return (
            <div>
                <Dashboard user={this.props.user} data={this.state.data}/>
                <ChatModel/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({    
    isAutenticated: state.getIn(['userActionReducer', 'user', 'isAutenticated'], false),
    user: state.getIn(['userActionReducer', 'user', 'userInfo'], null),
})

export default connect(mapStateToProps, null )(DashboardContainer);

