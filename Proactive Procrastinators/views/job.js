import React from 'react';
import  Component  from 'react';
import jobs from './jobs';
class ContactRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.contact.title}</td>
        <td>{this.props.contact.category}</td>
		<td>{this.props.contact.location}</td>
        <td>{this.props.contact.email}</td>
      </tr>
    );
  }
}

class ContactTable extends React.Component {
  render() {
    var rows = [];
    this.props.contacts.forEach((contact) => {
      if (contact.title.indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(<ContactRow contact={contact} />);
    });
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Job Title</th>
			<th>Category</th>
            <th>Location</th>
            <th>Contact Email</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }
  
  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return (
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
      </form>
    );
  }
}

class FilterableContactTable extends React.Component {
  constructor(props) {
    super(props);
    // FilterableContactTable is the owner of the state as the filterText is needed in both nodes (searchbar and table) that are below in the hierarchy tree.
    this.state = {
      filterText: ''
    };
    
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    
  }

  handleFilterTextInput(filterText) {
    //Call to setState to update the UI
    this.setState({
      filterText: filterText
    });
    //React knows the state has changed, and calls render() method again to learn what should be on the screen
  }
  
  render() {
    return (
      <div>
        <h1>Filterable React List</h1>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <ContactTable
          contacts={this.props.contacts}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}


var CONTACTS = [
  {title: 'Java developer', category: 'Technology', location: 'Bangalore, India', email: 'jerry@gmail.com'},
  {title: 'Software Engineer', category: 'Technology', location: 'Basking Ridge,NJ, United States', email: 'chucknorris@gmail.com'},
  {title: 'Splunk Security Engineer', category: 'Systems/Data Security', location: 'Hyderabad, India', email: 'diablo@gmail.com'},
  {title: 'Analyst-System Dev', category: 'Technology', location: 'Lyneham, Australia', email: 'tonystark@gmail.com'},
  {title: 'Lead Project Manager', category: 'Project Management', location: 'Alpharetta, GA, United States', email: 'peterparker@gmail.com'}
];

ReactDOM.render(
  <FilterableContactTable contacts={CONTACTS} />,
  document.getElementById('root')
);
