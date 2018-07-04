import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DataTables from 'material-ui-datatables';
import {createApolloFetch} from 'apollo-fetch'
import Report from "./chart";
import { BrowserRouter as Router } from 'react-router-dom';

export default class ApplyJobsGridHR extends React.Component {
    constructor(props) {
        super(props);
        const q = `query{ 
          Jobs{
            id
            title
            role
            positons
            description
            status
          }
        }`;
        this.state ={
          data:null,    
        };
        const uri = 'http://localhost:4000/graphql';
        const apolloFetch = createApolloFetch({ uri,
           
         });
        
        apolloFetch({
          query: q,
        }).then(res => {   
          this.saySomething(res.data);
          this.setState = {
            data: res.data
          };
          console.log(res.data);
      
          this.setState=({
                  data: res.data
              
          });
          console.log(this.state.data);
        });
        
        this.state = {
          Userdetails:{
           
          }
        };
        
        
      }
      
      saySomething(response) {    
        this.setState({ data: response.Jobs });
        console.log(this.state.data);
      };
    render() {
        const colums = [{
            key: 'id',
            label: 'Job ID',
          }, {
            key: 'title',
            label: 'Title',
          },
          {
            key: 'role',
            label: 'Role',
          },
          {
            key: 'positons',
            label: 'Positions',
          },
          {
            key: 'status',
            label: 'Status',
          }];
        return (
            <div className="grid">
            <h2>Current Job openings</h2>
            <MuiThemeProvider>
            <DataTables height={'auto'} width="50%" showRowHover={true} page={1} data ={this.state.data} columns={colums}  >
                        </DataTables>
                        </MuiThemeProvider>
                        
                        <br/><br/><br/>
<Router>
  <Report/>
  </Router> 
                      
        </div>
       )
      }
}

