import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import avatar from "assets/img/faces/avatar.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function UserProfile(props) {
  const { classes } = props;
  return (
    <div>
    <Grid>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Jane Doe</h6>
              <h4 className={classes.cardTitle}>Software Engineer</h4>
              <p className={classes.description}>
                Number of Tech events participated : 10 |
                  Badge Type : Platinum
              </p>
              <Button color="primary" round>
                Platinum Badge
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(UserProfile);
