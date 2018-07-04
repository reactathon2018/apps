import React from 'react';
import {Col} from 'react-bootstrap';

class SideMenu extends React.Component {

    _setSideMenu(index){
        this.props._setSideMenu(index);
    }

    render(){

        return (
            <Col xs={2} id="sideList">
                <ul>
                    <li className={this.props.sideMenuIndex == 0 ?"sideMenu active":"sideMenu"} onClick={this._setSideMenu.bind(this,0)}>Events</li>
                    <li className={this.props.sideMenuIndex == 1 ?"sideMenu active":"sideMenu"} onClick={this._setSideMenu.bind(this,1)}>Leaderboard</li>
                    <li className={this.props.sideMenuIndex == 2 ?"sideMenu active":"sideMenu"} onClick={this._setSideMenu.bind(this,2)}>Achievements</li>
                    <li className={this.props.sideMenuIndex == 3 ?"sideMenu active":"sideMenu"} onClick={this._setSideMenu.bind(this,3)}>Manage Events</li>
                    <li className={this.props.sideMenuIndex == 4 ?"sideMenu active":"sideMenu"} onClick={this._setSideMenu.bind(this,4)}>Contact Us</li>
                </ul>
            </Col>
        );
    }

}
export default SideMenu;