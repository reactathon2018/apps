import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import RecipeReviewCard from "./card";
import axios from "axios";
import RecipeReviewPrevCard from "./prevCard";

const styles = {
  root: {
    flexGrow: 1
  }
};

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

class CenteredTabs extends React.Component {
  state = {
    value: 0
  };
  currentEvents = [];
  upcomingEvents = [];
  pastEvents = [];

  componentDidMount() {
    axios.get(`http://10.74.21.47/events/live`).then(res => {
      const events = res.data;
      this.currentEvents = events;
      this.setState({ events: events });
    });

    axios.get(`http://10.74.21.47/events/upcoming`).then(res => {
      const events = res.data;
      this.upcomingEvents = events;
      this.setState({ events: events });
    });

    axios.get(`http://10.74.21.47/events/previous`).then(res => {
      const events = res.data;
      this.pastEvents = events;
      this.setState({ events: events });
    });
  }

  handleChange = (event, value) => {
    this.setState({ value: value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <Paper className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Live" />
            <Tab label="Upcoming" />
            <Tab label="Previous" />
          </Tabs>
        </Paper>
        {value === 0 && (
          <TabContainer>
            <RecipeReviewCard
              eventdetails={this.currentEvents}
              hideregistration="false"
			  tabType = "Live"
            />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <RecipeReviewCard
              eventdetails={this.upcomingEvents}
              hideregistration="false"
			  tabType = "Upcoming"
            />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <RecipeReviewPrevCard
              eventdetails={this.pastEvents}              
              hideregistration="true"
			  tabType = "Previous"
            />
          </TabContainer>
        )}
      </div>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredTabs);
