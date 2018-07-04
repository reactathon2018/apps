import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { withRouter } from 'react-router';
import CardItem from "./cardItem";

const styles = theme => ({
  cardRow: {
    width: "100%",
    margin: "0 auto"
  },
  card: {
    maxWidth: 400,
    width: "400px",
    float: "left",
    marginLeft: "30px",
    marginTop: "30px"
  },
  button: {
    marginLeft: 50
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class RecipeReviewCard extends React.Component {  

  render() {
    const { classes } = this.props;

    var eventarr = []
    // var eventarr = [
    //   {
    //     eventId: 1,
    //     eventName: "Event 1",
    //     eventDescription: "Event 1 Description",
    //     eventReleaseDate: "date",
    //     eventNominationStartDate: "July 2, 2018",
    //     eventNominationEndDate: "date",
    //     eventStartDate: "July 2, 2018",
    //     eventEndDate: "date",
    //     eventDemoDate: "date",
    //     eventFinaleDate: "date",
    //     eventEnabled: "date"
    //   }
    // ];

    if (
      this.props.eventdetails !== undefined
    ) {
      eventarr = this.props.eventdetails;
    }

    var me = this;
    
    return (
      <div className={classes.cardRow}>
        {eventarr.map(function(item) {
          return (
            <CardItem tabType={me.props.tabType} item={item}></CardItem>
          );
        })}
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(RecipeReviewCard));
