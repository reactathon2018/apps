// RegisterHack.js

import React, { Component } from 'react';
import ItemService from './ItemService';

class RegisterHack extends Component {

  constructor(props) {
      super(props);
      this.state = {tname: '',noofpersons:'',teamlist:'',technology:''};
      this.RegisterHack = new ItemService();

      this.handleChange_tname = this.handleChange_tname.bind(this);
      this.handleChange_noofpersons = this.handleChange_noofpersons.bind(this);
      this.handleChange_teamlist = this.handleChange_teamlist.bind(this);
      this.handleChange_technology = this.handleChange_technology.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange_tname(event) {
      this.setState({tname: event.target.value});      
    }
    handleChange_noofpersons(event) {
      this.setState({noofpersons: event.target.value});      
    }
    handleChange_teamlist(event) {
      this.setState({teamlist: event.target.value});      
    }
    handleChange_technology(event) {
      this.setState({technology: event.target.value});      
    }
    

    handleSubmit(event) { 
      console.log(this.state);     
      this.RegisterHack.registerToHack(this.state);
      event.preventDefault();
      alert("YOU ARE SUCCESSFULLY REGISTERED TO HACKATHON");
    }

    render() {
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <label>
              <h1>Register to Hackathon:</h1>
              
              Team Name : <input type="text" value={this.state.tname} onChange={this.handleChange_tname} className="form-control"/>
              # of Persons : <input type="number" value={this.state.noofpersons} onChange={this.handleChange_noofpersons} className="form-control"/>
              Team Members : <input type="text" value={this.state.teamlist} onChange={this.handleChange_teamlist} className="form-control"/>
              Technonogy : <input type="text" value={this.state.technology} onChange={this.handleChange_technology} className="form-control"/>
            </label><br/>
            <input type="submit" value="Submit" className="btn btn-primary"/>
          </form>
      </div>
      );
    }
  }

export default RegisterHack;