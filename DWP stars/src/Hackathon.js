import React, { Component } from "react";
 
class Hackathon extends Component {

render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Upcoming Events
            </h3>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Event Name</th>
                  <th>Organizor</th>
                  <th>Description</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              <tbody>             
                  <tr>
                    <td>Reactathon</td>
                    <td>DWP</td>
                    <td>Its time to build awesome Ui with newn tech stack- ReactJS, Redux, React Native, GraphQL, Node js and more in Reactathon.!</td>
                    <td>09/07/2018</td>
                    <td>12/07/2018</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Hackathon;