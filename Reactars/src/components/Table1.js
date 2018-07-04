import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
       import {
        loadEvent
    } from './../redux/actions/actions'
    import PropTypes from 'prop-types'
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'


class Table1 extends Component {
    componentWillReceiveProps(nextProps) {
        
    }
    componentDidMount() {
      this.props.getAllEvent()
    }
   
  render() {
   
    return (
            
            
        <div > {Object.keys(this.props.events).length > 0 ? <ItemList items ={this.props} /> : ''}
                        </div>
    );
  }
}
function ItemList ({items}) {
    return (
            <div className="users show">
            <div className="container-fluid main-container">
            <div className="banner-container animated fadeInUp-small" data-animation="fadeInUp-fadeOutDown-slow">
                <div className="hero-wrapper">
                    <header className="hero">
                        <div className="profile-info">
                            <h1 className="hero-title">{items.events.events.event_id}</h1>
                            </div>
                            </header>
                            </div>
                            </div>
                            </div>
                            </div>
                            )}
                            Table1.propTypes = {
                                params: PropTypes.object.isRequired
                            }
                            
                            const mapStateToProps = state => {
                                return {
                                    events: state.events.events
                                }
                            }
export default connect(mapStateToProps, { loadEvent })(Table1);