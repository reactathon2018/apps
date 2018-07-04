import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const mapStateToProps = state => ({
  addJobSearch: check(state.candidate)
});
function check(data) {
  console.log("----")
  console.log(data);
  console.log("----")
  return data;
}
class sideNav extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <aside
        className="sidebar pos-absolute z-2"
        data-role="sidebar"
        data-toggle="#sidebar-toggle-3"
        id="sb3"
        data-shift=".shifted-content-2"
        data-static-shift=".shifted-content-2"
        data-static="md"
      >
        <div className="sidebar-header" data-image="images/sb-bg-1.jpg">
          <div className="avatar">
            <img data-role="gravatar" data-email="sergey@pimenov.com.ua" />
          </div>
          <span className="title fg-white">Metro 4 Components Library</span>
          <span className="subtitle fg-white"> 2018 © Sergey Pimenov</span>
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/dashoboard">
              <span className="mif-chart-bars icon" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/jobSearch">
              <span className="mif-home icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/jobSearch">
              <span className="mif-language icon" />
              Jobs Search
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <span className="mif-profile icon" />
              My Profile
            </Link>
          </li>
          <li>
            <Link to="/Interviewer">
              <span className="mif-filter icon" />My Schedules
            </Link>
          </li>

          <li className="divider" />
          <li>
            <Link to="/CreateJob">
              <span className="mif-create-new-folder icon" />Create Jobs
            </Link>
          </li>
        </ul>
      </aside>
    );
  }
}
export default connect(mapStateToProps)(sideNav);
