import React, {Component} from 'react';
import {Row,Col} from 'react-bootstrap';
import SideMenu from './SideMenu/SideMenu.jsx';
import SideBody from './SideDetails/SideBody.jsx';

class body extends Component {

    state = {
        sideMenuIndex : 3
    }
    
    _setSideMenu(index){
        this.setState({sideMenuIndex:index});
    }

    render(){
        return (
            <Row id="mainBody">
                <SideMenu _setSideMenu={this._setSideMenu.bind(this)} sideMenuIndex={this.state.sideMenuIndex}/>
                <SideBody sideMenuIndex={this.state.sideMenuIndex}/>
            </Row>
        );
    }

}
export default body;