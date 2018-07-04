import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';

import Divider from '@material-ui/core/Divider';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  
});

class IconButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes:0
    };

    this.upLike=this.upLike.bind(this);
    this.downLike=this.downLike.bind(this);
  }

  upLike(){
    this.setState(prevState => ({
      likes: prevState.likes+1
    }));
  }
  downLike(){
    this.setState(prevState => ({
      likes: prevState.likes-1
    }));
  }
  setLikes(like){
    
  }
  
  componentDidMount(){
    this.setState(e=>({
      likes:this.props.initLikes
    }))
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
       <IconButton className={classes.button} aria-label="Delete" onClick={this.upLike}>
         <ThumbUp />
       </IconButton>
       {this.state.likes}
       <IconButton className={classes.button} aria-label="Delete" onClick={this.downLike}>
         <ThumbDown />
       </IconButton>
       <Divider />
     </div>
    );
  }
}

IconButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconButtons);
