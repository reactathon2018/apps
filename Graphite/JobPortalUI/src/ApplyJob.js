import React, { Component } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class ApplyForJob extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
    }; 
  }
//   componentWillReceiveProps()
//   {
//       this.setState({
//           isapplied: this.props.isapplied,
//           candidateid: this.props.candidateid,
//           jobid: this.props.jobid
//         });
//   }

//   componentWillReceiveProps(nextProps){
//     if(nextProps.value !== this.props.value){
//         this.setState({
//             isapplied: this.nextProps.isapplied,
//             candidateid: this.nextProps.candidateid,
//             jobid: this.nextProps.jobid
//           });

//     }

//     console.log(this.state);
// }
componentWillMount(){
    
        this.setState({
            isapplied: this.props.isapplied,
            candidateid: this.props.candidateid,
            jobid: this.props.jobid
          });

    

    console.log("aaaa" + this.state.isapplied);
}

  handleClick(e) {
    var data = {
      candidateid: this.state.candidateid,
      jobid: this.state.jobid
    };

    var that = this;
    axios({
      method: "post",
      url: "http://localhost:4000/api/v1/insertapplication",
      data: data
    })
      .then(function(response) {
        console.log(response);
        that.setState({ isapplied: true });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;
    
    return (
      <div>
        {this.state.isapplied == "1" ? (
          <span>Applied</span>
        ) : 
        (
          <Button
            variant="outlined"
            href="#outlined-buttons"
            className={classes.button}
            onClick={this.handleClick}
          >
            Apply
          </Button>
        )}
      </div>
    );
  }
}

ApplyForJob.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ApplyForJob);
