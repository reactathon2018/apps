import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout';
import AskFAQ from "./Layout/AskFAQ";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faHeart,faUser,faArrowUp ,faArrowDown,faMedal,faUsers, faUserSecret, faTrophy} from '@fortawesome/free-solid-svg-icons'


library.add(faStroopwafel, faHeart,faUser,faArrowUp,faArrowDown,faMedal,faUsers,faUserSecret, faTrophy)


class App extends Component {
 
  render() {
    return (	
      // // <div><p>{this.count}</p>
      // // <button onClick={this.increment}>Click for redux</button>
      // // </div>
      //  <AskFAQ />
      <Layout />    
    );
  }
}

export default App;
