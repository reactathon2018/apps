import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Event from "@material-ui/icons/Event";
import Favorite from "@material-ui/icons/Favorite";
import Grade from "@material-ui/icons/Grade";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";


import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="rose" stats icon>
                <CardIcon color="rose">
                  <Event />
                </CardIcon>
                <p className={classes.cardCategory}># of events participated</p>
                <h3 className={classes.cardTitle}>
                  10
                </h3>
              </CardHeader>

            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="rose" stats icon>
                <CardIcon color="rose">
                  <Favorite />
                </CardIcon>
                <p className={classes.cardCategory}># of events won</p>
                <h3 className={classes.cardTitle}>7</h3>
              </CardHeader>

            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="rose" stats icon>
                <CardIcon color="rose">
                  <Grade />
                </CardIcon>
                <p className={classes.cardCategory}>Badge</p>
                <h3 className={classes.cardTitle}>Platinum</h3>
              </CardHeader>

            </Card>
          </GridItem>

        </Grid>

        <Grid container>

          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="danger">
                <h4 className={classes.cardTitleWhite}>LeaderBoard</h4>
                <p className={classes.cardCategoryWhite}>
                  See who's on the top..
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["Name", "Points", "Badge"]}
                  tableData={[
                    ["Jane Doe", "738", "Platinum"],
                    ["Minerva Hooper", "689", "Gold"],
                    [ "Sage Rodriguez", "142", "Silver"],
                    ["Philip Chaney", "35", "Bronze"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
