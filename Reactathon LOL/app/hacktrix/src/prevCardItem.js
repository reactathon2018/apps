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
import { withRouter } from 'react-router'
import axios from "axios";


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

class PrevCardItem extends React.Component {
    state = { expanded: false };    

    handleExpandClick = (e) => {
        e.preventDefault();
        console.log(e.target.name)
        this.setState(state => ({ expanded: !state.expanded }));
      };
      leaderboardClick = (id) => {
        console.log(id);
        this.props.history.push('/leadergrid/'+id);
      };
      onChange(e) {
        console.log("lll");
        this.setState({ [e.target.name]: e.target.value });
      };
      likeToggleClick = (e) => {
        this.setState({ like: !this.state.like})
        var url = ""
        console.dir(this.props.eventdetails)
        console.dir(this.state)
        if (this.state.like){
          // if already liked
          url = "http://10.74.21.47/solutions/dislike/" + this.props.eventdetails + "/1" 
        } else {
          url = "http://10.74.21.47/solutions/like/" + this.props.eventdetails + "/1"
        }
        if (url !== "undefined") {
          axios.put(url).then(res => {
            console.log(res)
          });
        }
      }

    render() {
        const { classes } = this.props;

        var extraDesc, extraDesc2, iconBtn = "";
    var extraDescVal, extraDesc1Val, extraDesc2Val, leaderBtn = "";

        var me = this;
        var item = this.props.item;
        console.log(item);

        extraDesc2 = "This event was released on ";          
        extraDesc2Val = Months[new Date(item.eventReleaseDate).getDay().toString()] + " " + new Date(item.eventReleaseDate).getDate().toString() + ", " + new Date(item.eventReleaseDate).getFullYear().toString();
        extraDesc = "Event Schedule : ";
        extraDescVal = Months[new Date(item.eventStartDate).getDay().toString()] + " " + new Date(item.eventStartDate).getDate().toString() + ", " + new Date(item.eventStartDate).getFullYear().toString();          
        extraDesc1Val = Months[new Date(item.eventEndDate).getDay().toString()] + " " + new Date(item.eventEndDate).getDate().toString() + ", " + new Date(item.eventEndDate).getFullYear().toString();
        iconBtn = "iconBtn" + item.eventId;
          

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
                <IconButton aria-label="Add to favorites" onClick={me.likeToggleClick}>
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share">
                  <ShareIcon />
                </IconButton>

                <Button id={item.eventId}
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={() => me.leaderboardClick(item.eventId)}
                >
                  Leaderboard
                </Button>
                <IconButton key={item._id} id={item._id}
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: me.state.expanded
                  })}
                  onChange={me.onChange}
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
                    {extraDesc} {extraDescVal} - {extraDesc1Val}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          );
    }
}

export default withStyles(styles)(withRouter(PrevCardItem));