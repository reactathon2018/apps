import React, { Component } from "react";

import { connect } from "react-redux";
import { addJobSearch } from "../../actions/jobsearchAction";

import Search from "../../components/search/index";
import CardView from "../../components/card/index";
const mapDispatchToProps = dispatch => {
  return {
    addJobSearch: jobsearch => dispatch(addJobSearch(jobsearch))
  };
};
class JobSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items1: [],
      items2: [],
      items3: [],
      items4: [],
      selectedJob: {}
    };
  }

  componentDidMount() {
    console.log("called in lifecycle");

    var items = [
      {
        code: "10332",
        title: "Analyst",
        Skills: "Java, Angular",
        Description:
          "4-6 years on experience in working on java desirably on spring boot and min 2 years of experience on Angular"
      },
      {
        code: "10331",
        title: "Senior Analyst",
        Skills: "Java, Angular",
        Description:
          "4-6 years on experience in working on java desirably on spring boot and min 2 years of experience on Angular"
      },
      {
        code: "10330",
        title: "Consultant",
        Skills: "Java, Angular",
        Description:
          "4-6 years on experience in working on java desirably on spring boot and min 2 years of experience on Angular"
      }
    ];

    let items1 = this.state.items1;
    let items2 = this.state.items2;
    let items3 = this.state.items3;
    let items4 = this.state.items4;
    items1 = items;
    items2 = items;
    items3 = items;
    items4 = items;

    this.setState({ items1 });
    this.setState({ items2 });
    this.setState({ items3 });
    this.setState({ items4 });
  }

  viewJobDetail(e, val) {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML == "Apply") {
      let detail = this.state.selectedJob;
      detail = val;
      console.log(val);
      this.props.addJobSearch({ jobsearch: detail });
      //this.setState({ selectedJob: detail });
      this.props.history.push("/jobdetail");
    } else {
      console.log(val);
    }
  }

  listJobSearch() {
    let items = this.state.items1;
    return (
      <div>
        {items.map((val, index) => {
          return (
            <CardView
              key={index}
              jobTitle={val.title}
              jobCode={val.code}
              keySkills={val.Skills}
              desc={val.Description}
              detail={e => this.viewJobDetail(e, val)}
            />
          );
        })}
      </div>
    );
  }

  listJobApplied() {
    let items = this.state.items1;
    return (
      <div>
        {items.map((val, index) => {
          return (
            <CardView
              key={index}
              jobTitle={val.title}
              jobCode={val.code}
              keySkills={val.Skills}
              detail={e => this.viewJobDetail(e, val)}
            />
          );
        })}
      </div>
    );
  }

  listRecommendedJobs() {
    let items = this.state.items3;
    return (
      <div>
        {items.map((val, index) => {
          return (
            <CardView
              key={index}
              jobTitle={val.title}
              jobCode={val.code}
              keySkills={val.Skills}
              detail={e => this.viewJobDetail(e, val)}
            />
          );
        })}
      </div>
    );
  }

  recentJobSearch() {
    let items = this.state.items4;
    return (
      <div>
        {items.map((val, index) => {
          return (
            <CardView
              key={index}
              jobTitle={val.title}
              jobCode={val.code}
              keySkills={val.Skills}
              detail={e => this.viewJobDetail(e, val)}
            />
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="grid">
          <Search />
          {this.listJobSearch()}
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(JobSearch);
