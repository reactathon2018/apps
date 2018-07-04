import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
};
  class JobCard extends React.Component {
  
    constructor(props) {
      super(props);
        this.state = {
          url : "./JobDetail",
          property : props,
      };
    }

    componentDidMount() {
      this.setState({ url: this.state.url + "?id=" + this.state.property.jobid });
    }

 render() {

  const { classes } = this.state.property;

  return (
    <div>
        <div  >
        <Link to={this.state.url} style={{ textDecoration: 'none' }} >
        <Card className={classes.card}>
            <CardContent>
            <Typography variant="headline" component="h2">
                {this.state.property.jobname}
            </Typography>
            <Typography component="p">
                {this.state.property.jobposition}
            </Typography>
            <Typography component="p">
                {this.state.property.jobdescription}
            </Typography>
            <Typography component="p">
                {this.state.property.minexperience} - {this.state.property.maxexperience}
            </Typography>
            <Typography component="p">
                {this.state.property.joblocation}
            </Typography>
            </CardContent>
        </Card></Link>
        </div>
        <br/>
    </div>
  );
}
}

JobCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JobCard);


