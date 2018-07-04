import React, { Component } from "react";
import ProgressSteps from "react-progress-steps";
import CardView from "../../components/card/index";
import "./index.css";

class Applications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items1: [
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
      ]
    };
  }

  componentDidMount() {}
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

  render() {
    return (
      <div className="container">
        <div className="grid">{this.listJobSearch()}</div>
      </div>
    );
  }
}

export default Applications;
