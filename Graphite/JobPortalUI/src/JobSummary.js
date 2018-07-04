import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import JobCard from "./JobCard";
import axios from "axios";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};
class JobSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      jobsData: []
    };
  }

  componentDidMount() {
    var that = this;
    axios
      .get("http://localhost:4000/api/v1/getjdsummary", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      })
      .then(function(response) {
        console.log(response.data);
        // handle success
        that.setState({ jobsData: response.data });
        //console.log(that.state.jobsData);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  }

  render() {
    var namesList = this.state.jobsData.map(function(name) {
      return (
        <JobCard
          key={name.jobid}
          jobid={name.jobid}
          jobname={name.jobname}
          jobposition={name.jobposition}
          jobdescription={name.jobdescription}
          minexperience={name.minexperience}
          maxexperience={name.maxexperience}
          joblocation={name.joblocation}
        />
      );
    });
    return <div> {namesList}</div>;
  }
}

JobSummary.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobSummary);
