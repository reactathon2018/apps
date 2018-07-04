import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  container: {
    flexWrap: "wrap"
  },
  cardBlock: {
    width: "50%",
    float: "center",
    maxWidth: "50%",
    marginLeft: "25%",
    marginTop: "30px"
  },
  textField: {
    width: "70%"
  },
  button: {
    marginBottom: 15,
    marginLeft: 50,
    float: "center"
  },
  menu: {
    width: 200
  },
  cardForm: {
    marginTop: 15,
    marginLeft: 100,
    float: "center"
  }
});

// const currencies = [
//   {
//     value: "USD",
//     label: "$"
//   },
//   {
//     value: "EUR",
//     label: "€"
//   },
//   {
//     value: "BTC",
//     label: "฿"
//   },
//   {
//     value: "JPY",
//     label: "¥"
//   }
// ];

class TextFields extends React.Component {
  state = {
    name: "",
    email1: "",
    email2: "",
    email3: "",
    email4: "",
    email5: "",
    org: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  submitClick = () => {
    this.props.history.push("/");
  };
  backClick = () => {
    this.props.history.push("/");
  };
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.cardBlock}>
        <form className={classes.container} noValidate autoComplete="off">
          <div className={classes.cardForm}>
            <Typography variant="title">Registration Form</Typography>
          </div>
          <div className={classes.cardForm}>
            <TextField
              id="name"
              label="Team Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange("name")}
              margin="normal"
            />
          </div>
          <div className={classes.cardForm}>
            <TextField
              id="email1"
              label="Email 1"
              className={classes.textField}
              value={this.state.email1}
              onChange={this.handleChange("email1")}
              margin="normal"
            />
          </div>
          <div className={classes.cardForm}>
            <TextField
              id="email2"
              label="Email 2"
              className={classes.textField}
              value={this.state.email2}
              onChange={this.handleChange("email2")}
              margin="normal"
            />
          </div>
          <div className={classes.cardForm}>
            <TextField
              id="email3"
              label="Email 3"
              className={classes.textField}
              value={this.state.email3}
              onChange={this.handleChange("email3")}
              margin="normal"
            />
          </div>
          <div className={classes.cardForm}>
            <TextField
              id="email4"
              label="Email 4"
              className={classes.textField}
              value={this.state.email4}
              onChange={this.handleChange("email4")}
              margin="normal"
            />
          </div>
          <div className={classes.cardForm}>
            <TextField
              id="email5"
              label="Email 5"
              className={classes.textField}
              value={this.state.email5}
              onChange={this.handleChange("email5")}
              margin="normal"
            />
          </div>
          <div className={classes.cardForm}>
            <TextField
              id="org"
              label="Organization"
              className={classes.textField}
              value={this.state.org}
              onChange={this.handleChange("org")}
              margin="normal"
            />
          </div>
          <div className={classes.cardForm}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={this.backClick}
            >
              Back
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={this.submitClick}
            >
              Submit
            </Button>
          </div>
        </form>
      </Card>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
