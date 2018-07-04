import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getEventsQuery = gql`
    {
        events {
            name
            desc
            location
            date
        }
    }
`;


const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList(props) {
  const { classes } = props;
  const { data} = props;
  const { events } = data;
  console.log("props"+JSON.stringify(props))

  if(props.loading){
    return <div>Loading deatils....</div>
  } else {
    var hackdetails = [];
    if(events != undefined) {
      events.forEach(
        function iterator( item ) {
            var obj = createData(item.name,item.desc,item.location,item.date);
            hackdetails.push(obj)
        }
    );
    function createData(name,desc,location,date) {
      return [ name,desc,location,date];
    }
    }

    console.log(hackdetails)

    return (
      <Grid container>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="danger">
              <h4 className={classes.cardTitleWhite}>Your Events</h4>
              <p className={classes.cardCategoryWhite}>
                Here is a list of events you have enrolled
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="danger"
                tableHead={["Event", "Description", "Location", "Date"]}
                tableData={hackdetails}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card plain>
            <CardHeader plain color="danger">
              <h4 className={classes.cardTitleWhite}>
              Upcoming Events
              </h4>
              <p className={classes.cardCategoryWhite}>
                Ready for these exciting events ??
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="danger"
                tableHead={["Event", "Description", "Location", "Date"]}
                tableData={[
                  ["1", "Hackathon 2018", "A 3 day hackathon event", "India - HYD/CHN", "20-07-2018"],
                  ["2", "Dockerthon 2k18 ", "A 2 day technical competition", "India - HYD/CHN", "15-08-2018"],
                  ["3", "Seminar on AWS Best Practices", "An one day technical seminar on AWS best practices", "Chennai", "25-07-2018"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    );
  }

}
const Comp1 = withStyles(styles) (TableList);
const Comp2 = graphql(getEventsQuery) (Comp1);
export default (Comp2);
