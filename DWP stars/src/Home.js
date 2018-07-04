import React, { Component } from "react";

import Banner from './components/Banner';
import bannerImage from './static/about.png';
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Basic Information</h2>
        <p>Hackathon is design sprint-like event in which computer programmers and others invlolve in software development, collaborate intensively  on software projects.</p>
        <p>The goal of hackathon is to create usable software. Hackathons tend to have a specific focus, which can include the porogramming language used, the operating system, an application, an API, or the subject and the demographic group of the programmers.</p>

         <Banner src={bannerImage} alt='Promoção Camisas do Timão' />

      </div>
    );
  }
}
 
export default Home;