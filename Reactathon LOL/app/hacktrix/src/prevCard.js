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
import PrevCardItem from "./prevCardItem";

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

var Months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

class RecipeReviewPrevCard extends React.Component {
  constructor(props) {
    super(props);
    console.log("kk");
    console.log(this)
    this.onChange = this.onChange.bind(this);
    this.handleExpandClick = this.handleExpandClick.bind(this);
    this.leaderboardClick = this.leaderboardClick.bind(this);
    this.state.like = false
	this.state.eventId=0
  }

  state = { expanded: false };
  

  /*componentDidMount() {
    axios.get(`https://demo2123069.mockable.io/events`).then(res => {
      const events = res.data;
      this.setState({ events });
    });
  }*/

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
console.log(this.props);
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
    var extraDesc, extraDesc2, iconBtn = "";
    var extraDescVal, extraDesc1Val, extraDesc2Val, leaderBtn = "";
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
            <PrevCardItem tabType={me.props.tabType} item={item}></PrevCardItem>
          );
        })}
      </div>
    );

  }
}

RecipeReviewPrevCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(RecipeReviewPrevCard));
