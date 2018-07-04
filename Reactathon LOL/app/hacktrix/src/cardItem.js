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

var Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

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

class CardItem extends React.Component {
    state = { expanded: false };    
  
    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };

    registerNowClick = () => {
        this.props.history.push('/form');
      };

    render() {
        const { classes } = this.props;
        var extraDesc, extraDesc1, extraDesc2 = "";
        var extraDescVal, extraDesc1Val, extraDesc2Val = "";
        var me = this;
        var item = this.props.item;
        console.log(item);

        if (me.props.tabType === "Live") {
            extraDesc2 = "This event is live from ";
            extraDesc2Val = Months[new Date(item.eventReleaseDate).getDay().toString()] + " " + new Date(item.eventReleaseDate).getDate().toString() + ", " + new Date(item.eventReleaseDate).getFullYear().toString();
            extraDesc = "Gear up for the demo on ";
            extraDescVal = Months[new Date(item.eventDemoDate).getDay().toString()] + " " + new Date(item.eventDemoDate).getDate().toString() + ", " + new Date(item.eventDemoDate).getFullYear().toString();
            extraDesc1 = "Get excited for the Grand Finale Date on ";
            extraDesc1Val = Months[new Date(item.eventFinaleDate).getDay().toString()] + " " + new Date(item.eventFinaleDate).getDate().toString() + ", " + new Date(item.eventFinaleDate).getFullYear().toString();
          } else if (me.props.tabType === "Upcoming") {
            extraDesc2 = "This event is scheduled for ";
            extraDesc2Val = Months[new Date(item.eventReleaseDate).getDay().toString()] + " " + new Date(item.eventReleaseDate).getDate().toString() + ", " + new Date(item.eventReleaseDate).getFullYear().toString();;
            extraDesc = "Nominations starts on ";
            extraDescVal = Months[new Date(item.eventNominationStartDate).getDay().toString()] + " " + new Date(item.eventNominationStartDate).getDate().toString() + ", " + new Date(item.eventNominationStartDate).getFullYear().toString();
            extraDesc1 = "Nominations closes on ";
            extraDesc1Val = Months[new Date(item.eventNominationEndDate).getDay().toString()] + " " + new Date(item.eventNominationEndDate).getDate().toString() + ", " + new Date(item.eventNominationEndDate).getFullYear().toString();
          } else if (me.props.tabType === "Previous") {
            extraDesc2 = "This event was announced on ";
            extraDesc2Val = Months[new Date(item.eventReleaseDate).getDay().toString()] + " " + new Date(item.eventReleaseDate).getDate().toString() + ", " + new Date(item.eventReleaseDate).getFullYear().toString();;
            extraDesc = "This event was started on ";
            extraDescVal = Months[new Date(item.eventStartDate).getDay().toString()] + " " + new Date(item.eventStartDate).getDate().toString() + ", " + new Date(item.eventStartDate).getFullYear().toString();
            extraDesc1 = "This event was ended on ";
            extraDesc1Val = Months[new Date(item.eventEndDate).getDay().toString()] + " " + new Date(item.eventEndDate).getDate().toString() + ", " + new Date(item.eventEndDate).getFullYear().toString();
          }
          return (
            <Card key={item.eventId} id={item.eventId} className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                    {item.eventName.charAt(0)}
                  </Avatar>
                }
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.eventName}
                subheader={Months[new Date(item.eventStartDate).getDay().toString()] + " " + new Date(item.eventStartDate).getDate().toString() + ", " + new Date(item.eventStartDate).getFullYear().toString()}
              />
              <CardMedia
                className={classes.media}
                image="{this.eventImageBanner}"
                title="{this.eventName}"
              />
              <CardContent>
                <Typography component="p">
                  {item.eventDescription}
                </Typography>
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share">
                  <ShareIcon />
                </IconButton>

                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={me.registerNowClick}
                >
                  Register Now
                </Button>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: me.state.expanded
                  })}
                  onClick={me.handleExpandClick}
                  aria-expanded={me.state.expanded}
                  aria-label="Show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={me.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph variant="body2">
                    {item.eventLongDescription}
                  </Typography>
                  <Typography paragraph>
                    {extraDesc2}{extraDesc2Val}
                  </Typography>
                  <Typography paragraph>
                    {extraDesc}{extraDescVal}
                  </Typography>
                  <Typography paragraph>
                    {extraDesc1}{extraDesc1Val}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          );
    }
}

export default withStyles(styles)(withRouter(CardItem));