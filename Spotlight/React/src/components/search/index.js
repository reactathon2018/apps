import React, { Component } from 'react';
import './search.css';

class Search extends Component {

  onMessage(m) {
    alert(m);
   }


    render() {
      return (
        <div className="row">
          <div className="cell-9">
         
            <div class="form-group">
                <label>Type Here to search</label>
                <input type="email" placeholder="Enter email"/>
                <small class="text-muted">We'll never share your email with anyone else.</small>
            </div> 
         
          </div>
          <div className="cell-3 pt-6"> <button className="button success" onClick={this.onMessage}>Submit data</button></div>
        </div>
      );
    }
  }
  
  export default Search;