import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { simpleAction } from './actions/simpleActions';
import * as actions from './actions/simpleActions';
import Navigator from './components/navigator';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';

class App extends Component {
  simpleAction = (event) => {
 this.props.simpleAction();
}
  render() {
    console.log(this.props.simpleReducer);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Verizon Job Portal</h1>
        </header>
        <Navigator {...this.props}/>
        <link rel="stylesheet" type="text/css" href="http://www.shieldui.com/shared/components/latest/css/light/all.min.css" />
<script type="text/javascript" src="http://www.shieldui.com/shared/components/latest/js/shieldui-all.min.js"></script>
      </div>
    );
  }
}
const mapStateToProps = state => ({
 ...state
});
const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(actions.simpleAction()),
 setCredentials: (payload) => dispatch(actions.setCredentials(payload)),
 onSubmithandler: (payload) => dispatch(actions.onSubmithandler(payload)),
 setUserLoggedIn: () => dispatch(actions.setUserLoggedIn()),
 editForm: () => dispatch(actions.editForm()),
 setCurrentProfilePage: (payload) => dispatch(actions.setCurrentProfilePage(payload)),
 getNewJobs: () => dispatch(actions.getNewJobs()),
 applyJob: (payload) => dispatch(actions.applyJob(payload)),
});

//const mapDispatchToProps = dispatch => (bindActionCreators({actions},dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(App);
