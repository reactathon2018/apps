import React, { Component } from "react";
 
class Leaderboard extends Component {
  render() {
   return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
             Leaderboard
            </h3>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Participants</th>
                  <th>Total Score</th>
                  <th>Attempts</th>
                  <th>Last Submission</th>                
                </tr>
              </thead>
              <tbody>             
                  <tr>
                    <td>1</td>
                    <td>XXXXXXXX</td>
                    <td>97.00</td>
                    <td>1</td>
                    <td>55 Days Ago</td>
                  </tr>
                   <tr>
                    <td>1</td>
                    <td>YYYYYYYYY</td>
                    <td>82.00</td>
                    <td>1</td>
                    <td>55 Days Ago</td>
                  </tr>
                   <tr>
                    <td>1</td>
                    <td>XXXXXXXX</td>
                    <td>76.00</td>
                    <td>1</td>
                    <td>55 Days Ago</td>
                  </tr>
                   <tr>
                    <td>1</td>
                    <td>YYYYYYYYY</td>
                    <td>91.00</td>
                    <td>1</td>
                    <td>55 Days Ago</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Leaderboard;