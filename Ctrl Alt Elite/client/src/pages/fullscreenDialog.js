import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import Question1 from './question1';

import {
    Row,
    Col,
    CardBody,
    CardHeader,
    Card,
    Alert,
    Form,
  FormGroup,
  Label,
  Input,
  FormText,
  } from 'reactstrap';
  

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

const style = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
  });

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false,
    correct:false,
    showAlert:'',
    buttoncolor:"primary",
    buttontext:'Solve Challenge',
    points:10
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ 
        open: false,
        correct:false,
        showAlert:'' 
    });
  };
  correctValue= () => {
    this.setState({ 
        correct: true
     });
  };

  wrongValue= () => {
    this.setState({ 
        correct: false
     });
  };
  handleAnsSubmit=() => {
    let currentpoints=this.state.points;  
    (this.state.correct===true) ?
        this.setState({
            showAlert:'success',
            buttoncolor:'secondary',
            buttontext:'SOLVED'
        }) 
    :
        this.setState({
            showAlert:'fail',
            points:currentpoints-1
        })
  }

  handleDownload = () => {
    var string_val ="import os import sys  def simpleArraySum(ar):  if __name__ == '__main__':     fptr = open(os.environ['OUTPUT_PATH'], 'w')      ar_count = int(input())      ar = list(map(int, input().rstrip().split()))      result = simpleArraySum(ar)      fptr.write(str(result) + '\n')      fptr.close()"  
   
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(string_val));
    element.setAttribute('download', this.props.title+".txt");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleClickOpen} variant="contained" color={this.state.buttoncolor} className={classes.button}>{this.state.buttontext}</Button>
       
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.flex}>
                {this.props.title}
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                close
              </Button>
              <Button color="inherit" onClick={this.handleDownload}>
                Download Solution
              </Button>
            </Toolbar>
          </AppBar>
          <Row>
          <Col md="6" sm="12" xs="12">
          <Card>
            <CardHeader>
                Choose the Optimised correct answer
            </CardHeader>
            <CardBody>
                <FormGroup check>
                    <Label check>
                    <Input type="radio" name="radio2"  onChange={this.correctValue}/> 
                    def simpleArraySum(n, ar): <br />
                    return sum(ar)
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                    <Input type="radio" name="radio2" onChange={this.wrongValue}/> 
                    
                    def simpleArraySum(n, ar): <br />
                    sum+=array[i];

                    </Label>
                </FormGroup>
                <FormGroup check disabled>
                    <Label check>
                    <Input type="radio" name="radio2" onChange={this.wrongValue}/> 
                    def simpleArraySum(n, ar): <br />
                    sum=array[i];
                    </Label>
                </FormGroup>
            </CardBody>
            <CardBody>
            <Button variant="contained" color="primary" className={classes.button} onClick={this.handleAnsSubmit} >Submit </Button>
               {
                   (this.state.showAlert==='success') ?
                        <Alert color="success">
                        Hurray !! Thats the correct answer , you get {this.state.points} Points
                        </Alert>
                    :
                    (this.state.showAlert==='fail') ?
                        <Alert color="danger">
                        OPPS ! Sorry, give it a try once again
                        </Alert>
                    :
                    null    
                } 
            </CardBody>    

          </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
          <Card>
            
            <CardBody>
                <Question1 />
            </CardBody>
          </Card>
          </Col>
        </Row>
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);
