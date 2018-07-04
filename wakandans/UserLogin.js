import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class UserLogin extends React.Component { 
   render() {
      return (
         <div>
            <Header/>
         </div>
      );
   }
}
class Header extends React.Component {
    render() {	
          return (
            <div>
            <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
</ul>
<input id="tab1" type="radio" name="tabs" checked>
  <label for="tab1">Codepen</label>
    
  <input id="tab2" type="radio" name="tabs">
  <label for="tab2">Dribbble</label>
    
  <input id="tab3" type="radio" name="tabs">
  <label for="tab3">Dropbox</label>
    
  <input id="tab4" type="radio" name="tabs">
  <label for="tab4">Drupal</label>
</div>
);}
}
export default UserLogin;