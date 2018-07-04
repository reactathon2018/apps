import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import CardPage from 'pages/CardPage';
import Upcoming from 'pages/Upcoming';
import Your from 'pages/Your';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 10 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs style={{ backgroundColor: '#fff'}} value={value} onChange={this.handleChange}>
            <Tab style={{ backgroundColor: '#fc5c7b' }} label="Ongoing Challenges" />
            <Tab style={{ backgroundColor: '#fc5c7b' }} label="Upcoming Challenges" />
            <Tab style={{ backgroundColor: '#fc5c7b' }} label="My Challenges" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
            <CardPage/>
        </TabContainer>}
        {value === 1 && <TabContainer>
          <Upcoming/>
        </TabContainer>}
        {value === 2 && <TabContainer>
          <Your/>
        </TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
