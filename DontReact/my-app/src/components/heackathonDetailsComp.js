import React, {Component} from 'react';
import {connect} from 'react-redux';
import DetailsList from './detailsListComp';
import Api from '../Api/hackDetailsApi';

class DetailsComp extends Component{

  componentDidMount(){   
    this.props.fetchData();
  }

  render(){
    console.log(" My fetching data ",this.props.fetchingData);
    if(this.props.fetchingData){
      return (       
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
      )
    }
    return(
      <div className="ui segment detailsList">         
            <div className="ui relaxed divided list">                
              {
                this.props.hackDetails.map((details,index) =>{
                  return ( <DetailsList key={index} {...details} /> )
                  })
              }              
          </div>       
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    hackDetails : state.hackDetailsReducer.hackDetails,
    fetchingData : state.hackDetailsReducer.fetchingData
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchData : () =>{
      Api.fetchuserDetails(dispatch);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailsComp);
