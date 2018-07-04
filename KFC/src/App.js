import React, {Component} from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import {Home} from './components/layouts/Home';
import {About} from './components/layouts/About';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer'
import Layout from './components/layouts/Layout';

class App extends Component {
    render() {
        return (
          <div>
            <Header />             
            <BrowserRouter>
              <Layout>   
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />                   
              </Layout>
            </BrowserRouter>
            <Footer />  
          </div>                
         );
    }
}

export default App;