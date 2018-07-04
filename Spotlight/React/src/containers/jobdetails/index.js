import React, { Component } from "react";
import { connect } from "react-redux";
const mapStateToProps = state => ({
  addJobSearch: check(state.jobsearch)
});
function check(data) {
  console.log("----")
  console.log(data);
  console.log("----")
  return data;
}
class JobDetail extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    console.log(this.props.addJobSearch.jobsearch    );
    let key = 0
    const listItems = this.props.addJobSearch.jobsearch.map((link) =>
        <li key={key++}>{link.jobsearch.code}</li> 
        
    );
    
    return (
      <div className="container mt-2">
        <div className="row">
          <div className="col">
          <ul>
            {listItems}
          </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(JobDetail);
