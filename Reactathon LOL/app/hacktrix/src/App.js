import React from "react";
import Typography from "@material-ui/core/Typography";
import CenteredTabs from "./hackTab";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

// import CustomPaginationActionsTable from "./leadershipGrid";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    float: "right"
  }
}); 

class App extends React.Component {

  scoreClick = () => {    
    this.props.history.push("/scoreboard");    
  };
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <br />
        <Typography component="p" variant="body2" style={{ fontSize: "17px" }}>
          <center>
            Hacktrix is the one stop shop for all the Live, <br />Upcoming and
            Previous Hackathons.
            <br />Free and open to all ! Crack the Code !
          </center>
        </Typography>
        <br />        
        <Button className={classes.button}
        color = "secondary"
        onClick={this.scoreClick}>Score Board
        </Button>
        <CenteredTabs />
      </div>
    );
  }
}

export default withStyles(styles)(App);
