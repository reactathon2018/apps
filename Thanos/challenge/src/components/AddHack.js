// AddItem.js

import React, { Component } from 'react';
import ItemService from './ItemService';

class AddItem extends Component {

  constructor(props) {
      super(props);
      this.state = {name: '',sdate:'',edate:'',desc:''};
      this.addItemService = new ItemService();

      this.handleChange_name = this.handleChange_name.bind(this);
      this.handleChange_sdate = this.handleChange_sdate.bind(this);
      this.handleChange_edate = this.handleChange_edate.bind(this);
      this.handleChange_desc = this.handleChange_desc.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange_name(event) {
      this.setState({name: event.target.value});      
    }
    handleChange_sdate(event) {
      this.setState({sdate: event.target.value});      
    }
    handleChange_edate(event) {
      this.setState({edate: event.target.value});      
    }
    handleChange_desc(event) {
      this.setState({desc: event.target.value});      
    }
    

    handleSubmit(event) {
      alert(this.state);
      console.log(this.state);
      this.addItemService.sendHackData(this.state);
      event.preventDefault();
    }

    render() {
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit}>            
              <h1>Add Hackathon details:</h1>
              <div className="form-group">
                <label>Event Name : </label>
                <input type="text" value={this.state.name} onChange={this.handleChange_name} className="form-control"/>
              </div>
              <div className="form-group">
                <label>Event Start Date :</label>
                <input type="date" value={this.state.sdate} onChange={this.handleChange_sdate} className="form-control"/>
              </div>
              <div className="form-group">
                <label>Event End Date :</label>
                <input type="date" value={this.state.edate} onChange={this.handleChange_edate} className="form-control"/>
              </div>
              <div className="form-group">
                <label>Event Description : </label>
                <input type="text" value={this.state.desc} onChange={this.handleChange_desc} className="form-control"/>
              </div>

              {/* Event Name : 
              <input type="text" value={this.state.name} onChange={this.handleChange_name} className="form-control"/>
              Event Start Date :
              <input type="date" value={this.state.sdate} onChange={this.handleChange_sdate} className="form-control"/>
              Event End Date :
              <input type="date" value={this.state.edate} onChange={this.handleChange_edate} className="form-control"/>
              Event Description : 
              <input type="text" value={this.state.desc} onChange={this.handleChange_desc} className="form-control"/> */}
            <br/>
            <input type="submit" value="Submit" className="btn btn-primary"/>
          </form>
      </div>
      );
    }
  }

export default AddItem;