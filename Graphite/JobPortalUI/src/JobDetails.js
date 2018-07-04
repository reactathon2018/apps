import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import queryString from "query-string";
import axios from "axios";
import ApplyJob from './ApplyJob'
import { CardActions } from "@material-ui/core";

class JobDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _jobDetails: []
    };
  }


  componentWillMount() {
    const values = queryString.parse(this.props.location.search);
    console.log(values);

    var that = this;
    axios
      .get("http://localhost:4000/api/v1/getjddetailsbyid/" + values.id, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      })
      .then(function(response) {
        console.log(response.data);
        // handle success
        that.setState({ _jobDetails: response.data[0] });
        console.log(that.state._jobDetails.isapplied);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  }
  getIsApplied(){
      return `${this.state._jobDetails.isapplied}`;
  }
  render() {
      const isapplied = this.getIsApplied();
      console.log("isapplied :::" +isapplied);
      const jobid =  this.state._jobDetails.jobid; 
    return (
      <div>
        <div>
          <Card>
            <CardContent>
              <Typography variant="headline" component="h2">
                Job Name: {this.state._jobDetails.jobname}
              </Typography>
              <Typography component="p">
                {this.state._jobDetails.jobposition}
              </Typography>
              <Typography component="p">
                {this.state._jobDetails.jobdescription}
              </Typography>
              <Typography component="p">
                Primary Skills: {this.state._jobDetails.jobprimaryskills}
              </Typography>
              <Typography component="p">
                {this.state._jobDetails.minexperience} -{" "}
                {this.state._jobDetails.maxexperience}
              </Typography>
              <Typography component="p">
                {this.state._jobDetails.joblocation}
              </Typography>
              <Typography component="p">
                Vacancies: {this.state._jobDetails.openpositions}
              </Typography>
              <Typography component="p">
                Employee Type: {this.state._jobDetails.employeetype}
              </Typography>
              <Typography component="p">
                Position Validity: {this.state._jobDetails.jobclosedate}
              </Typography>
              <br/>
              <ApplyJob candidateid="C0001" isapplied={isapplied}  jobid={this.state._jobDetails.jobid} />
            </CardContent>
   
          </Card>
        </div>
        <br />
      </div>
    );
  }
}

export default JobDetails;
