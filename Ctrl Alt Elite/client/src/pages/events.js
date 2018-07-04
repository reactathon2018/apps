import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';

import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';

import user4Image from 'assets/img/users/100_4.jpg';

import {
    Card,
  CardImg,
  Progress,
  CardImgOverlay,
  CardText,
  CardLink,
    CardBody,
    CardHeader,
    CardTitle,
    CardGroup,
    CardDeck,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Badge,
    Input
  } from 'reactstrap';

  
  import SupportTicket from 'components/SupportTicket';
  
  import {
    MdInsertChart,
    MdBubbleChart,
    MdPieChart,
    MdShowChart,
    MdPersonPin,
    MdRateReview,
    MdThumbUp,
    MdShare,
  } from 'react-icons/lib/md';

  import {
    supportTicketsData,
    userProgressTableData
  } from 'demos/dashboardPage';

import UserProgressTable from 'components/UserProgressTable';
import ControlledExpansionPanels from './eventsdisplay';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
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
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class ScrollableTabsButtonForce extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        value: 0,
        comments:[],
        inputTexts:''
      };
      this.addComment=this.addComment.bind(this);
  }
    

  handleChange = (event, value) => {
    this.setState({ value });
  };
  


  addComment(){
    var textarea=this.state.inputTexts;
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    let comment=this.state.comments;
    comment.push(
        {
            id: rand,
            avatar: user4Image,
            name: 'You',
            date: 'Now',
            text:textarea,
            status: '',
            likes:0
        }
    );
    this.setState({comments:comment});
    this.setState({inputTexts:''});
  }
  

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Challenges" icon={<ThumbUp />} />
            <Tab label="Leaderboard" icon={<PersonPinIcon />} />
            <Tab label="Forum" icon={<HelpIcon />} />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><ControlledExpansionPanels /></TabContainer>}
        {value === 1 && <TabContainer>
           <Row> 
            <Col md="12" sm="12" xs="12">
            <Card>
              <CardBody>
                <UserProgressTable
                  headers={[
                    <MdPersonPin size={25} />,
                    'Name',
                    'Points',
                    'Accuracy',
                    'Rank',
                  ]}
                  usersData={userProgressTableData}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        </TabContainer>}
        {value === 2 && <TabContainer>
          <Row>  
            <Col lg="12" md="12" sm="12" xs="12">
            <Card>
            <CardBody>
            {supportTicketsData.map(supportTicket => (
                <SupportTicket key={supportTicket.id} {...supportTicket} />
            ))}
            
            {this.state.comments.map(supportTicket => (
                <SupportTicket key={supportTicket.id} {...supportTicket} />
            ))}
            </CardBody>
            <CardBody>
                  <Input id="textar" type="textarea" value={this.state.inputTexts} name="text" placeholder="Comment here" onChange={(event)=>{
                      this.setState({
                        inputTexts:event.target.value
                      });
                   }}/>
                  <Button onClick={this.addComment} variant="extendedFab" aria-label="delete" color='primary' className={classes.button}>
                  <AddIcon />
                  
                    Submit
                </Button>
            </CardBody >   
           </Card>
          </Col>
        </Row>        
        </TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonForce);
