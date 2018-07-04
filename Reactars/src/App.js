import React, { Component } from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom'

import RegisterForm from './components/RegisterForm'
import Feed from './components/Feed'
import Profile from './components/Profile'
import ArticleView from './components/ArticleView'
import Editor from './components/Editor'
import requireAuthentication from './utils/requireAuth'
import SignInWith from './components/SignInWith'
import Table1 from './components/Table1';
import {
    getEvent
} from './redux/actions/actions.js'
//import  from './components' 
var data = [
    {id: 1, name: 'Gob', value: '2'},
    {id: 2, name: 'Buster', value: '5'},
    {id: 3, name: 'George Michael', value: '4'}
  ];
class App extends Component {
    render() {
        const pathname = window.location.pathname
        return ( 
            <div>
            { !pathname.includes('editor') ? <Header /> : '' }
            <SignInWith />
                <Switch>
                
                    <Route exact path="/" component={Feed} />
                    <Route path="/events" component={Table1} />
                    <Route path="/profile/:id" component={Profile} />
                    <Route path="/articleview/:id" component={ArticleView} />
                    <Route path="/editor" component={requireAuthentication(Editor)} />
                    <Route path="/Feed" component={Feed} />
                    <Route path="/register" component={RegisterForm}/>
                    <Route path="**" component={RegisterForm}/>
                </Switch>
              
            </div>
        );
    }
}

export default App;