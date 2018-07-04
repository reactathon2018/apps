import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import queryString from "query-string";
import axios from "axios";

class JobApplication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _jobApplications: []
    };
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    console.log(values);

    var that = this;
    axios
      .get(
        "http://localhost:4000/api/v1/getcandidatedetailsbyid/" + values.id,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          }
        }
      )
      .then(function(response) {
        console.log(response.data);
        // handle success
        that.setState({ _jobApplications: response.data });
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
    var scheduledCards = this.state._jobApplications.map(function(application) {
      return (
        <div>
          <Card>
            <CardContent>
              <Typography component="p">
                Job Code: {application.jobid}
              </Typography>
              <Typography variant="headline" component="h2">
                {application.jobname}
              </Typography>
              <Typography component="p">
                Application Date: {application.applicationdate}
              </Typography>
              <Typography component="p">
                Status: {application.candidatestatus}
              </Typography>
              <Typography component="p">
                Comments: {application.comments}
              </Typography>
            </CardContent>
          </Card>
          <br />
        </div>
      );
    });
    return <div>{scheduledCards}</div>;
  }
}

export default JobApplication;
