import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import Hackathon from "./Hackathon";
 
import Banner from './components/Banner';
import bannerImage from './static/hack2.jpg';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>         
          <Banner src={bannerImage} alt='Promoção Camisas do Timão' />
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Leaderboard">Leaderboard</NavLink></li>
            <li><NavLink to="/Hackathon">Hackathon</NavLink></li>
            <li><NavLink to="/Hackathon">Submissions</NavLink></li>
            <li><NavLink to="/Hackathon">Teams</NavLink></li>
            <li><NavLink to="/Hackathon">Winners</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Leaderboard" component={Leaderboard}/>
            <Route path="/Hackathon" component={Hackathon}/>             
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;
