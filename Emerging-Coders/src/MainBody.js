import React, { Component } from 'react';
import './App.css';
import HackathonList from "./Component/HackathonList";
import HakathonDetails from "./Component/HackathonDetails"

const Hackathons=[
  {id:1,name:"Reactathon",Date:"02-Jul-18",Venue:"VZ Chn/Hyd",Status:"New"},
  {id:2,name:"BlockChain",Date:"01-Aug-18",Venue:"VZ Chn/Hyd",Status:"New"},
  {id:3,name:"Information Security",Date:"01-Sep-18",Venue:"VZ Chn/Hyd",Status:"New"},
  {id:4,name:"AWS Cloud-SErverless",Date:"01-Oct-18",Venue:"VZ Chn/Hyd",Status:"New"},
  {id:5,name:"Progressive WebApp Compontents",Date:"01-Nov-18",Venue:"VZ Chn/Hyd",Status:"New"}
];

class MainBody extends Component {
  render() {
    return (
      <div className="App">
        <header className="Main-body">
          <h1 className="App-title"><marquee>Upcoming Hackathon fun!</marquee></h1>
        </header>
        <HackathonList Hackathons={Hackathons}/>
       
    </div>
    );
  }
}

export default MainBody;
// <HakathonDetails Hackathons={Hackathons}/>