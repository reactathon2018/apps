import React,{Component} from 'react'

const Portfolio = [
    'NTS',
    'CMB',
    'VES',
    'CMB Wireless',
    'CFO',
    'CAO',
    'Others',
  ];

  class PortfolioCheckbox extends React.Component {
    constructor(props) {
        super(props);
        /* set the initial checkboxState to true */
        this.state = {
          checkboxState: true
        }
      }
      /* prevent form submission from reloading the page */
    onSubmit(event) {
        event.preventDefault();
      }
      /* callback to change the checkboxState to false when the checkbox is checked */
    toggle(event) {
      this.setState({
        checkboxState: !this.state.checkboxState
      });
    }
    render() {
      const checkedOrNot = [];
      checkedOrNot.push(
        <p>{this.state.checkboxState ? 'Unchecked' : 'Checked'}</p>
      );
      const checkbox = (
        <span>
          <input 
          type="checkbox"
          onClick={this.toggle.bind(this)}
          />
          <label>NTS</label>
          <br/>
        <input 
        type="checkbox"
        onClick={this.toggle.bind(this)}
        />
        <label>CMB</label>
        <br/>
        <input 
          type="checkbox"
          onClick={this.toggle.bind(this)}
          />
          <label>CMB Wireless</label>
          <br/>
          <input 
          type="checkbox"
          onClick={this.toggle.bind(this)}
          />
          <label>VES</label>
          <br/>
          <input 
          type="checkbox"
          onClick={this.toggle.bind(this)}
          />
          <label>CFO</label>
          <br/>
          <input 
          type="checkbox"
          onClick={this.toggle.bind(this)}
          />
          <label>CAO</label>
          <br/>
          <input 
          type="checkbox"
          onClick={this.toggle.bind(this)}
          />
          <label>Others</label>
          <br/>
      </span>
      );
  
      return (
        <div>
          <form onSubmit={this.onSubmit.bind(this)}>
            {checkbox}
           </form>
          </div>
      );
    }
  }

  export default PortfolioCheckbox;