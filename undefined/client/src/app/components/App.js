import React from 'react';
import '../App.css';
import MenuContainer from '../../menu/container/MenuContainer';
import { Switch, Route } from 'react-router-dom';
import Home from '../../home/components/Home';
import ModalContainer from '../../Modal/container/ModalContainer';
import LeaderBoardContainer from '../../leaderBoard/container/LeaderBoardContainer';
import HackthonDetailViewContainer from '../../HackthonDetailView/container/HackthonDetailViewContainer';
import Dashboard from '../../dashboard/container/DashboardContainer';

/* admin module goes here */
import AdminDashboard from '../../admin/container/AdminDashboard';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/leaderBoard' component={LeaderBoardContainer} />
      <Route exact path='/hackthondetailview/:number' component={HackthonDetailViewContainer} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/admin' component={AdminDashboard} />
    </Switch>
  </main>
)


export default class App extends React.Component {

  render() {    
    return (
      <div className="App" >
        <MenuContainer />
        <Main />
        <ModalContainer />
      </div>
    )
  }
}

